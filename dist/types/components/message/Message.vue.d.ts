import { messageProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        messageRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<messageProps, {
    bottomOffset: import('vue').ComputedRef<any>;
    visible: import('vue').Ref<boolean, boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<messageProps> & Readonly<{}>, {
    type: "success" | "info" | "danger" | "warning";
    duration: number;
    transition: string;
    offset: number;
    zIndex: number;
    showClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    messageRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
