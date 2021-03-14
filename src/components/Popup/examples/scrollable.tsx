import React, { useRef, useState } from 'react';
import { Popup } from '../../Popup/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

export const Scrollable = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <div className="wrapper" style={{ overflowY: 'hidden', overflowX: 'auto' }}>
                <div style={{ width: 5000, overflow: 'auto' }}>
                    <div className="header" style={{ background: '#555', color: '#eee', width: 10000 }}>
                        В 1800-х годах,&nbsp;
                        <Button
                            onClick={() => setVisible(!visible)}
                            innerRef={anchorRef}
                            size="m"
                            theme="default"
                            children="Открыть попап"
                        />
                        &nbsp;в те времена, когда не было еще ни железных, ни шоссейных дорог, ни газового, ни
                        стеаринового света, ни пружинных низких диванов, ни мебели без лаку,&nbsp; ни разочарованных
                        юношей со стеклышками, ни либеральных философов-женщин...
                    </div>
                    <Popup
                        hasTail
                        target="anchor"
                        anchor={anchorRef}
                        scope={scopeRef}
                        theme="default"
                        visible={visible}
                        style={{ maxWidth: 280 }}
                        onClose={() => setVisible(false)}
                    >
                        <div style={{ padding: 16, fontFamily: 'Roboto' }}>А вы как думаете?</div>
                    </Popup>
                </div>
            </div>
        </div>
    );
};
