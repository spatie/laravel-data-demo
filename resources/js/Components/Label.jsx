import React from "react";

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-xs uppercase tracking-wide text-gray-400 ` + className}>
            {value ? value : children}
        </label>
    );
}
