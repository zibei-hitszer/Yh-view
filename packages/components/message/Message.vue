<template>
  <Transition
    :name="transition"
    @after-leave="destroyComponent"
    @enter="updateHeight"
    @before-leave="onClose"
  >
    <div
      class="yh-message"
      :class="{
        [`yh-message--${type}`]: type,
        'is-close': showClose
      }"
      v-show="visible"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="yh-message__content">
        <slot>
          <renderVnode :v-node="message" v-if="message"></renderVnode>
        </slot>
      </div>
      <div class="yh-message__closemark" @click.stop="visible = false" v-if="showClose">
        <Icon icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { messageProps } from './type';
  import renderVnode from '../common/renderVnode';
  import Icon from '../icon/Icon.vue';
  import { computed, onMounted, ref } from 'vue';
  import { getLastOffset } from './method';
  import { useEventListener } from '@yh-ui/utils';
  defineOptions({
    name: 'Yh-message'
  });
  const props = withDefaults(defineProps<messageProps>(), {
    duration: 3000,
    showClose: false,
    type: 'info',
    offset: 20,
    zIndex: 2000,
    transition: 'fade-up'
  });

  const keydown = (e: Event) => {
    const event = e as KeyboardEvent;
    if (event.code === 'Escape') {
      visible.value = false;
    }
  };
  useEventListener(document, 'keydown', keydown);

  const messageRef = ref<HTMLDivElement | null>(null);
  let height = ref(0);
  let lastOffset = computed(() => getLastOffset(props.id));
  let topOffset = computed(() => lastOffset.value + props.offset);
  let bottomOffset = computed(() => height.value + topOffset.value);
  let cssStyle = computed(() => ({
    top: `${topOffset.value}px`,
    zIndex: props.zIndex
  }));

  const visible = ref(false);
  const destroyComponent = () => {
    props.onDestroy();
  };

  const updateHeight = () => {
    height.value = messageRef.value!.getBoundingClientRect().height;
  };

  let timer;
  const startTimer = () => {
    if (props.duration === 0) return;
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  };

  const clearTimer = () => {
    clearTimeout(timer);
  };

  onMounted(async () => {
    visible.value = true;
    startTimer();
  });

  defineExpose({
    bottomOffset,
    visible
  });
</script>
