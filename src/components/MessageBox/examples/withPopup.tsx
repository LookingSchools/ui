import React, { useRef, useState } from 'react';
import { MessageBoxPopup } from '../../MessageBox/desktop/bundle';
import { Direction } from '../../Popup/desktop/bundle';

const DIRECTIONS: Direction[] = ['top', 'right', 'bottom', 'left'];

export const WithPopup = () => {
    const anchorRef = useRef<HTMLDivElement>(null);

    const [isTopCenterVisible, setIsTopCenterVisible] = useState(true);
    const [isRightCenterVisible, setIsRightCenterVisible] = useState(true);
    const [isBottomCenterVisible, setIsBottomCenterVisible] = useState(true);
    const [isLeftCenterVisible, setIsLeftCenterVisible] = useState(true);

    const isVisibleArr = [isTopCenterVisible, isRightCenterVisible, isBottomCenterVisible, isLeftCenterVisible];

    const showTopCenterPopup = React.useCallback(() => setIsTopCenterVisible(true), [setIsTopCenterVisible]);
    const hideTopCenterPopup = React.useCallback(() => setIsTopCenterVisible(false), [setIsTopCenterVisible]);

    const showRightCenterPopup = React.useCallback(() => setIsRightCenterVisible(true), [setIsRightCenterVisible]);
    const hideRightCenterPopup = React.useCallback(() => setIsRightCenterVisible(false), [setIsRightCenterVisible]);

    const showBottomCenterPopup = React.useCallback(() => setIsBottomCenterVisible(true), [setIsBottomCenterVisible]);
    const hideBottomCenterPopup = React.useCallback(() => setIsBottomCenterVisible(false), [setIsBottomCenterVisible]);

    const showLeftCenterPopup = React.useCallback(() => setIsLeftCenterVisible(true), [setIsLeftCenterVisible]);
    const hideLeftCenterPopup = React.useCallback(() => setIsLeftCenterVisible(false), [setIsLeftCenterVisible]);

    const showAllPopups = React.useCallback(() => {
        showTopCenterPopup();
        showRightCenterPopup();
        showBottomCenterPopup();
        showLeftCenterPopup();
    }, [showTopCenterPopup, showRightCenterPopup, showBottomCenterPopup, showLeftCenterPopup]);

    const hidePopupArr = [hideTopCenterPopup, hideRightCenterPopup, hideBottomCenterPopup, hideLeftCenterPopup];

    return (
        <div style={{ margin: 64, display: 'flex', justifyContent: 'center' }}>
            <div
                style={{
                    background: '#e6e6e6',
                    height: 60,
                    width: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                }}
                ref={anchorRef}
                onClick={showAllPopups}
            >
                Anchor
            </div>
            {DIRECTIONS.map((direction, index) => (
                <MessageBoxPopup
                    key={index}
                    visible={isVisibleArr[index]}
                    hasTail
                    direction={direction}
                    anchor={anchorRef}
                    theme="default"
                    size="s"
                    onClose={hidePopupArr[index]}
                >
                    {direction}
                </MessageBoxPopup>
            ))}
        </div>
    );
};
