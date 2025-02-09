<template>
  <div class="yh-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="yh-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <Transition :name="transition">
      <div class="yh-tooltip__popper" ref="popperNode" v-if="isOpen">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onUnmounted, reactive, ref, watch } from 'vue';
  import { tooltipEmits, tooltipInstance, tooltipProps } from './type';
  import { createPopper, Instance } from '@popperjs/core';
  import { useClickOutside } from '@yh-ui/utils';
  import { debounce } from 'lodash-es';

  defineOptions({
    name: 'YhTooltip'
  });
  const props = withDefaults(defineProps<tooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    manual: false,
    transition: 'fade',
    openDelay: 0,
    closeDelay: 0
  });
  const emit = defineEmits<tooltipEmits>();
  const triggerNode = ref<HTMLElement>();
  const popperNode = ref<HTMLElement>();
  const popperContainerNode = ref<HTMLElement>();
  let popperInstance: Instance | null = null;
  let isOpen = ref<boolean>(false);
  let events: Record<string, any> = reactive({});
  let outerEvents: Record<string, any> = reactive({});
  const popperOptions = computed(() => {
    return {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 5]
          }
        }
      ],
      ...props.popperOptions
    };
  });
  const togglePopper = () => {
    if (isOpen.value) {
      close();
    } else {
      open();
    }
  };
  const openDebounce = debounce(() => {
    isOpen.value = true;
    emit('visible-change', true);
  }, props.openDelay);

  const closeDebounce = debounce(() => {
    isOpen.value = false;
    emit('visible-change', false);
  }, props.closeDelay);

  const open = () => {
    closeDebounce.cancel();
    openDebounce();
  };

  const close = () => {
    openDebounce.cancel();
    closeDebounce();
  };

  const attachEvents = () => {
    if (props.trigger === 'click') {
      events['click'] = togglePopper;
    } else if (props.trigger === 'hover') {
      events['mouseenter'] = open;
      outerEvents['mouseleave'] = close;
    }
  };
  if (!props.manual) {
    attachEvents();
  }

  useClickOutside(popperContainerNode, () => {
    if (props.trigger === 'click' && isOpen.value && !props.manual) {
      close();
    }
  });

  watch(
    isOpen,
    (newValue) => {
      if (newValue) {
        if (triggerNode.value && popperNode.value) {
          popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value);
        }
      }
    },
    { flush: 'post' }
  );

  watch(
    () => props.trigger,
    (newValue, oldValue) => {
      if (oldValue !== newValue) {
        events = {};
        outerEvents = {};
        attachEvents();
      }
    }
  );

  watch(
    () => props.manual,
    (newValue) => {
      if (newValue) {
        events = {};
        outerEvents = {};
      } else {
        attachEvents();
      }
    }
  );

  onUnmounted(() => {
    popperInstance?.destroy();
    console.log('first');
  });

  defineExpose<tooltipInstance>({
    show: open,
    hide: close
  });
</script>
