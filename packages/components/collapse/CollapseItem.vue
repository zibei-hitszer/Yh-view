<template>
  <div
    class="yh-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="yh-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <div class="header-angle"><Icon icon="angle-right"></Icon></div>
    </div>
    <Transition name="slide" v-on="TransitionEvents" @before-leave="console.log">
      <div class="yh-collapse-item__wrapper" v-show="isActive">
        <div class="yh-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, inject } from 'vue';
  import { CollapseContextKey } from './type';
  import type { CollapseItemProps } from './type';
  import Icon from '../icon/Icon.vue';

  defineOptions({
    name: 'YhCollapseItem'
  });
  const props = defineProps<CollapseItemProps>();
  const collapseContext = inject(CollapseContextKey);

  let isActive = computed(() => {
    return collapseContext?.activeItems.value.includes(props.name);
  });

  const handleClick = () => {
    if (props.disabled) return;
    collapseContext?.itemClick(props.name);
  };

  const TransitionEvents: Record<string, (e: HTMLElement) => void> = {
    beforeEnter(e) {
      e.style.height = '0px';
      e.style.overflow = 'hidden';
    },
    enter(e) {
      // console.log(e.scrollHeight);
      e.style.height = `${e.scrollHeight}px`;
    },
    afterEnter(e) {
      // console.log(e.scrollHeight, e.clientHeight);
      e.style.height = '';
      e.style.overflow = '';
    },
    beforeLeave(e) {
      // console.log(e.scrollHeight, e.clientHeight);
      e.style.height = `${e.scrollHeight}px`;
      e.style.overflow = 'hidden';
    },
    leave(e) {
      // console.log(e.scrollHeight, e.clientHeight);
      e.style.height = '0px';
    },
    afterLeave(e) {
      e.style.height = '';
      e.style.overflow = '';
    }
  };
</script>
