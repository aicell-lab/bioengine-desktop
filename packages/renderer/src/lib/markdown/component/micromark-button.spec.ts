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

import type { CompileContext } from 'micromark-util-types';
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { createUIButton } from './micromark-button';

test('Expect createUIButton to return a button with a spinner and an error icon', async () => {
  let html = '';
  const context: CompileContext = {
    options: {},
    setData: vi.fn(),
    getData: vi.fn(),
    lineEndingIfNeeded: vi.fn(),
    encode: vi.fn(),
    buffer: vi.fn(),
    resume: vi.fn(),
    raw: function (value: string): undefined {
      html += value;
    },
    tag: function (value: string): undefined {
      html += value;
    },
    sliceSerialize: vi.fn(),
  };
  createUIButton.bind(context)({
    id: 'id',
    title: 'command',
  });

  const htmlSanitized: string = html.replace('\n', '').replace(/\s+/g, ' ');
  expect(htmlSanitized).toContain(`<button id='micromark-button-1'`);
  expect(htmlSanitized).toContain(`<i id='micromark-spinner-1'`);
  expect(htmlSanitized).toContain(`<i id='micromark-button-1-failed-icon'`);
});
