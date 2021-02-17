import React, { MutableRefObject, createContext, PureComponent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { ScrollerItem } from './Item/Scroller-Item';
import { ArrowButton } from '../_internal_/ArrowButton/ArrowButton';

import { debounce } from '../../utils/common';

import './Scroller.scss';

export const cnScroller = cn('Scroller');

/**
 * Контекст скроллера.
 */
export interface IScrollerContext {
    registerScrollerItem: (item: ScrollerItem) => number;
    unregisterScrollerItem: (item: ScrollerItem) => void;
}

/**
 * Параметры для компонента скроллера.
 */
export interface IScrollerProps extends IClassNameProps {
    scrollStep?: number;
    hideArrow?: boolean;
    /** Нужно ли убрать полоску рядом со стрелками */
    hideArrowLine?: boolean;
    /** Высота, относительно которой будут отцентрированы стрелки по вертикали */
    arrowsAlignHeight?: number;
    arrowsTheme?: 'shadow';
    onClickArrow?: (direction: 'left' | 'right') => void;
    onScroll?: () => void;
    /** Позиция в карусели, после появления в видимой области, будет доскроллено до конца/начала вправо/влево */
    rightPointScrollToEnd?: number;
    leftPointScrollToStart?: number;
    /** Отключает отступы по бокам */
    noGap?: boolean;

    /** Делает одинаковый по высоте контент скроллера */
    sameHeight?: boolean;

    /** минимальный отступ от края, для вызова onScrollLeftEnd и onScrollRightLeft */
    endEventOffset?: number;
    onScrollLeftEnd?: () => void;
    onScrollRightEnd?: () => void;

    innerRef?: MutableRefObject<Scroller | null>;
}

interface IScrollerState {
    scrollDirection: 'right' | 'left' | 'both' | 'none';
}

const cnScrollerContainer = cnScroller('Container');
const cnScrollerArrow = cnScroller('Arrow');
const cnScrollerArrowShadowLeft = cnScroller('ArrowShadow', {
    direction: 'left',
});
const cnScrollerWrap = cnScroller('Wrap');
const cnScrollerItemsWrap = cnScroller('ItemsWrap');
const cnScrollerArrowShadowRight = cnScroller('ArrowShadow', {
    direction: 'right',
});

function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function scroll(element: HTMLElement, offset: number, duration: number = 300) {
    let start = 0;
    const scrollStart = element.scrollLeft;

    requestAnimationFrame(function animate(timestamp) {
        if (start === 0) {
            start = timestamp;
        }

        let timeFraction = (timestamp - start) / duration;

        if (timeFraction > 1) {
            timeFraction = 1;
        }

        const diff = Math.ceil(offset * easeInOutQuad(timeFraction));

        element.scrollLeft = scrollStart + diff;

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

export const ScrollerContext = createContext<IScrollerContext>({} as IScrollerContext);

/**
 * Компонент скроллера.
 */
export class Scroller extends PureComponent<IScrollerProps, IScrollerState> {
    state: IScrollerState = {
        scrollDirection: 'none',
    };

    domElem?: HTMLElement;

    protected items: ScrollerItem[] = [];
    protected itemsLength = 0;
    protected skipScrollCtr?: boolean;
    protected afterMountTimerId?: number;

    constructor(props: IScrollerProps) {
        super(props);

        this.reset = this.reset.bind(this);
        this.setRef = this.setRef.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.registerScrollerItem = this.registerScrollerItem.bind(this);
        this.unregisterScrollerItem = this.unregisterScrollerItem.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.reset);

        this.props.innerRef && (this.props.innerRef.current = this);

        this.sendCounter = debounce(this.sendCounter.bind(this), 200);

        this.afterMountTimerId = setTimeout(() => {
            this.domElem && this.setScrollMod(this.domElem);
        });
    }

    getSnapshotBeforeUpdate() {
        if (this.domElem) {
            return this.domElem.scrollWidth;
        }

        return null;
    }

    componentDidUpdate(_prevProps: IScrollerProps, _prevState: IScrollerState, snapshot: number | null) {
        if (this.itemsLength !== this.items.length || (this.domElem && this.domElem.scrollWidth !== snapshot)) {
            // Перерисовываем скроллер, т.к. после добавления элементов — стрелки не перерисовываются.
            this.reset();
            this.itemsLength = this.items.length;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.reset);
        this.props.innerRef && (this.props.innerRef.current = null);
        clearTimeout(this.afterMountTimerId);
    }

    render() {
        const { scrollDirection } = this.state;
        const hasArrows = !this.props.hideArrow;
        const hasArrowShadow = this.props.arrowsTheme === 'shadow';
        const arrowsAlignHeight = this.props.arrowsAlignHeight;
        const arrowLine = !this.props.hideArrowLine;
        const sameHeight = this.props.sameHeight;
        const scrollerMods = {
            scrollDirection,
            hasArrows,
            widthFull: !hasArrows,
            arrowsTheme: this.props.arrowsTheme,
            noGap: this.props.noGap,
            sameHeight,
            arrowLine,
        };

        return (
            <ScrollerContext.Provider
                value={{
                    registerScrollerItem: this.registerScrollerItem,
                    unregisterScrollerItem: this.unregisterScrollerItem,
                }}
            >
                <div className={cnScroller(scrollerMods, [this.props.className])}>
                    <div className={cnScrollerContainer}>
                        {hasArrows && (
                            <ArrowButton
                                className={cnScrollerArrow}
                                direction="left"
                                visible={scrollDirection === 'left' || scrollDirection === 'both'}
                                arrowsAlignHeight={arrowsAlignHeight}
                                onClick={this.scrollLeft}
                            />
                        )}
                        {hasArrows && hasArrowShadow && (scrollDirection === 'left' || scrollDirection === 'both') && (
                            <div className={cnScrollerArrowShadowLeft} />
                        )}
                        <div className={cnScrollerWrap} onScroll={this.onScroll} ref={this.setRef}>
                            {sameHeight ? (
                                <div className={cnScrollerItemsWrap}>{this.props.children}</div>
                            ) : (
                                this.props.children
                            )}
                        </div>
                        {hasArrows && (
                            <ArrowButton
                                className={cnScrollerArrow}
                                direction="right"
                                visible={scrollDirection === 'right' || scrollDirection === 'both'}
                                arrowsAlignHeight={arrowsAlignHeight}
                                onClick={this.scrollRight}
                            />
                        )}
                        {hasArrows && hasArrowShadow && (scrollDirection === 'right' || scrollDirection === 'both') && (
                            <div className={cnScrollerArrowShadowRight} />
                        )}
                    </div>
                </div>
            </ScrollerContext.Provider>
        );
    }

    /**
     * Скроллит контейнер на `offset` пикселей от текущего смещения
     *
     * @param offset - величина смещения от текущего значения
     * @param disableAnimation - отключает плавную прокрутку
     */
    scrollBy(offset: number, disableAnimation?: boolean): void {
        const { domElem } = this;

        if (!domElem) return;

        this.skipOnscrollCounter();

        if (disableAnimation) {
            domElem.scrollLeft += offset;
        } else {
            scroll(domElem, offset);
        }

        this.setScrollMod(domElem);
    }

    /**
     * Скроллит контейнер на `scrollLeft` пикселей от начала
     *
     * @param scrollLeft - величина смещения от начала
     * @param disableAnimation - отключает плавную прокрутку
     */
    scrollTo(scrollLeft: number, disableAnimation?: boolean): void {
        const { domElem } = this;

        if (!domElem) return;

        this.skipOnscrollCounter();

        if (disableAnimation) {
            domElem.scrollLeft = scrollLeft;
        } else {
            scroll(domElem, scrollLeft - domElem.scrollLeft);
        }

        this.setScrollMod(domElem);
    }

    protected reset(): void {
        if (!this.domElem) return;

        this.setScrollMod(this.domElem);
    }

    protected setScrollMod(domElem: HTMLElement) {
        // Нужно округлить при масштабировании окна, т.к. scrollLeft будет дробный и чуть меньше ширины скролла
        const left = Math.ceil(domElem.scrollLeft);
        const hiddenWidth = Math.ceil(domElem.scrollWidth - domElem.clientWidth);

        let scrollDirection: IScrollerState['scrollDirection'] = 'both';

        if (hiddenWidth <= 0) {
            scrollDirection = 'none';
        } else if (left <= 0) {
            scrollDirection = 'right';
        } else if (left >= hiddenWidth) {
            scrollDirection = 'left';
        }

        this.setState({ scrollDirection });
    }

    protected setRef(ref: HTMLDivElement) {
        this.domElem = ref;
    }

    /**
     * Установка флага необходимости отправки счетчика скролла,
     * который должен отправиться при скролле мышкой/тачпадом и не отправиться при клике по стрелкам
     */
    protected skipOnscrollCounter() {
        this.skipScrollCtr = true;
    }

    protected scrollLeft() {
        let { scrollStep = 100, leftPointScrollToStart } = this.props;
        const domElem = this.domElem;

        this.skipOnscrollCounter();

        if (domElem) {
            if (leftPointScrollToStart) {
                // Нужно округление при масштабировании окна
                const scrollLeft = Math.round(domElem.scrollLeft);
                let offset = scrollLeft - scrollStep;

                if (offset <= leftPointScrollToStart) {
                    offset = 0;
                }

                scrollStep = scrollLeft - offset;
            }

            this.scrollBy(-scrollStep);

            if (this.props.onClickArrow) {
                this.props.onClickArrow('left');
            }
        }
    }

    protected scrollRight() {
        let { scrollStep = 100, rightPointScrollToEnd } = this.props;
        const domElem = this.domElem;

        this.skipOnscrollCounter();

        if (domElem) {
            if (rightPointScrollToEnd) {
                // Нужно округление при масштабировании окна
                const wrapWidth = Math.round(domElem.offsetWidth);
                const scrollLeft = Math.round(domElem.scrollLeft);
                const offset = scrollLeft + scrollStep;

                // Проверяем попадет ли позиция rightPointScrollToEnd в видимую область
                if (offset + wrapWidth >= rightPointScrollToEnd && wrapWidth < rightPointScrollToEnd) {
                    // Рассчитываем на сколько нужно увеличить scrollStep чтобы доскроллить до конца вправо
                    scrollStep = domElem.scrollWidth - wrapWidth - scrollLeft;
                }
            }

            this.scrollBy(scrollStep);

            if (this.props.onClickArrow) {
                this.props.onClickArrow('right');
            }
        }
    }

    protected onScroll({ currentTarget }: React.UIEvent<HTMLElement>) {
        this.sendCounter();
        this.checkEndOfList(currentTarget);
        this.setScrollMod(currentTarget);
    }

    protected checkEndOfList(domElem: HTMLElement) {
        if (!this.props.endEventOffset || (!this.props.onScrollLeftEnd && !this.props.onScrollRightEnd)) {
            return;
        }

        const left = this.getWrapScrollLeft(domElem);
        const hidden = this.getHiddenWidth(domElem);

        if (left <= this.props.endEventOffset && this.props.onScrollLeftEnd) {
            this.props.onScrollLeftEnd();
        }

        if (left > hidden - this.props.endEventOffset && this.props.onScrollRightEnd) {
            this.props.onScrollRightEnd();
        }
    }

    getWrapScrollLeft(domElem: HTMLElement): number {
        return Math.ceil(domElem.scrollLeft);
    }

    getHiddenWidth(domElem: HTMLElement): number {
        const rect = domElem.getBoundingClientRect();
        return Math.ceil(domElem.scrollWidth - rect.width);
    }

    sendCounter() {
        if (this.skipScrollCtr) {
            this.skipScrollCtr = false;

            return;
        }

        if (this.props.onScroll) this.props.onScroll();
    }

    protected registerScrollerItem(item: ScrollerItem) {
        return this.items.push(item) - 1;
    }

    protected unregisterScrollerItem(item: ScrollerItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
