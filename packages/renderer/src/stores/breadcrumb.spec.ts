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

import type { TinroBreadcrumb } from 'tinro';
import { lastPage, currentPage, history } from './breadcrumb';
import { test, expect } from 'vitest';
import { get } from 'svelte/store';

export function mockBreadcrumb() {
  history.set([{ name: 'List', path: '/list' } as TinroBreadcrumb]);
  lastPage.set({ name: 'Previous', path: '/last' } as TinroBreadcrumb);
  currentPage.set({ name: 'Current', path: '/current' } as TinroBreadcrumb);
}

test('Confirm mock values', async () => {
  mockBreadcrumb();

  const cur = get(lastPage);
  expect(cur.name, 'Current');

  const last = get(lastPage);
  expect(last.name, 'Previous');

  const hist = get(history);
  expect(hist[0].name, 'List');
});
