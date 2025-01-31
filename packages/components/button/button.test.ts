import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Icon from '../icon/Icon.vue';

describe('button', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    });
    console.log(wrapper.html());
    expect(wrapper.classes()).toContain('yh-button--primary');
    expect(wrapper.get('button').text()).toBe('button');

    wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('disbaled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      }
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.get('button').element.disabled).toBeDefined();

    wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });

  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'angle-right'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    });

    // console.log(wrapper.html());
    const iconEl = wrapper.findComponent(FontAwesomeIcon);
    // console.log(iconEl.html());
    expect(iconEl.exists()).toBeTruthy();
    expect(iconEl.attributes('icon')).toBe('angle-right');
  });

  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon']
      }
    });

    console.log(wrapper.html());
    const iconEl = wrapper.findComponent(Icon);
    expect(iconEl.exists()).toBeTruthy();
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(iconEl.attributes('icon')).toBe('spinner');
  });
});
