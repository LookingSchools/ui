/**
 * Хелпер, который симулирует серверное окружение во время запуска тестов.
 */
export const serverEnvironmentSetup = () => {
    const prevWindow = (global).window;
    const prevDocument = (global).document;
    const prevRAF = (global).requestAnimationFrame;

    beforeAll(() => {
        delete (global).window;
        delete (global).document;
        delete (global).requestAnimationFrame;
    });

    afterAll(() => {
        (global).window = prevWindow;
        (global).document = prevDocument;
        (global).requestAnimationFrame = prevRAF;
    });
};
