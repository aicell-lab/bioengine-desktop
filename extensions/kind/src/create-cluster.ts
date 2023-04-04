/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/
import type * as extensionApi from '@podman-desktop/api';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { runCliCommand } from './util';
import mustache from 'mustache';

import createClusterConfTemplate from './templates/create-cluster-conf.mustache?raw';

export function getKindClusterConfig(clusterName: string, httpHostPort: number, httpsHostPort: number) {
  return mustache.render(createClusterConfTemplate, {
    clusterName: clusterName,
    httpHostPort: httpHostPort,
    httpsHostPort: httpsHostPort,
  });
}

export async function createCluster(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: { [key: string]: any },
  logger: extensionApi.Logger,
  kindCli: string,
): Promise<void> {
  let clusterName = 'kind';
  if (params['kind.cluster.creation.name']) {
    clusterName = params['kind.cluster.creation.name'];
  }

  // grab provider
  let provider = 'docker';
  if (params['kind.cluster.creation.provider']) {
    provider = params['kind.cluster.creation.provider'];
  }

  const env = Object.assign({}, process.env);
  // add KIND_EXPERIMENTAL_PROVIDER env variable if needed
  if (provider === 'podman') {
    env['KIND_EXPERIMENTAL_PROVIDER'] = 'podman';
  }

  // grab http host port
  let httpHostPort = 9090;
  if (params['kind.cluster.creation.http.port']) {
    httpHostPort = params['kind.cluster.creation.http.port'];
  }

  // grab https host port
  let httpsHostPort = 9443;
  if (params['kind.cluster.creation.https.port']) {
    httpsHostPort = params['kind.cluster.creation.https.port'];
  }

  // create the config file
  const kindClusterConfig = getKindClusterConfig(clusterName, httpHostPort, httpsHostPort);

  // create a temporary file
  const tmpDirectory = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'kind-cluster-config-'));

  // path to the file inside this directory
  const tmpFilePath = path.join(tmpDirectory, 'kind-cluster-config.yaml');

  // ok we need to write the file
  await fs.promises.writeFile(tmpFilePath, kindClusterConfig, 'utf8');

  // now execute the command to create the cluster
  const result = await runCliCommand(kindCli, ['create', 'cluster', '--config', tmpFilePath], { env, logger });

  // delete temporary directory/file
  await fs.promises.rm(tmpDirectory, { recursive: true });

  if (result.exitCode !== 0) {
    throw new Error(`Failed to create kind cluster. ${result.error}`);
  }
}