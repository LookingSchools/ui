import React, { useRef, useState } from 'react';
import { Popup } from '../../Popup/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

export const Target = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" theme="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom-start"
                theme="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
                scope={scopeRef}
            >
                <div style={{ padding: 16, fontFamily: 'Roboto' }}>
                    Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                </div>
            </Popup>
        </div>
    );
};
