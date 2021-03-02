import { TextareaClear } from '../../Clear/Textarea-Clear';
import { textareaRegistry as textareaRegistryBase } from '../../Textarea.registry/mobile';

export const textareaRegistry = textareaRegistryBase.set('Clear', TextareaClear);
