<template>
  <i class="yh-icon" :class="{ [`yh-icon--${type}`]: type }" :style="customStyles">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import type { IconProps } from './type';
  import { omit } from 'lodash-es';
  import { computed } from 'vue';
  defineOptions({
    name: 'YhIcon'
  });
  const props = defineProps<IconProps>();
  const filterProps = computed(() => omit(props, ['type', 'color']));
  const customStyles = computed(() => (props.color ? { color: props.color } : {}));
</script>
