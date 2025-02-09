import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';
import { h, nextTick, render } from 'vue';

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

describe('Collapse', () => {
  function createWrapper(props?) {
    return mount(Collapse, {
      props: {
        modelValue: ['a'],
        ...props
      },
      slots: {
        default: (
          <>
            <CollapseItem name="a" title="title a">
              content a
            </CollapseItem>
            <CollapseItem name="b" title="title b">
              content b
            </CollapseItem>
            <CollapseItem name="c" title="title c" disabled>
              content c
            </CollapseItem>
          </>
        )
      },
      global: {
        stubs: ['Icon']
      },
      attachTo: document.body
    });
  }
  test('basic collapse', async () => {
    const wrapper = createWrapper();
    console.log(wrapper.html());
    const headers = wrapper.findAll('.yh-collapse-item__header');
    const contents = wrapper.findAll('.yh-collapse-item__wrapper');

    // 长度
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);

    //文本
    const firstHeader = headers[0];
    const secondHeader = headers[1];
    expect(firstHeader.text()).toBe('title a');

    // 内容
    const firstContent = contents[0];
    const secondContent = contents[1];
    const disabledContent = contents[2];
    expect(firstContent.isVisible()).toBeTruthy();
    expect(secondContent.isVisible()).toBeFalsy();
    expect(firstContent.text()).toBe('content a');

    // 行为
    await firstHeader.trigger('click');
    expect(firstContent.isVisible()).toBeFalsy();
    await secondHeader.trigger('click');
    expect(secondContent.isVisible()).toBeTruthy();
    expect(wrapper.emitted()).toHaveProperty('change');
    const changeEvent = wrapper.emitted('change') as any[];
    console.table(changeEvent);
    expect(changeEvent).toHaveLength(2);

    expect(changeEvent[0]).toEqual([[]]);
    expect(changeEvent[1]).toEqual([['b']]);
    // disabled
    const disableHeader = headers[2];
    expect(disableHeader.classes()).toContain('is-disabled');
    await disableHeader.trigger('click');

    expect(disabledContent.isVisible()).toBeFalsy();

    // 手动改变modelValue
    wrapper.setProps({ modelValue: [] });
    expect(firstContent.isVisible()).toBeFalsy();
  });
  test('accordion collapse', async () => {
    const wrapper = createWrapper({ accordion: true });

    const headers = wrapper.findAll('.yh-collapse-item__header');
    const contents = wrapper.findAll('.yh-collapse-item__wrapper');

    await headers[1].trigger('click');

    expect(contents[0].isVisible()).toBeFalsy();
    expect(contents[1].isVisible()).toBeTruthy();
  });
  test('collapseItem transition', async () => {
    // 1. 创建完整组件树
    const wrapper = mount(
      {
        components: { Collapse, CollapseItem },
        template: `
      <Collapse v-model="value">
        <CollapseItem name="a" />
      </Collapse>
    `,
        data() {
          return { value: ['a'] };
        }
      },
      {
        global: {
          stubs: {
            // 关键配置：禁用 Transition 组件的自动存根
            Transition: false
          }
        }
      }
    );

    // 2. 获取组件实例
    const itemInstance = wrapper.findComponent(CollapseItem).vm as any;

    // 3. 创建事件监听 spy
    const events = itemInstance.TransitionEvents;
    const spyBeforeEnter = vi.spyOn(events, 'beforeEnter');
    const spyEnter = vi.spyOn(events, 'enter');
    const spyAfterEnter = vi.spyOn(events, 'afterEnter');
    const spyBeforeLeave = vi.spyOn(events, 'beforeLeave');
    const spyLeave = vi.spyOn(events, 'leave');
    const spyAfterLeave = vi.spyOn(events, 'leave');

    // 4. 触发状态变更
    await wrapper.setData({ value: [] });

    // 5. 等待所有异步操作
    await rAF(); // 等待动画帧

    // 6. 验证回调执行
    expect(spyBeforeLeave).toHaveBeenCalled();
    expect(spyLeave).toHaveBeenCalled();
    expect(spyAfterLeave).toHaveBeenCalled();

    await wrapper.setData({ value: ['a'] });
    await rAF();

    expect(spyBeforeEnter).toHaveBeenCalled();
    expect(spyEnter).toHaveBeenCalled();
    expect(spyAfterEnter).toHaveBeenCalled();
  });
});
