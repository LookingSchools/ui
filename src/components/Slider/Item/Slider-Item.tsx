import React, { FC, useRef, useEffect } from 'react';

import { useVisible } from '../../../hooks/useVisible/useVisible';
import { cnSlider } from '../Slider';

import './Slider-Item.scss';

export type SliderItemProps = {
    className?: string;
    index: number;
    onSetVisible: (index: number) => void;
    children: React.ReactNode;
};

export const SliderItem: FC<SliderItemProps> = props => {
    const { className, index, children, onSetVisible } = props;

    const ref = useRef<HTMLDivElement | null>(null);
    const visible = useVisible(ref, { threshold: 0.5 });

    useEffect(() => {
        if (visible) {
            onSetVisible(index);
        }
    }, [index, visible, onSetVisible]);

    return (
        <div ref={ref} className={cnSlider('Item', ['SliderItem', className])}>
            {children}
        </div>
    );
};

SliderItem.displayName = 'SliderItem';
