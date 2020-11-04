// @ts-ignore хз - https://github.com/microsoft/TypeScript/issues/25400
import data from './stub.json';

export type Data = typeof data;

export function fetchData(): Promise<Data> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
}
