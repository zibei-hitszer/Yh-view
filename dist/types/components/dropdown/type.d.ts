import { VNode } from 'vue';
import { tooltipProps } from '../tooltip/type';
export interface dropdownProps extends tooltipProps {
    menuOptions: menuOption[];
    hideAfterClick?: boolean;
}
export interface menuOption {
    label: string | VNode;
    key?: number;
    disabled?: boolean;
    divided?: boolean;
}
export interface dropdownEmits {
    (e: 'visible-change', value: boolean): void;
    (e: 'select', value: menuOption): void;
}
export interface dropdownInstance {
    show: () => void;
    hide: () => void;
}
