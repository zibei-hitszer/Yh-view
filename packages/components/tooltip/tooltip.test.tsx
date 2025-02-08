import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Tooltip from './Tooltip.vue';
import Button from '../button/Button.vue';
import { createPopper } from '@popperjs/core';

vi.mock('@popperjs/core', () => ({
  createPopper: vi.fn(() => ({
    destroy: vi.fn()
  }))
}));
const visibleChange = vi.fn();
describe('tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  function createWrapper(props?, trigger: string = 'click') {
    return mount(
      () => (
        <div>
          <div class="outside"></div>
          <Tooltip trigger={trigger} content={trigger} onVisibleChange={visibleChange}>
            <Button>button</Button>
          </Tooltip>
        </div>
      ),
      {
        attachTo: document.body,
        props
      }
    );
  }
  test('tooltip click', async () => {
    const wrapper = createWrapper();
    //静态检测
    const triggerArea = wrapper.find('.yh-tooltip__trigger');
    expect(triggerArea.exists()).toBeTruthy();
    expect(triggerArea.text()).toBe('button');
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();

    // 由关到开
    triggerArea.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeTruthy();
    expect(wrapper.get('.yh-tooltip__popper').text()).toBe('click');
    expect(visibleChange).toHaveBeenCalledWith(true);

    // 由开到关
    triggerArea.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();

    // 点击外部区域关闭
    triggerArea.trigger('click');
    await vi.runAllTimers();
    wrapper.get('.outside').trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();
    expect(visibleChange).toHaveBeenLastCalledWith(false);
  });
  test('tooltip hover', async () => {
    const wrapper = createWrapper({}, 'hover');
    const triggerArea = wrapper.find('.yh-tooltip__trigger');
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();
    triggerArea.trigger('mouseenter');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeTruthy();
  });
  test('trigger change', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        trigger: 'click'
      }
    });
    const vm = wrapper.vm as any;
    expect(vm.events['click']).toBeDefined();

    await wrapper.setProps({ trigger: 'hover' });
    expect(vm.events['click']).toBeUndefined();
    expect(vm.events['mouseenter']).toBeDefined();
    expect(vm.outerEvents['mouseleave']).toBeDefined();
  });
  test('manual trigger', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        manual: true
      }
    });
    const vm = wrapper.vm as any;
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();

    // 手动开启
    vm.show();
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeTruthy();

    // 手动关闭
    vm.hide();
    await vi.runAllTimers();
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();

    // 取消手动触发
    await wrapper.setProps({ manual: false });
    expect(vm.events['mouseenter']).toBeDefined();
    expect(vm.outerEvents['mouseleave']).toBeDefined();

    // 开启手动触发
    await wrapper.setProps({ manual: true });
    expect(vm.events['mouseenter']).toBeUndefined();
    expect(vm.outerEvents['mouseleave']).toBeUndefined();
  });
  test('tooltip destroy', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        manual: true
      }
    });

    const vm = wrapper.vm as any;
    vm.show();
    await vi.runAllTimers();

    const popperInstance = vm.popperInstance;
    await wrapper.unmount();
    expect(popperInstance.destroy).toHaveBeenCalledTimes(1);
  });
});
