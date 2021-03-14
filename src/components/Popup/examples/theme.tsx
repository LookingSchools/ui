import React, { useRef, useState } from 'react';
import { Popup } from '../../Popup/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

export const Theme = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLButtonElement>(null);
    const anchorRef2 = useRef<HTMLButtonElement>(null);
    const anchorRef3 = useRef<HTMLButtonElement>(null);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    return (
        <div ref={scopeRef} style={{ display: 'flex' }}>
            <Button onClick={() => setVisible1(!visible1)} innerRef={anchorRef1} theme="default" size="m">
                Open popup (theme clear)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef1}
                direction="bottom"
                theme="clear"
                visible={visible1}
                scope={scopeRef}
            >
                <div style={{ padding: 8, fontFamily: 'Roboto' }}>Clear</div>
            </Popup>
            &nbsp;
            <Button onClick={() => setVisible2(!visible2)} innerRef={anchorRef2} theme="default" size="m">
                Open popup (theme normal)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef2}
                direction="bottom"
                theme="normal"
                visible={visible2}
                scope={scopeRef}
            >
                <div style={{ padding: 8, fontFamily: 'Roboto' }}>Normal</div>
            </Popup>
            &nbsp;
            <Button onClick={() => setVisible3(!visible3)} innerRef={anchorRef3} theme="default" size="m">
                Open popup (theme deafult)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef3}
                direction="bottom"
                theme="default"
                visible={visible3}
                scope={scopeRef}
            >
                <div style={{ padding: 8, fontFamily: 'Roboto' }}>Default</div>
            </Popup>
        </div>
    );
};
