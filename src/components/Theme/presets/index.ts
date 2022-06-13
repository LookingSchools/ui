/**
 * Вспомогательный модуль, для использования в тестах или примерах.
 *
 * @internal
 */

import { theme as themeExternal } from './external';
import { theme as themeInternal } from './internal';

export const presets = {
  external: themeExternal,
  internal: themeInternal
};

// eslint-disable-next-line
const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

export const presetsKeys = keys(presets);
