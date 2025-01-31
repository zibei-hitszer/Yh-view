import { computed, ref } from 'vue';

let id = 0;
export default function useZIndex(initialValue = 2000) {
  const initialZIndex = ref(initialValue);
  const zIndex = computed(() => initialZIndex.value + id++);
  return {
    zIndex
  };
}
