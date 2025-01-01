import React from 'react';

// REQUIRED: 'buttonText'
// OPTIONAL: 'variant': (defaults to 'primary')
// OPTIONAL: 'onClick': (defaults to 'void')
// OPTIONAL: 'disabled': (defaults to 'false' - not disabled)
type ButtonProperties = {
    variant?: 'primary' | 'secondary' | 'text';
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

    // applied by default to all buttons
    const defaultStyling = "px-4 py-2 rounded-full shadow focus:outline-none";

    // list of all button variants available
    const variantStyling = {
        primary: "bg-rose-400 text-rose-50 hover:text-rose-400 hover:bg-rose-300",
        secondary: "bg-rose-100 text-rose-400 hover:text-rose-500 hover:bg-rose-200",
        text: "text-rose-400 font-medium decoration-2 shadow-none hover:underline"
    }
    const selectedVariantStyling = variantStyling[variant];

    const disabledStyling = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    return (
        <button
            className={`${defaultStyling} ${selectedVariantStyling} ${disabledStyling}`}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </button>
    )
}

export default Button;