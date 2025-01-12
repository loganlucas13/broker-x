import React from 'react';
import Button from './Button';
import Logo from './Logo';
import githubLogo from '../../assets/images/github.svg';

type HeaderProperties = {
    variant?: 'home' | 'faq' | 'analysis';
};

const Header: React.FC<HeaderProperties> = ({ variant = 'home' }) => {
    const variantContent = {
        home: <Button variant="primary" children="FAQ" to="/faq"></Button>,
        faq: <Button variant="primary" children="Home" to="/"></Button>,
        analysis: (
            <div className="space-x-4">
                <Button variant="primary" children="Home" to="/"></Button>
                <Button variant="primary" children="FAQ" to="/faq"></Button>
            </div>
        ),
    };
    const selectedVariantContent = variantContent[variant];

    return (
        <div className="flex justify-between items-center px-24 py-4 bg-rose-50 rounded-b-3xl shadow-sm">
            <Logo variant="background"></Logo>
            <div className="flex items-center gap-6">
                {selectedVariantContent}
                <Button
                    variant="icon"
                    children={githubLogo}
                    external="https://github.com/loganlucas13/broker-x"
                ></Button>
            </div>
        </div>
    );
};

export default Header;
