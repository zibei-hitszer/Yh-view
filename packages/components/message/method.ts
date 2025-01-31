import { h, render, shallowReactive } from 'vue';
import type { createMessageProps, messageContext, messageProps } from './type';
import Message from '.';
import { useZIndex } from '@yh-ui/utils';

let seed = 0;
const instances: messageContext[] = shallowReactive([]);
export function createMessage(props: createMessageProps) {
  const container = document.createElement('div');
  const id = `message_${seed++}`;
  const destroy = () => {
    render(null, container);
  };

  const onClose = () => {
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx < 0) return;
    instances.splice(idx, 1);
  };

  const { zIndex } = useZIndex();
  const newProps = {
    ...props,
    onDestroy: destroy,
    id,
    onClose,
    zIndex: zIndex.value
  };
  const vnode = h(Message, newProps);

  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);
  const vm = vnode.component!;
  const manualDestroy = () => {
    const instance = instances.find((instance) => instance.id === id);
    if (instance) instance.vm.exposed!.visible.value = false;
  };
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: manualDestroy
  };

  instances.push(instance);

  return instance;
}

export function getLastOffset(index) {
  const idx = instances.findIndex((instance) => instance.id === index);
  if (idx <= 0) {
    return 0;
  } else {
    return instances[idx - 1].vm.exposed!.bottomOffset.value;
  }
}

export function closeAll() {
  instances.forEach((instance) => {
    instance.destroy();
  });
}
