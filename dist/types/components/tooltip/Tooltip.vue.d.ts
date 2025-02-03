import { tooltipProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        popperContainerNode: HTMLDivElement;
        triggerNode: HTMLDivElement;
        popperNode: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<tooltipProps, {
    show: () => void;
    hide: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "visible-change": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<tooltipProps> & Readonly<{
    "onVisible-change"?: ((value: boolean) => any) | undefined;
}>, {
    transition: string;
    placement: import('@popperjs/core').Placement;
    trigger: "hover" | "click";
    manual: boolean;
    openDelay: number;
    closeDelay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    popperContainerNode: HTMLDivElement;
    triggerNode: HTMLDivElement;
    popperNode: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
