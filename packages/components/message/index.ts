import { withInstall } from '@yh-ui/utils';
import Message from './Message.vue';

withInstall(Message);

export { createMessage, closeAll } from './method';
export default Message;

export * from './type';
