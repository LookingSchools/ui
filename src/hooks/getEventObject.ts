import { INumberInputEvent } from "./numberInput";

export function getEventObject({ name, value }: INumberInputEvent["target"]): INumberInputEvent {
    return {
        type: "number",
        target: { name, value },
    };
}
