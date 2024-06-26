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

import '@testing-library/jest-dom/vitest';
import { test, expect, vi, beforeAll } from 'vitest';
import { render, waitFor } from '@testing-library/svelte';
import type { ContainerInfoUI } from './ContainerInfoUI';
import ContainerDetailsTtyTerminal from './ContainerDetailsTtyTerminal.svelte';

const getConfigurationValueMock = vi.fn();
const attachContainerMock = vi.fn();

beforeAll(() => {
  (window as any).getConfigurationValue = getConfigurationValueMock;
  (window as any).attachContainer = attachContainerMock;
  (window as any).attachContainerSend = vi.fn();

  (window as any).matchMedia = vi.fn().mockReturnValue({
    addListener: vi.fn(),
  });
});

test('expect being able to attach terminal ', async () => {
  const container: ContainerInfoUI = {
    id: 'myContainer',
    state: 'RUNNING',
    engineId: 'podman',
  } as unknown as ContainerInfoUI;

  let onDataCallback: (data: Buffer) => void = () => {};

  const sendCallbackId = 12345;
  attachContainerMock.mockImplementation(
    (
      _engineId: string,
      _containerId: string,
      onData: (data: Buffer) => void,
      _onError: (error: string) => void,
      _onEnd: () => void,
    ) => {
      onDataCallback = onData;
      // return a callback id
      return sendCallbackId;
    },
  );

  // render the component with a terminal
  const renderObject = render(ContainerDetailsTtyTerminal, { container, screenReaderMode: true });

  // wait attachContainerMock is called
  await waitFor(() => expect(attachContainerMock).toHaveBeenCalled());

  // write some data on the terminal
  onDataCallback(Buffer.from('hello\nworld'));

  // wait 1s
  await new Promise(resolve => setTimeout(resolve, 1000));

  // search a div having aria-live="assertive" attribute
  const terminalLinesLiveRegion = renderObject.container.querySelector('div[aria-live="assertive"]');

  // check the content
  expect(terminalLinesLiveRegion).toHaveTextContent('hello world');

  // check we have called attachContainer
  expect(attachContainerMock).toHaveBeenCalledTimes(1);
});
