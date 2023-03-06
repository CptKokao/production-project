import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    label: string;
    className?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
    readonly?: boolean;
}

const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.content}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>

    );
});

export default Select;
