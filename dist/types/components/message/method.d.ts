import { createMessageProps } from './type';
export declare function createMessage(props: createMessageProps): {
    id: string;
    vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
    vm: import('vue').ComponentInternalInstance;
    props: {
        onDestroy: () => void;
        id: string;
        onClose: () => void;
        zIndex: number;
        type?: "success" | "info" | "danger" | "warning" | undefined;
        duration?: number | undefined;
        transition?: string | undefined;
        offset?: number | undefined;
        message?: (string | import('vue').VNode) | undefined;
        showClose?: boolean | undefined;
    };
    destroy: () => void;
};
export declare function getLastOffset(index: any): any;
export declare function closeAll(): void;
