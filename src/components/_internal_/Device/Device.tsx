import React, { FC } from 'react';

import './Device.scss';

export const Device: FC = ({ children }) => {
    return (
        <div className="Device">
            <div className="Device-Content">{children}</div>
        </div>
    );
};
