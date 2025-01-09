import React from 'react';

type LabelProperties = {
    variant?: 'large' | 'small';
    text: string;
};

const Label: React.FC<LabelProperties> = ({ variant = 'large', text }) => {
    const variantStyles = {
        large: 'px-4 py-2 text-xl text-rose-400 font-semibold border-2 border-rose-400 rounded-full bg-rose-50',
        small: 'text-rose-400 font-semibold',
    };
    const selectedVariantStyling = variantStyles[variant];

    return <span className={`${selectedVariantStyling}`}>{text}</span>;
};

export default Label;
