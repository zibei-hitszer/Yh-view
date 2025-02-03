import { Ref } from 'vue';
export default function useClickOutside(elementRef: Ref<HTMLElement | undefined>, callback: (e: MouseEvent) => void): void;
