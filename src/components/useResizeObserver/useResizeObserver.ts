import { useState, useRef, RefObject } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { debounce } from "../../utils/common";

/**
 * Хук для отслеживания размеров элемента
 */

interface IUseResizeObserver {
  /**
   * Ссылка на отслеживаемый DOM элемент
   */
  ref: RefObject<HTMLElement>;

  /**
   * Частота с которой будет вычисляться новое значение в ms
   * @default 0
   */
  debounceDelay?: number;
}

type OutputUseResizeObserver = {
  width: number;
  height: number;
};

export const useResizeObserver = ({ ref, debounceDelay = 0 }: IUseResizeObserver): OutputUseResizeObserver => {
  const animationFrameRef = useRef(NaN);
  const [size, setSize] = useState({ width: NaN, height: NaN });

  const debouncedCallback = debounce((value: OutputUseResizeObserver) => setSize(value), debounceDelay);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(entries => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }

        const entry = entries[0];

        const width = Math.round(entry.contentRect.width);
        const height = Math.round(entry.contentRect.height);

        debouncedCallback({
          width,
          height
        });
      });
    });

    resizeObserver.observe(element);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      resizeObserver.unobserve(element);
    };
  }, [ref]);

  return size;
};
