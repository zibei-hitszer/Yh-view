<template>
  <div class="yh-dropdown">
    <Tooltip
      :content="content"
      :placement="placement"
      :trigger="trigger"
      :manual="manual"
      :popper-options="popperOptions"
      :transition="transition"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="yh-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="yh-dropdown__separator"></li>
            <li
              class="yh-dropdown__item"
              :class="{
                'is-disabled': item.disabled,
                'is-divide': item.divided
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <renderVnode :v-node="item.label"></renderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Tooltip from '../tooltip/Tooltip.vue';
  import { tooltipInstance } from '../tooltip/type';
  import type { dropdownEmits, dropdownProps, menuOption } from './type';
  import renderVnode from '../common/renderVnode';
  defineOptions({
    name: 'YhDropdown'
  });

  const props = withDefaults(defineProps<dropdownProps>(), {
    hideAfterClick: true
  });
  const emit = defineEmits<dropdownEmits>();

  const tooltipRef = ref<tooltipInstance>();

  const itemClick = (item: menuOption) => {
    if (item.disabled) return;
    emit('select', item);
    if (props.hideAfterClick) {
      tooltipRef.value?.hide();
    }
  };

  defineExpose({
    show: () => tooltipRef.value?.show(),
    hide: () => tooltipRef.value?.hide()
  });
</script>
