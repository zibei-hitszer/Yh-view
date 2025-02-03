type buttonType = 'primary' | 'danger' | 'info' | 'success' | 'warning';
type buttonSize = 'small' | 'normal' | 'large';
type NativeType = 'button' | 'submit' | 'reset';
export interface buttonProps {
    type?: buttonType;
    size?: buttonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    nativeType?: NativeType;
    autofoucus?: boolean;
    loading?: boolean;
    icon?: string;
}
export interface buttonInstance {
    ref: HTMLButtonElement;
}
export {};
