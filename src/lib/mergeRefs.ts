import { RefObject, MutableRefObject, Ref } from 'react';

import { Maybe } from '../typings/utility-types';
import { canUseDOM } from './canUseDOM';

/**
 * Копирует ссылку на DOM элемент из одного объекта в другой и возвращает объект со ссылкой.
 *
 * @param source Объект содержащий DOM элемент
 * @param target Объект куда необходимо скопировать DOM элемент
 */
export const mergeRefs = <TElement extends HTMLElement>(
    source?: RefObject<HTMLElement>,
    ...targets: Maybe<RefObject<HTMLElement>>[]
) => {
    // Используем raf, т.к. ссылки устанавливаются асинхронно.
    if (canUseDOM()) {
        requestAnimationFrame(() => {
            targets.forEach(target => {
                if (source !== undefined && target !== undefined) {
                    (target as MutableRefObject<any>).current = source.current;
                }
            });
        });
    }
    return source as RefObject<TElement>;
};

// Перейти на эту функцию
export function mergeAllRefs<TElement extends HTMLElement>(...refs: Maybe<Ref<TElement>>[]) {
    return (node: TElement | null) => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref !== null && ref !== undefined) {
                (ref as MutableRefObject<TElement | null>).current = node;
            }
        });
    };
}
