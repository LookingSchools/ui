import { TextinputClear } from '../../Clear/Textinput-Clear';
import { textinputRegistry as textinputRegistryBase } from '../../Textinput.registry/mobile';

export const textinputRegistry = textinputRegistryBase.set('Clear', TextinputClear);
