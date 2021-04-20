export enum InputModeTypes {
    Decimal = 'decimal',
    Email = 'email',
    None = 'none',
    Numeric = 'numeric',
    Search = 'search',
    Tel = 'tel',
    Text = 'text',
    Url = 'url',
}

export enum InputStyleTypes {
    Primary = 'primary',
    Secondary = 'secondary',
    Outline = 'outline',
}

export enum InputTypes {
    Date = 'date',
    DateTimeLocal = 'datetime-local',
    Email = 'email',
    Month = 'month',
    Number = 'number',
    Password = 'password',
    Search = 'search',
    Tel = 'tel',
    Text = 'text',
    Time = 'time',
    Url = 'url',
    Week = 'week',
}

type RegisterOptions = {
    [key: string]: string | boolean | ((val: any) => any) | { [key: string]: RegExp | string };
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    // className?: string;
    type?: InputTypes;
    label?: string;
    inputMode?: InputModeTypes | undefined;
    // placeholder?: string;
    // disabled?: boolean;
    // required?: boolean;
    errorMessage?: string;
    styleType?: InputStyleTypes;
    showError?: boolean;
    description?: string;
    //check Typescript
    handleChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    icon?: string;
    iconClickHandler?: () => void | any;
}

export type ConnectedInputProps = Omit<InputProps, 'handleChange' | 'value' | 'errorMessage' | 'showError'> & {
    registerOptions?: RegisterOptions;
    autoComplete?: string;
    defaultValue?: null | number | string;
};
