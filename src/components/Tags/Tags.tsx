import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  FC,
  Ref,
  ReactNode,
  ElementType,
  CSSProperties,
  ReactElement
} from 'react';
import { cn } from '@bem-react/classname';
import { useForkRef } from '../useForkRef';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { Button } from '../Button/Button.bundle'
import { useResizeObserver } from '../useResizeObserver';
import { useUniqId } from '../../hooks/useUniqId';
import './Tags.scss';

export const cnTags = cn('Tags');

export interface ITagsProps {
  /**
   * Текст для озвучки скринридером названия группы тэгов
   */
  'aria-label'?: string;

  /**
   * Количество видимых строк
   * @default 2
   */
  lineClamp?: number;

  /**
   * Кастомный стиль корневого элемента
   */
  className?: string;

  /**
   * Корневой тэг компонента
   * @default 'div'
   */
  tag?: ElementType;

  /**
   * Ссылка на корневой DOM элемент компонента
   */
  innerRef?: Ref<HTMLElement>;

  /**
   * Ссылка на DOM-элемент нативного контрола
   */
  controlRef?: Ref<HTMLElement>;

  /**
   * CSS-стили иконки
   *
   * @default {}
   */
  style?: CSSProperties;


  /**
   * Текст кнопки.
   */
    children?: ReactNode;
}

type InputGetCursorCut = {
  childrenWidth: number[];
  gap: number;
  lineClamp: number;
  rootWidth: number;
  togglerWidth: number;
};
interface GetCursorCut {
  // eslint-disable-next-line no-unused-vars
  (props: InputGetCursorCut): number;
}

const getCursorCut: GetCursorCut = ({
  childrenWidth = [],
  gap = 0,
  lineClamp = 2,
  rootWidth = 200,
  togglerWidth = 0
}) => {
  let cursor = 0;
  let fullWidth = 0;
  let hasToggler = false;

  childrenWidth.some((width, i, arr) => {
    const isLatestRow = Math.ceil((fullWidth + width) / rootWidth) >= lineClamp;
    if (isLatestRow && !hasToggler) {
      fullWidth = fullWidth + togglerWidth + gap;
      hasToggler = true;
    }
    const remainder = (fullWidth / rootWidth) % 1;
    const newWidth = remainder * rootWidth + width + gap;

    if (isLatestRow && newWidth > rootWidth) {
      return true;
    }

    let space = 0;
    if (newWidth + (childrenWidth.length !== i ? arr[i + 1] : 0) < rootWidth) {
      space = gap;
    } else if (remainder !== 0) {
      space = rootWidth - newWidth;
    }

    fullWidth = fullWidth + width + space;
    cursor = cursor + 1;
    return false;
  });

  return cursor;
};

const chevronRight20 =
  'M8,13.4c-0.3,0.3-0.3,0.9,0,1.3c0.3,0.3,0.9,0.3,1.3,0L14,10L9.3,5.3C8.9,4.9,8.4,4.9,8,5.3C7.7,5.6,7.7,6.2,8,6.6l3.4,3.4L8,13.4z';
const chevronLeft20 =
  'M9.4,10l3.4-3.4c0.3-0.3,0.3-0.9,0-1.3c-0.3-0.3-0.9-0.3-1.3,0L6.9,10l4.7,4.7c0.3,0.3,0.9,0.3,1.3,0c0.3-0.3,0.3-0.9,0-1.3L9.4,10z';

const initialDimentions = {
  childrenWidth: [] as number[],
  childrenHeight: 0,
  columnGap: 0,
  rootWidth: null,
  togglerWidth: 0
};

const DEFAULT_GAP = process.env.NODE_ENV === 'test' ? 8 : 0;
const DEFAULT_TOGGLER_WIDTH = process.env.NODE_ENV === 'test' ? 95 : 0;
const DEFAULT_COLLAPSED_SIZE = process.env.NODE_ENV === 'test' ? 64 : 0;

export const Tags: FC<ITagsProps> = ({
  'aria-label': ariaLabel,
  children,
  className,
  controlRef,
  innerRef,
  lineClamp = 2,
  style = {},
  tag = 'div',
  ...props
}) => {
  const rootRef = useRef<HTMLElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);
  const collapsedSize = useRef(DEFAULT_COLLAPSED_SIZE);
  const dimentions = useRef(initialDimentions);
  const [isExtended, setIsExtended] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(true);
  const [cursorCut, setCursorCut] = useState(NaN);
  const handleRef = useForkRef(innerRef || controlRef, rootRef);
  const idMoreBtn = useUniqId('more-btn');

  const syncHeight = useCallback(() => {
    const root = rootRef.current;

    if (!root || !collapsedSize.current) return;

    if (collapsedSize.current < root.scrollHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }

    const { childrenWidth, columnGap: gap, togglerWidth } = dimentions.current;
    const cursor = getCursorCut({
      childrenWidth,
      gap,
      lineClamp,
      rootWidth: root.scrollWidth,
      togglerWidth
    });

    setCursorCut(cursor);
  }, [lineClamp]);

  const { width } = useResizeObserver({
    ref: rootRef,
    debounceDelay: 1000
  });

  useEffect(() => {
    syncHeight();
  }, [width, syncHeight, children]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window) return;
    const computedStyleRoot = window.getComputedStyle(root);
    const rowGap = parseInt(computedStyleRoot.rowGap, 10) || DEFAULT_GAP;

    dimentions.current.togglerWidth = togglerRef.current?.offsetWidth || DEFAULT_TOGGLER_WIDTH;
    dimentions.current.columnGap = parseInt(computedStyleRoot.columnGap, 10) || DEFAULT_GAP;
    collapsedSize.current = dimentions.current.childrenHeight * lineClamp + (lineClamp - 1) * Number(rowGap);
    rootRef.current.style.height = root.scrollHeight > collapsedSize.current ? `${collapsedSize.current}px` : 'auto';
  }, [lineClamp]);

  useIsomorphicLayoutEffect(() => {
    syncHeight();
  }, []);

  const handleClick = useCallback(() => {
    setIsExtended(!isExtended);
    if (rootRef.current) {
      rootRef.current.style.height = !isExtended ? 'auto' : `${collapsedSize.current}px`;
    }
  }, [isExtended]);

  const Component = tag;
  const hiddenCount = Array.isArray(children) ? children.length - cursorCut : 0;
  dimentions.current.childrenWidth = [];

  return (
    <Component
      role="group"
      aria-label={ariaLabel}
      style={{
        ...style
      }}
      className={cnTags(null, [className])}
      ref={handleRef}
      {...props}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child as ReactElement, {
          innerRef: (ref: HTMLElement) => {
            if (ref) {
              dimentions.current.childrenHeight = ref.offsetHeight;
              dimentions.current.childrenWidth.push(ref.offsetWidth);
            }
          },
          ...(index >= cursorCut && !isExtended && { 'aria-hidden': true })
        });
      })}
      <Button 
        onClick={handleClick}
        aria-hidden={!hasOverflow || hiddenCount === 0 || isNaN(hiddenCount)}
        size="m"
        theme="default"
        id={idMoreBtn}
        innerRef={togglerRef}
        style={!hasOverflow ? { display: 'none' } : undefined}>{!isExtended ? `ещё ${hiddenCount}` : 'Скрыть'}</Button>
    </Component>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Tags.displayName = cnTags();
}
