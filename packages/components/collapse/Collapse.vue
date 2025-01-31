<template>
  <div class="yh-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { provide, ref, watch } from 'vue';
  import { CollapseContextKey } from './type';
  import type { CollapseEmits, CollapseProps, NameType } from './type';

  const props = defineProps<CollapseProps>();
  const emits = defineEmits<CollapseEmits>();
  const activeItems = ref<NameType[]>(props.modelValue);
  watch(
    () => props.modelValue,
    () => {
      activeItems.value = props.modelValue;
    }
  );

  const itemClick = (name: NameType) => {
    let _activeItems = [...activeItems.value];
    if (props.accordion) {
      _activeItems = [_activeItems[0] === name ? '' : name];
      activeItems.value = _activeItems;
    } else {
      const idx = _activeItems.indexOf(name);
      if (idx > -1) {
        _activeItems.splice(idx, 1);
      } else {
        _activeItems.push(name);
      }
      activeItems.value = _activeItems;
    }
    emits('update:modelValue', _activeItems);
    emits('change', _activeItems);
  };

  provide(CollapseContextKey, {
    activeItems,
    itemClick
  });

  defineOptions({
    name: 'YhCollapse'
  });
</script>
