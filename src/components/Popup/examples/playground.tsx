import React, { useState, useRef } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Popup, directions } from '../../Popup/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

export const Playground = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(!false);
    const children = text(
        'children',
        'Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.',
    );
    const theme = select('theme', ['default', 'normal', 'clear'], 'default') as any;
    const direction = select('direction', directions, 'bottom-start');

    return (
        <>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" theme="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction={direction}
                theme={theme}
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: 'Roboto' }}>{children}</div>
            </Popup>
        </>
    );
};
