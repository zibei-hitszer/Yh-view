import { dropdownProps, menuOption } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        tooltipRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly content?: string | undefined;
                readonly placement?: import('@popperjs/core').Placement | undefined;
                readonly trigger?: "hover" | "click" | undefined;
                readonly manual?: boolean | undefined;
                readonly popperOptions?: Partial<import('@popperjs/core').Options> | undefined;
                readonly transition?: string | undefined;
                readonly openDelay?: number | undefined;
                readonly closeDelay?: number | undefined;
                readonly "onVisible-change"?: ((value: boolean) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                popperContainerNode: HTMLDivElement;
                triggerNode: HTMLDivElement;
                popperNode: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "visible-change", value: boolean) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../tooltip/type').tooltipProps> & Readonly<{
                "onVisible-change"?: ((value: boolean) => any) | undefined;
            }>, {
                show: () => void;
                hide: () => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "visible-change": (value: boolean) => any;
            }, string, {
                transition: string;
                placement: import('@popperjs/core').Placement;
                trigger: "hover" | "click";
                manual: boolean;
                openDelay: number;
                closeDelay: number;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            transition: string;
            placement: import('@popperjs/core').Placement;
            trigger: "hover" | "click";
            manual: boolean;
            openDelay: number;
            closeDelay: number;
        }> & Omit<Readonly<import('../tooltip/type').tooltipProps> & Readonly<{
            "onVisible-change"?: ((value: boolean) => any) | undefined;
        }>, "show" | "hide" | ("transition" | "placement" | "trigger" | "manual" | "openDelay" | "closeDelay")> & import('vue').ShallowUnwrapRef<{
            show: () => void;
            hide: () => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
                content?(_: {}): any;
            };
        }) | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<dropdownProps, {
    show: () => void | undefined;
    hide: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (value: menuOption) => any;
    "visible-change": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<dropdownProps> & Readonly<{
    onSelect?: ((value: menuOption) => any) | undefined;
    "onVisible-change"?: ((value: boolean) => any) | undefined;
}>, {
    hideAfterClick: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tooltipRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly content?: string | undefined;
            readonly placement?: import('@popperjs/core').Placement | undefined;
            readonly trigger?: "hover" | "click" | undefined;
            readonly manual?: boolean | undefined;
            readonly popperOptions?: Partial<import('@popperjs/core').Options> | undefined;
            readonly transition?: string | undefined;
            readonly openDelay?: number | undefined;
            readonly closeDelay?: number | undefined;
            readonly "onVisible-change"?: ((value: boolean) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            popperContainerNode: HTMLDivElement;
            triggerNode: HTMLDivElement;
            popperNode: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "visible-change", value: boolean) => void;
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../tooltip/type').tooltipProps> & Readonly<{
            "onVisible-change"?: ((value: boolean) => any) | undefined;
        }>, {
            show: () => void;
            hide: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "visible-change": (value: boolean) => any;
        }, string, {
            transition: string;
            placement: import('@popperjs/core').Placement;
            trigger: "hover" | "click";
            manual: boolean;
            openDelay: number;
            closeDelay: number;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        transition: string;
        placement: import('@popperjs/core').Placement;
        trigger: "hover" | "click";
        manual: boolean;
        openDelay: number;
        closeDelay: number;
    }> & Omit<Readonly<import('../tooltip/type').tooltipProps> & Readonly<{
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }>, "show" | "hide" | ("transition" | "placement" | "trigger" | "manual" | "openDelay" | "closeDelay")> & import('vue').ShallowUnwrapRef<{
        show: () => void;
        hide: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
            content?(_: {}): any;
        };
    }) | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
