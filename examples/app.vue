<template>
  <div>启动测试</div>
  <YhButton>default</YhButton>
  <YhButton type="primary" @click="open">primary</YhButton>
  <YhButton type="danger" @click="close">danger</YhButton>
  <YhButton type="info" disabled>info</YhButton>
  <YhButton type="success" disabled>success</YhButton>
  <YhButton type="warning" disabled>warning</YhButton>
  <br />
  <br />
  <YhButton plain>plain</YhButton>
  <YhButton type="primary" plain @click="dropdownInstance?.show()">primary</YhButton>
  <YhButton type="danger" plain @click="dropdownInstance?.hide()">danger</YhButton>
  <YhButton type="info" plain disabled>info</YhButton>
  <YhButton type="success" plain disabled>success</YhButton>
  <YhButton type="warning" plain disabled>warning</YhButton>
  <br />
  <br />
  <YhButton round>round</YhButton>
  <YhButton type="primary" round>primary</YhButton>
  <YhButton type="danger" round>danger</YhButton>
  <YhButton type="info" round disabled>info</YhButton>
  <YhButton type="success" round disabled>success</YhButton>
  <YhButton type="warning" round disabled>warning</YhButton>
  <br />
  <br />
  <YhButton circle></YhButton>
  <YhButton type="primary" circle></YhButton>
  <YhButton type="danger" circle></YhButton>
  <YhButton type="info" circle></YhButton>
  <YhButton type="success" circle></YhButton>
  <YhButton type="warning" circle></YhButton>
  <br />
  <br />
  <YhButton size="small" round>small</YhButton>
  <YhButton size="large">large</YhButton>
  <YhButton size="large" loading>loading</YhButton>
  <YhButton size="large" icon="arrow-up">icon</YhButton>

  <YhCollapse v-model="openValue">
    <YhCollapseItem name="a" title="Title A">
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </YhCollapseItem>
    <YhCollapseItem name="b" title="Title B">
      <div>this is bbbbb test</div>
      <div>this is bbbbb test</div>
      <div>this is bbbbb test</div>
      <div>this is bbbbb test</div>
    </YhCollapseItem>
    <YhCollapseItem name="c" title="Disabled Title" disabled>
      <div>this is cccc test</div>
    </YhCollapseItem>
  </YhCollapse>
  {{ openValue }}
  <YhIcon icon="arrow-up" type="primary" color="blue" />
  <br />
  <br />
  <YhTooltip trigger="click" @visible-change="change">
    <YhButton>click</YhButton>
    <template #content>hello tooltip</template>
  </YhTooltip>
  -------
  <YhTooltip :trigger="trigger">
    <YhButton>hover</YhButton>
    <template #content>hello tooltip</template>
  </YhTooltip>
  -------
  <YhTooltip manual ref="tooltipInstance">
    <YhButton>Button</YhButton>
    <template #content>manual</template>
  </YhTooltip>
  -------
  <YhTooltip :open-delay="2000" :close-delay="2000">
    <YhButton>delay</YhButton>
    <template #content>hello delay</template>
  </YhTooltip>
  --------------------
  <YhTooltip placement="right">
    <YhButton>style</YhButton>
    <template #content>style</template>
  </YhTooltip>
  <br />
  <br />
  <br />
  --------------------- dropdown ---------------------
  <br />
  <br />
  <YhDropdown :menu-options="menuOtions" trigger="hover" ref="dropdownInstance">
    <YhButton>dropdown</YhButton>
  </YhDropdown>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script setup lang="ts">
  import { Options } from '@popperjs/core';
  import { createMessage } from '@yh-ui/components';
  import type { tooltipInstance } from 'packages/components/tooltip/type';
  import { h, onMounted, reactive, ref } from 'vue';
  import type { dropdownInstance, menuOption } from 'packages/components/dropdown/type';

  // const instance = createMessage({ message: 'hello world', duration: 0 })
  // console.log('html', document.body.innerHTML)

  // instance.destroy()
  // new Promise((resolve) => setTimeout(() => {
  //   console.log('html2', document.querySelector('.yh-message'))
  //   resolve(1);
  // }, 4000));

  const options: Partial<Options> = reactive({ placement: 'right-end', strategy: 'fixed' });
  let trigger = ref<any>('click');
  const openValue = ref(['a']);
  let tooltipInstance = ref<tooltipInstance | null>(null);
  const open = () => {
    createMessage({
      message: 'hello world again',
      duration: 3000,
      type: 'success',
      showClose: true
    });
    tooltipInstance.value?.show();
  };

  const close = () => {
    tooltipInstance.value?.hide();
  };
  function change(flag) {
    console.log(flag);
  }

  const menuOtions: menuOption[] = [
    { key: 1, label: h('b', 'this is bold') },
    { key: 2, label: 'YhCollapseItem2', disabled: true },
    { key: 3, label: 'YhCollapseItem3', divided: true },
    { key: 4, label: 'YhCollapseItem4' }
  ];

  let dropdownInstance = ref<dropdownInstance | null>(null);

  onMounted(() => {
    const instance = createMessage({ message: 'hello world', duration: 3000, showClose: true });
    createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true });
    createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: false });
    createMessage({ message: 'hello world four', duration: 0, type: 'warning', showClose: true });
    setTimeout(() => {
      // openValue.value = ['a', 'b'];
      trigger.value = 'hover';
      // instance.destroy()
    }, 2000);
  });
</script>
