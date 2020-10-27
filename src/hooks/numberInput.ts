import { IBaseEvent } from './base';

export interface INumberInputEvent extends IBaseEvent {
    type: 'number';
    target: {
        name: string;
        value: number | null;
    };
}