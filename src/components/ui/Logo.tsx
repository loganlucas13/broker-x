import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../assets/images/logo.svg';

// OPTIONAL: 'variant' (defaults to 'background')
type LogoProperties = {
    variant?: 'background' | 'noBackground' | 'icon' | 'large';
};

const Logo: React.FC<LogoProperties> = ({ variant = 'background' }) => {
    const defaultStyling = 'flex flex-row items-center';

    // all available variant styles
    const variantStyling = {
        background:
            'px-4 py-2 bg-stone-100 border-2 border-stone-600 rounded-full',
        noBackground: '',
        icon: '',
        large: '',
    };
    const selectedVariantStyling = variantStyling[variant];

    if (variant === 'background' || variant === 'noBackground') {
        return (
            <Link to="/">
                <div className={`${defaultStyling} ${selectedVariantStyling}`}>
                    <img src={logoPath} alt="logo" width="40"></img>
                    <span className="px-2 text-stone-600 font-semibold text-3xl">
                        BrokerX
                    </span>
                </div>
            </Link>
        );
    } else if (variant === 'icon') {
        return (
            <Link to="/">
                <div className={`${defaultStyling}`}>
                    <img src={logoPath} alt="logo" width="40"></img>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to="/">
                <div className={`${defaultStyling}`}>
                    <img src={logoPath} alt="logo" width="125"></img>
                </div>
            </Link>
        );
    }
};

export default Logo;
