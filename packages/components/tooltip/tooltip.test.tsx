import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Tooltip from './Tooltip.vue';
import Button from '../button/Button.vue';

vi.mock('@popperjs/core');
const visibleChange = vi.fn();
describe('tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  test('tooltip click', async () => {
    const wrapper = mount(
      () => (
        <div>
          <div class="outside"></div>
          <Tooltip trigger="click" content="click" onVisibleChange={visibleChange}>
            <Button>button</Button>
          </Tooltip>
        </div>
      ),
      {
        attachTo: document.body
      }
    );

    //静态检测
    console.log(wrapper.html());
    const triggerArea = wrapper.find('.yh-tooltip__trigger');
    expect(triggerArea.exists()).toBeTruthy();
    expect(triggerArea.text()).toBe('button');
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();

    triggerArea.trigger('click');
    await vi.runAllTimers();
    console.log(wrapper.html());
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeTruthy();
    expect(wrapper.get('.yh-tooltip__popper').text()).toBe('click');
    expect(visibleChange).toHaveBeenCalledWith(true);

    wrapper.get('.outside').trigger('click');
    await vi.runAllTimers();
    console.log('after click outside', wrapper.html());
    expect(wrapper.find('.yh-tooltip__popper').exists()).toBeFalsy();
    expect(visibleChange).toHaveBeenLastCalledWith(false);
  });
});
