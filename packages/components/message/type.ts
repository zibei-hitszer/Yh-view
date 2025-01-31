import { ComponentInternalInstance, VNode } from 'vue';

export interface messageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: 'success' | 'info' | 'danger' | 'warning';
  onDestroy: () => void;
  offset?: number;
  id: string;
  zIndex: number;
  onClose: () => void;
  transition?: string;
}

export type createMessageProps = Omit<messageProps, 'onDestroy' | 'id' | 'zIndex' | 'onClose'>;

export interface messageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: messageProps;
  destroy: () => void;
}
