import { cn } from '@bem-react/classname';

import { canUseDOM } from './canUseDOM';

export const cnTheme = cn('Theme');

export type Nullable<T> = T | null;

export type Theme = {
  color: string;
  root: string;
};

type ConfigureRootThemeOptions = {
  /**
   * Корневая тема приложения.
   */
  theme: Theme;

  /**
   * DOM-Элемент на который должна быть установлена корневая тема.
   *
   * @default HTMLBodyElement
   */
  root?: Nullable<Element>;
};

let prevClassName = '';

export const configureRootTheme = ({
  theme,
  root = canUseDOM() ? document.body : null
}: ConfigureRootThemeOptions): void => {
  if (!canUseDOM) {
    return;
  }

  if (!root) {
    throw new Error('Значение в root не является DOM-элементом, невозможно установить глобальную тему.');
  }

  const rootClassName = root.className.replace(prevClassName, '');

  prevClassName = cnTheme(theme);

  root.className = `${rootClassName} ${prevClassName}`;
};
