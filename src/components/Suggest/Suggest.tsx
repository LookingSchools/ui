import React, { FC, useState, useRef, useCallback, useEffect, ReactNode } from 'react';

import { Textinput } from '../Textinput/Textinput.bundle';
import { Popup } from '../Popup/Popup.bundle';
import { Menu } from '../Menu/Menu.bundle';
import { Spin } from '../Spin/Spin.bundle';

import './Suggest.scss';

type SuggestProps<T> = {
    /**
     * Размер текстового поля.
     *
     * @default "m"
     */
    textinputSize?: 's' | 'm',

    /**
     * Размер меню.
     *
     * @default "m"
     */
    menuSize?: 's' | 'm',

    /**
     * Свойство по которому фильтровать данные в случае использования Object[]
     */
    valueKey?: string,

    /**
     * Данные для отисовки меню-подсказки
     */
    data: T[],

    /**
     * Состоянние загрузки
     */
    loading?: boolean,

    /**
     * Значение текстового пооля
     */
    value: string,

    /**
     * Обработчик на изменение текстового поля
     */
    onChange: (value: string) => void,

    /**
     * Переопределяет компонент MenuItem
     */
    onRenderItem?: (value: any) => ReactNode,

    /**
     * Обработчик для фильтрации данных в меню
     *
     * @default onFilterDefault
     */
    onFilter?: (data: T[], value: string) => T[]
}

const onFilterDefault = <T extends any>(data: T[], value: string): T[] =>
    // @ts-ignore
    data.filter((item) => item.toLowerCase().startsWith(value.toLowerCase()));

/**
 * Составной компонент Textinput + Menu.
 * Служит для реализации подсказки для пользовательского ввода текста
 *
 * @param {SuggestProps} props
 */
export const Suggest: FC<SuggestProps<any>> = ({
    textinputSize = 'm',
    menuSize = 'm',
    loading,
    data,
    value,
    onChange,
    onFilter = onFilterDefault,
    onRenderItem,
    valueKey,
}) => {
    const [values, setValues] = useState<any[]>([]);
    const [visible, setVisible] = useState(false);
    const textinputRef = useRef(null);
    const containerRef = useRef(null);
    const popupRef = useRef(null);

    const noAvalibleValues = value !== '' && values.length === 0;

    useEffect(() => {
        const onDocumentMousedown = (event: MouseEvent) => {
            // @ts-ignore
            if (popupRef.current && popupRef.current.contains(event.target)) {
                event.preventDefault();
            }
        };
        document.addEventListener('mousedown', onDocumentMousedown);
        return () =>
            document.removeEventListener('mousedown', onDocumentMousedown);
    }, []);

    useEffect(() => {
        const onDocumentKeydown = (event: KeyboardEvent) => {
            if (event.keyCode === 27) {
                setVisible(false);
            }
        };
        document.addEventListener('keydown', onDocumentKeydown);
        return () =>
            document.removeEventListener('keydown', onDocumentKeydown);
    }, []);

    useEffect(() => {
        if (value) {
            const filteredValues = onFilter(data, value);
            const shouldVisible = filteredValues.length !== 1 ||
                (valueKey ? filteredValues[0][valueKey] !== value : filteredValues[0] !== value);

            setValues(filteredValues);
            setVisible(shouldVisible);
        } else {
            setValues([]);
            setVisible(false);
        }
    }, [data, loading, onFilter, value, valueKey]);

    const onChangeMenu = useCallback((event) => {
        onChange(event.target.value);
        setVisible(false);
    }, [onChange]);

    const onBlur = useCallback(() => {
        setValues([]);
        setVisible(false);
    }, []);

    return (
        <div className="Suggest" ref={containerRef}>
            <Textinput
                theme="default"
                size={textinputSize}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                onBlur={onBlur}
                innerRef={textinputRef}
                iconRight={
                    loading ? (
                        <span className="Textinput-Spinner">
                            <Spin progress theme="primary" size="xxs" />
                        </span>
                    ) : undefined
                }
            />
            <Popup
                visible={visible}
                className="Suggest-Popup"
                theme="default"
                target="anchor"
                anchor={textinputRef}
                scope={containerRef}
                innerRef={popupRef}
            >
                {noAvalibleValues ? (
                    <div className="Suggest-Text">
                        {loading ? 'Загрузка...' : 'Нет допустимых значений'}
                    </div>
                ) : (
                    <Menu
                        focused={visible}
                        className="Suggest-Menu"
                        theme="normal"
                        size={menuSize}
                        onChange={onChangeMenu}
                        items={values.map((value) => ({
                            value: valueKey ? value[valueKey] : value,
                            content: onRenderItem ? onRenderItem(value) : value,
                        }))}
                    />
                )}
            </Popup>
        </div>
    );
};
