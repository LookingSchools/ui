// import React, { createRef } from 'react';
// import { ReactWrapper, mount, render } from 'enzyme';

// import { Modal as ModalCommon } from './Modal';
// import { Modal as ModalBase } from './Modal';
// import { Modal as ModalTouchPad } from './Modal@touch-phone';
// import { Modal as ModalTouchPhone } from './Modal@touch-pad';
// import { serverEnvironmentSetup, delay } from '../../internal/utils';

// const platforms = [['desktop', ModalBase], ['touch-pad', ModalTouchPad], ['touch-phone', ModalTouchPhone]];

// describe.each(platforms)('Modal@%s', (_platform, Modal) => {
//     let wrapper = null;

//     afterEach(() => {
//         if (wrapper !== null && wrapper.length > 0) {
//             wrapper.unmount();
//         }
//     });

//     describe('server environment', () => {
//         serverEnvironmentSetup();

//         test('должен вернуть полный шаблон компонента (snapshot)', () => {
//             expect(render(<Modal className="mix">content</Modal>)).toMatchSnapshot();
//         });
//     });

//     describe('client environment', () => {
//         test('должен вернуть полный шаблон компонента (snapshot)', () => {
//             wrapper = mount(<Modal className="mix">content</Modal>);
//             expect(wrapper).toMatchSnapshot();
//         });

//         test('должен устанавливать ссылку на корневой DOM элемент', async () => {
//             const innerRef = createRef();
//             wrapper = mount(<Modal innerRef={innerRef} />);
//             await delay(100);
//             expect(innerRef.current).not.toBe(null);
//         });

//         test('должен быть установлен корректный displayName', () => {
//             expect(ModalCommon.displayName).toBe('Modal');
//         });

//         test('должен устанавливать модификатор visible если открыт при инициализации', () => {
//             wrapper = mount(<Modal visible />);
//             expect(
//                 wrapper
//                     .find('.Modal')
//                     .last()
//                     .hasClass('Modal_visible'),
//             ).toEqual(true);
//         });

//         test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
//             wrapper = mount(<Modal />);
//             wrapper.setProps({ visible: true });
//             expect(
//                 wrapper
//                     .find('.Modal')
//                     .last()
//                     .hasClass('Modal_visible'),
//             ).toEqual(true);
//             wrapper.setProps({ visible: false });
//             expect(
//                 wrapper
//                     .find('.Modal')
//                     .last()
//                     .hasClass('Modal_visible'),
//             ).toEqual(false);
//         });
//     });
// });
