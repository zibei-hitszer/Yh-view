import { describe, expect, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { createMessage, closeAll } from './method';
import { mount } from '@vue/test-utils';
import Message from './Message.vue';

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null);
        await nextTick();
      });
    });
  });
};
function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}
function createWrapper(props?) {
  return mount(Message, {
    props: {
      message: 'message',
      showClose: true,
      onDestroy: vi.fn(),
      zIndex: 2000,
      onClose: vi.fn(),
      id: 'message_0',
      duration: 3000,
      ...props
    },
    global: {
      stubs: ['Icon']
    },
    attachTo: document.body
  });
}
describe('createMessage', () => {
  test('调用方法应该创建对应的 Message 组件', async () => {
    const instance = createMessage({ message: 'hello world', duration: 0 });
    await rAF();
    // console.log('html', document.body.innerHTML);
    expect(document.querySelector('.yh-message')).toBeTruthy();
    instance.destroy();
    await rAF();
    // console.log('html2', document.body.innerHTML);
    expect(document.querySelector('.yh-message')).toBeFalsy();
  });
  test('多次调用方法应该创建多个实例', async () => {
    createMessage({ message: 'hello world', duration: 0 });
    createMessage({ message: 'hello world 2', duration: 0 });
    await rAF();
    const elements = document.querySelectorAll('.yh-message');
    expect(elements.length).toBe(2);
    closeAll();
    await rAF();
    expect(document.querySelector('.yh-message')).toBeFalsy();
  });
  test('创建多个实例应该设置正确的 offset', async () => {
    createMessage({ message: 'hello world', duration: 0, offset: 100 });
    createMessage({ message: 'hello world 2', duration: 0, offset: 50 });

    await rAF();
    const elements = document.querySelectorAll('.yh-message');
    expect(elements.length).toBe(2);
    const firstElementTop = getTopValue(elements[0]);
    const secondElementTop = getTopValue(elements[1]);
    // https://github.com/jsdom/jsdom/issues/1590
    // 在JS-dom 中，对应的 height 返回为零
    expect(firstElementTop).toBe(100);
    expect(secondElementTop).toBe(150);
    closeAll();
    await rAF();
  });
  test('测试closemark关闭', async () => {
    const wrapper = createWrapper();

    const closeButton = wrapper.find('.yh-message__closemark');
    expect(closeButton.exists()).toBeTruthy();
    closeButton.trigger('click');
    expect(wrapper.vm.visible).toBe(false);
  });
  test('startTimer and cleaTimer', async () => {
    vi.useFakeTimers();
    // startTimer
    const startTimer = createWrapper();
    expect(startTimer.vm.visible).toBeTruthy();

    await vi.advanceTimersByTime(3000);

    expect(startTimer.vm.visible).toBeFalsy();

    // clearTimer
    const clearTimer = createWrapper();

    expect(clearTimer.vm.visible).toBeTruthy();
    await clearTimer.find('.yh-message').trigger('mouseenter');
    await vi.advanceTimersByTime(3000);
    expect(clearTimer.vm.visible).toBeTruthy();
  });
  test('keydown esc', async () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.visible).toBeTruthy();

    await wrapper.trigger('keydown', {
      keyCode: 'Escape' as any
    });

    expect(wrapper.vm.visible).toBeFalsy();
  });
});
