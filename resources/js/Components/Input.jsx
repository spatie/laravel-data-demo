import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={
                `w-full border-t-0 border-l-0 border-r-0 px-0 py-1 border-gray-200 focus:border-teal-200 focus:ring focus:ring-teal-200 focus:ring-opacity-50 ` +
                className
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}
