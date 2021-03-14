import React, { useState, useRef, useLayoutEffect, createContext, useCallback, useContext, useMemo } from 'react';

import { Textinput } from '../../../Textinput/desktop/bundle';
import { Select } from '../../desktop/bundle';

const INITIAL_OPTIONS = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где' },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

const SearchContext = createContext<any>({});

const RenderMenu = (props: any, Menu: any) => {
    const { onChange, value } = useContext(SearchContext);
    const controlRef = useRef<HTMLInputElement | null>(null);
    const prevActiveNode = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (props.focused) {
            prevActiveNode.current = document.activeElement as HTMLElement;
            controlRef.current && controlRef.current.focus();
        } else if (controlRef.current === document.activeElement && prevActiveNode.current !== null) {
            prevActiveNode.current.focus();
        }
    }, [props.focused]);

    return (
        <div className="MenuWrapper" style={{ overflow: 'hidden', width: 160 }}>
                <Textinput onChange={onChange} value={value} controlRef={controlRef} theme="default" size="s" />
                <Menu style={{ backgroundColor: '#fff' }} {...props} />
        </div>
    );
};

export const Overriden = () => {
    const [value, setValue] = useState('a');
    const [options, setOptions] = useState<any[]>(INITIAL_OPTIONS);
    const content = useMemo(() => {
        const option = INITIAL_OPTIONS.find((option) => option.value === value);
        return option ? option.content : '';
    }, [value]);

    const [searchValue, setSearchValue] = useState();
    const onInputChange = useCallback((event) => {
        setSearchValue(event.target.value);
        setOptions(INITIAL_OPTIONS.filter((option) => option.content.toLowerCase().startsWith(event.target.value)));
    }, []);

    return (
        <SearchContext.Provider value={{ onChange: onInputChange, value: searchValue }}>
            <Select
                theme="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
                renderMenu={RenderMenu}
                placeholder={content}
                showAlwaysPlaceholder
            />
        </SearchContext.Provider>
    );
};
