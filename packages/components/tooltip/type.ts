import type { Options, Placement } from '@popperjs/core';
export interface tooltipProps {
  content?: string;
  placement?: Placement;
  trigger?: 'hover' | 'click';
  manual?: boolean;
  popperOptions?: Partial<Options>;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}

export interface tooltipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface tooltipInstance {
  show: () => void;
  hide: () => void;
}
