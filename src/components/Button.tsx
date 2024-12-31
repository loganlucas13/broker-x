import React from 'react';

type ButtonProperties = {
    variant?: 'primary' | 'secondary';
    buttonText: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProperties> = ({
    variant = 'primary',
    buttonText,
    onClick,
    disabled = false
}) => {

    const defaultStyling = "px-4 py-2 rounded shadow focus:outline-none";

    const variantStyling = variant === 'primary'
        ? "bg-rose-400 text-slate-100 hover:bg-rose-300"
        : "bg-gray-500 text-slate-100 hover:bg-gray-600"

    const disabledStyling = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    return (
        <button
            className={`${defaultStyling} ${variantStyling} ${disabledStyling}`}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </button>
    )
}

export default Button;