import React from 'react';
import { Link } from 'react-router-dom';


// REQUIRED: 'children'
// OPTIONAL: 'variant': (defaults to 'primary')
// OPTIONAL: 'onClick': (defaults to 'void')
// OPTIONAL: 'disabled': (defaults to 'false' - not disabled)
// OPTIONAL: 'to': (for internal routing)
// OPTIONAL: 'external': (for external routing - ex. GitHub repository)
type ButtonProperties = {
    variant?: 'primary' | 'secondary' | 'text' | 'icon';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    to?: string;
    external?: string;
}

const Button: React.FC<ButtonProperties> = ({
    variant = 'primary',
    children,
    onClick,
    disabled = false,
    to,
    external
}) => {

    const handleClick = () => {
        if (disabled) {
            return;
        }
        else if (onClick) {
            onClick();
        }
    }

    // applied by default to all buttons
    const defaultStyling = "px-4 py-2 rounded-full shadow focus:outline-none";

    // list of all button variants available
    const variantStyling = {
        primary: "bg-rose-400 text-rose-50 hover:text-rose-400 hover:bg-rose-300",
        secondary: "bg-rose-100 text-rose-400 hover:text-rose-500 hover:bg-rose-200",
        text: "text-rose-400 font-medium decoration-2 shadow-none hover:underline",
        icon: "shadow-none rounded-none"
    }
    const selectedVariantStyling = variantStyling[variant];

    const disabledStyling = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    const buttonContent = (
        <button
            className={`${defaultStyling} ${selectedVariantStyling} ${disabledStyling}`}
            onClick={handleClick}
            disabled={disabled}
            style={variant === 'icon' ? { backgroundImage: `url(${children})`, backgroundSize: 'cover', height: '40px', width: '40px' } : {}}
        >
            {variant !== 'icon' ? children : null}
        </button>
    );

    if (external) {
        return (
            <a href={external} target="_blank" rel="noreferrer">
                {buttonContent}
            </a>
        );
    }
    else if (to) {
        return (
            <Link to={to}>
                {buttonContent}
            </Link>
        );
    }
    return buttonContent;
}

export default Button;