import Message from './Message.vue';
import { withInstall } from '@yh-ui/utils';
import '@yh-ui/components/message/style';

export { createMessage, closeAll } from './method';
export default withInstall(Message);

export { Message };

export * from './type';
