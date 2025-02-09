import { beforeEach, describe, expect, test, vi } from 'vitest';
import Dropdown from './Dropdown.vue';
import Button from '../button/Button.vue';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

vi.mock('@popperjs/core');

describe('dropdown', () => {
  function createWrapper(props?) {
    return mount(Dropdown, {
      props: {
        menuOptions: [
          { key: 1, label: h('b', 'this is bold') },
          { key: 2, label: 'Item2', disabled: true },
          { key: 3, label: 'Item3', divided: true },
          { key: 4, label: 'Item4' }
        ],
        ...props
      },
      slots: {
        default: (
          <>
            <Button class="trigger">dropdown</Button>
          </>
        )
      },
      attachTo: document.body
    });
  }
  beforeEach(() => {
    vi.useFakeTimers();
  });
  test('base dropdown', async () => {
    const wrapper = createWrapper({ hideAfterClick: false });
    expect(wrapper.find('.trigger')).toBeTruthy();
    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeFalsy();
    wrapper.find('.yh-tooltip__trigger').trigger('mouseenter');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeTruthy();

    const [item1, item2, _, item4] = wrapper.findAll('.yh-dropdown__item');

    expect(item1.html()).toContain('<b>this is bold</b>');

    await item2.trigger('click');
    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeTruthy();

    expect(wrapper.find('.yh-dropdown__separator').exists()).toBeTruthy();

    item4.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeTruthy();

    await wrapper.setProps({ hideAfterClick: true });
    item4.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeFalsy();
  });
  test('manual trigger', async () => {
    const wrapper = createWrapper();
    const vm = wrapper.vm;

    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeFalsy();

    vm.show();
    await vi.runAllTimers();

    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeTruthy();

    vm.hide();
    await vi.runAllTimers();

    expect(wrapper.find('.yh-dropdown__menu').exists()).toBeFalsy();
  });
});
