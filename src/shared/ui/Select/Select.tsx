import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
const typedMemo: <T>(c: T) => T = memo;

interface SelectProps<T extends string> {
    label: string;
    className?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

const Select = typedMemo(
    <T extends string>({
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    }: SelectProps<T>) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value as T);
            }
        };

        const optionList = useMemo(
            () =>
                options?.map((opt) => (
                    <option
                        className={cls.option}
                        value={opt.value}
                        key={opt.content}
                    >
                        {opt.content}
                    </option>
                )),
            [options],
        );

        const mods: Mods = {
            [cls.readonly]: readonly,
        };
        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
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
    },
);

export default Select;
