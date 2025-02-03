import { Ref } from 'vue';
export default function useEventListener(target: Ref<EventTarget | null> | EventTarget, event: string, handler: (e: Event) => void): void;
