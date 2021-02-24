import React from 'react';
import { cn } from '@bem-react/classname';

import './Skeleton.scss';

const cnSkeleton = cn('Skeleton');

export type RectProps = {
    className?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
};

export const Rect: React.FC<RectProps> = ({ className, width, height, borderRadius }) => {
    return (
        <div
            className={cnSkeleton('Rect', [className])}
            style={{ width, height, borderRadius }}
        />
    );
};

export type TextProps = {
    className?: string;
    width?: number | string;
    size?: number;
};

export const Text: React.FC<TextProps> = ({ className, width, size }) => {
    return (
        <div
            className={cnSkeleton('Text', [className])}
            style={{ width, height: size }}
        />
    );
};
