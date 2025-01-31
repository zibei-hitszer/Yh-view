import { InjectionKey, Ref } from 'vue';
export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeItems: Ref<NameType[]>;
  itemClick: (name: NameType) => void;
}

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType[]): void;
  (e: 'change', value: NameType[]): void;
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContextKey');
