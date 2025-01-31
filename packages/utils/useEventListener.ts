import { isRef, onMounted, onUnmounted, Ref, unref, watch } from 'vue';

export default function useEventListener(
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => void
) {
  onMounted(() => {
    if (isRef(target)) {
      watch(target, (newValue, oldValue) => {
        oldValue?.removeEventListener(event, handler);
        newValue?.addEventListener(event, handler);
      });
    } else {
      target.addEventListener(event, handler);
    }
  });

  onUnmounted(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
