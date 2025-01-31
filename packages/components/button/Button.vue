<template>
  <button
    class="yh-button"
    :class="{
      [`yh-button--${type}`]: type,
      [`yh-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :nativeType="nativeType"
  >
    <Icon icon="spinner" v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
  import type { buttonProps } from './type';
  import Icon from '../icon/Icon.vue';
  withDefaults(defineProps<buttonProps>(), {
    nativeType: 'button'
  });
  defineOptions({
    name: 'YhButton'
  });
</script>
