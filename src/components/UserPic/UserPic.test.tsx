import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { UserPic } from './UserPic@desktop';
import { UserPic as UserPicCommon } from './UserPic';
import { serverEnvironmentSetup, delay } from '../internal/utils';

import { withCamera } from './_hasCamera/UserPic_hasCamera@desktop';

const UserPicCamera = withCamera(UserPic);

describe('UserPic', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<UserPicCamera className="mix" hasCamera />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<UserPicCamera className="mix" hasCamera />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(UserPicCommon.displayName).toBe('UserPic');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<UserPic innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен проставить модификатор hasPlus при наличии свойства plus', () => {
            const wrapper = mount(<UserPic plus />);
            expect(wrapper.find('div').hasClass('UserPic_hasPlus')).toBe(true);
        });

        test('должен установить верный атрибут src при наличии свойства host и avatarid', () => {
            const wrapper = mount(<UserPic host="image-host" avatarId="avatar-id" />);
            expect(wrapper.find('img').prop('src')).toBe('image-host/get-yapic/avatar-id/islands-middle');
        });

        test('должен установить верный атрибут srcSet при наличии свойства host и avatarid', () => {
            const wrapper = mount(<UserPic host="image-host" avatarId="avatar-id" />);
            expect(wrapper.find('img').prop('srcSet')).toBe(
                'image-host/get-yapic/avatar-id/islands-middle 1x, image-host/get-yapic/avatar-id/islands-retina-middle 2x',
            );
        });

        test('должен установить верный атрибут src при наличии свойства lodpiUrl', () => {
            const wrapper = mount(<UserPic lodpiUrl="custom-url" />);
            expect(wrapper.find('img').prop('src')).toBe('custom-url');
            expect(wrapper.find('img').prop('srcSet')).toBe(undefined);
        });

        test('должен установить верные атрибуты src и srcSet при наличии свойств lodpiUrl и hidpiUrl', () => {
            const wrapper = mount(<UserPic lodpiUrl="custom-url-lodpi" hidpiUrl="custom-url-hidpi" />);
            expect(wrapper.find('img').prop('src')).toBe('custom-url-lodpi');
            expect(wrapper.find('img').prop('srcSet')).toBe('custom-url-lodpi 1x, custom-url-hidpi 2x');
        });
    });
});
