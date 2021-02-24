import React from 'react';
import { cn } from '@bem-react/classname';

import { ListItemSkeleton } from '../Item/Skeleton/Skeleton';

import './Skeleton.scss';

const cnListSkeleton = cn('ListSkeleton');

export type ListSkeletonProps = {
    count?: number;
    className?: string;
};

export const ListSkeleton: React.FC<ListSkeletonProps> = props => {
    const { count = 6, className } = props;

    return (
        <div className={cnListSkeleton(null, [className])} >
            {[...Array(count)].map((_, index) => (
                <ListItemSkeleton key={index} />
            ))}
        </div>
    );
};

ListSkeleton.displayName = 'ListSkeleton';
