export interface IBaseEvent {
    type: string;
    target: {
        name: string;
        value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    };
}
