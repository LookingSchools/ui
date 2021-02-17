import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { compose, composeU } from '@bem-react/core';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';
import { Store, State } from '@sambego/storybook-state';

import { TabsMenu as TabsMenuBase } from './TabsMenu';
import { withLayoutHoriz } from './_layout/TabsMenu_layout_horiz';
import { withThemeDefault } from './_theme/TabsMenu_theme_default';
import { withSizeM } from './_size/TabsMenu_size_m';
import { withSizeS } from './_size/TabsMenu_size_s';

import { Link as LinkBase } from '../Link/Link';
import { withThemeDefault as withLinkThemeDefault } from '../Link/_theme/Link_theme_default';

const Link = withLinkThemeDefault(LinkBase);
const store = new Store({ activeTab: 'search' });

const TabsMenu = compose(withThemeDefault, withLayoutHoriz, composeU(withSizeM, withSizeS))(TabsMenuBase);

const ContentShowcase = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const onTabClick = useCallback(
        tabId => () => {
            setActiveTab(tabId);
        },
        []
    );

    const json1 =
        "tabs=[\n  { id: '...', onClick: ..., content: 'Tab 1' },\n" +
        "  { id: '...', onClick: ..., content: 'Tab 2' },\n" +
        "  { id: '...', onClick: ..., content: 'Tab 3' },\n" +
        "  { id: '...', disabled: true, content: 'Tab 4 (disabled)' }\n]";

    const json2 =
        "tabs=[\n  { id: '...', onClick: ..., content: <Link theme='default'>Tab 1</Link> },\n" +
        "  { id: '...', onClick: ..., content: <Link theme='default'>Tab 2</Link> },\n" +
        "  { id: '...', onClick: ..., content: <Link theme='default'>Tab 3</Link> },\n" +
        "  { id: '...', disabled: true, content: <Link theme='default'>Tab 4 (disabled)</Link> }\n]";

    return (
        <>
            <pre>{json1}</pre>
            <TabsMenu
                theme="default"
                layout="horiz"
                size="m"
                activeTab={activeTab}
                tabs={[
                    { id: 'tab1', onClick: onTabClick('tab1'), content: 'Tab 1' },
                    { id: 'tab2', onClick: onTabClick('tab2'), content: 'Tab 2' },
                    { id: 'tab3', onClick: onTabClick('tab3'), content: 'Tab 3' },
                    { id: 'tab4', disabled: true, content: 'Tab 4 (disabled)' },
                ]}
            />
            <br />
            <pre>{json2}</pre>
            <TabsMenu
                theme="default"
                layout="horiz"
                size="m"
                activeTab={activeTab}
                tabs={[
                    {
                        id: 'tab1',
                        onClick: onTabClick('tab1'),
                        content: <Link theme="default">Tab 1</Link>,
                    },
                    {
                        id: 'tab2',
                        onClick: onTabClick('tab2'),
                        content: <Link theme="default">Tab 2</Link>,
                    },
                    {
                        id: 'tab3',
                        onClick: onTabClick('tab3'),
                        content: <Link theme="default">Tab 3</Link>,
                    },
                    {
                        id: 'tab4',
                        disabled: true,
                        content: <Link theme="default">Tab 4 (disabled)</Link>,
                    },
                ]}
            />
        </>
    );
};

storiesOf('Controls|TabsMenu/', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./TabsMenu.md').default,
            },
        })
    )
    .add('playground', () => {
        const theme = select('theme', ['default', ''], 'default');
        const size = select('size', ['m', 's'], 'm');

        return (
            <div>
                <State store={store}>
                    <TabsMenu
                        layout="horiz"
                        size={size}
                        theme={theme}
                        tabs={[
                            {
                                id: 'search',
                                onClick: () => store.set({ activeTab: 'search' }),
                                content: 'Поиск',
                            },
                            {
                                id: 'images',
                                onClick: () => store.set({ activeTab: 'images' }),
                                content: 'Картинки',
                            },
                            {
                                id: 'video',
                                onClick: () => store.set({ activeTab: 'video' }),
                                content: 'Видео',
                            },
                        ]}
                        activeTab={store.get('activeTab')}
                    />
                </State>
            </div>
        );
    });

storiesOf('Controls|TabsMenu/', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./TabsMenu.md').default,
            },
        })
    )
    .add('_layout', () => (
        <State store={store}>
            <TabsMenu
                size="m"
                theme="default"
                layout="horiz"
                tabs={[
                    {
                        id: 'search',
                        onClick: () => store.set({ activeTab: 'search' }),
                        content: 'Поиск',
                    },
                    {
                        id: 'images',
                        onClick: () => store.set({ activeTab: 'images' }),
                        content: 'Картинки',
                    },
                    {
                        id: 'video',
                        onClick: () => store.set({ activeTab: 'video' }),
                        content: 'Видео',
                    },
                ]}
                activeTab={store.get('activeTab')}
            />
        </State>
    ))
    .add('_size', () => {
        const [activeTab1, setActiveTab1] = useState('search');
        const [activeTab2, setActiveTab2] = useState('search');

        return (
            <>
                <TabsMenu
                    size="s"
                    theme="default"
                    layout="horiz"
                    tabs={[
                        {
                            id: 'search',
                            onClick: () => setActiveTab1('search'),
                            content: 'Поиск',
                        },
                        {
                            id: 'images',
                            onClick: () => setActiveTab1('images'),
                            content: 'Картинки',
                        },
                        {
                            id: 'video',
                            onClick: () => setActiveTab1('video'),
                            content: 'Видео',
                        },
                    ]}
                    activeTab={activeTab1}
                />
                <TabsMenu
                    size="m"
                    theme="default"
                    layout="horiz"
                    tabs={[
                        {
                            id: 'search',
                            onClick: () => setActiveTab2('search'),
                            content: 'Поиск',
                        },
                        {
                            id: 'images',
                            onClick: () => setActiveTab2('images'),
                            content: 'Картинки',
                        },
                        {
                            id: 'video',
                            onClick: () => setActiveTab2('video'),
                            content: 'Видео',
                        },
                    ]}
                    activeTab={activeTab2}
                />
            </>
        );
    })
    .add('_theme', () => (
        <State store={store}>
            <TabsMenu
                size="m"
                theme="default"
                layout="horiz"
                tabs={[
                    {
                        id: 'search',
                        onClick: () => store.set({ activeTab: 'search' }),
                        content: 'Поиск',
                    },
                    {
                        id: 'images',
                        onClick: () => store.set({ activeTab: 'images' }),
                        content: 'Картинки',
                    },
                    {
                        id: 'video',
                        onClick: () => store.set({ activeTab: 'video' }),
                        content: 'Видео',
                    },
                ]}
                activeTab={store.get('activeTab')}
            />
        </State>
    ))
    .add('content', () => <ContentShowcase />);
