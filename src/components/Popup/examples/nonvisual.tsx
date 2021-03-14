import React, { useRef, useState } from 'react';
import { Popup } from '../../Popup/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

export const Nonvisual = () => {
    const [visible, setVisible] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div style={{ display: 'flex' }}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} theme="default" size="m">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom"
                theme="default"
                nonvisual
                visible={visible}
            >
                <div style={{ padding: 8, fontFamily: 'Roboto' }}>Nonvisual</div>
            </Popup>
        </div>
    );
};
