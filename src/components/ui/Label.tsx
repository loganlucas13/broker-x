import React from 'react';

type LabelProperties = {
    variant?: 'large' | 'small';
    text: string;
};

const Label: React.FC<LabelProperties> = ({ variant = 'large', text }) => {
    const variantStyles = {
        large: 'px-4 py-2 text-xl text-stone-600 font-semibold border-2 border-stone-600 rounded-full bg-stone-100',
        small: 'text-stone-600 font-semibold',
    };
    const selectedVariantStyling = variantStyles[variant];

    return <span className={`${selectedVariantStyling}`}>{text}</span>;
};

export default Label;
