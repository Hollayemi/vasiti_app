import React from 'react';

/**
 * @param  {} {icon
 * @param  {} name
 * @param  {} value
 * @param  {} placeholder
 * @param  {} label
 * @param  {} type
 * @param  {} required
 * @param  {} onChange
 * @param  {} onFocus
 * @param  {} error
 * @param  {} border
 * @param  {} }
 */

export const InputFile = ({
    icon,
    name,
    value,
    placeholder,
    label,
    type,
    required,
    onChange,
    onFocus,
    error,
    size,
    status,
    border,
    multiple,
    ...props
}) => {
    return (
        <div className="mb-6">
            <label
                htmlFor={name}
                className="block text-sm p-1 rounded-full text-slate-700 border border-gray-200 h-12 tracking-wider w-full cursor-pointer mb-1 rounded flex items-center"
            >
                <div className="flex items-center w-full">
                    {label && (
                        <div className="h-full w-full text-gray-400 flex justify-between items-center px-3">
                            <p className="pl-3">{label}</p>
                            {icon && icon}
                        </div>
                    )}
                    {required && (
                        <span className="text-red-600 dark:text-red-500">
                            *
                        </span>
                    )}
                </div>
            </label>

            <input
                id={name}
                type="file"
                className="fixed -left-[500px] -top-[500px]"
                onChange={onChange}
                onFocus={onFocus}
                name={name}
                value={value}
                placeholder={placeholder || 'Input Placeholder'}
                required={required || false}
                multiple={multiple || false}
                {...props}
            />

            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">{error}</span>
                </p>
            )}

            {status && (
                <p className="mt-2 text-sm text-slate-600	 dark:text-slate-400">
                    <span className="font-light">{status}</span>
                </p>
            )}
        </div>
    );
};

export const InputRadio = ({
    icon,
    name,
    value,
    placeholder,
    label,
    type,
    required,
    onChange,
    onFocus,
    error,
    size,
    status,
    border,
    ...props
}) => {
    return (
        <div className="m-1 flex items-center text-orange-500  px-2">
            <input
                id={value}
                type="radio"
                className="px-2"
                onChange={onChange}
                onFocus={onFocus}
                name={name}
                value={value}
                placeholder={placeholder || 'Input Placeholder'}
                required={required || false}
                {...props}
            />
            <label
                htmlFor={value}
                className="block text-xs bg-white p-1 rounded-full text-slate-700  mb-1"
            >
                <div className="flex items-center">
                    {label || 'Label Here'}
                    {required && (
                        <span className="text-red-600 dark:text-red-500">
                            *
                        </span>
                    )}
                </div>
            </label>
        </div>
    );
};
