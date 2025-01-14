import React from 'react';
import Button from './Button';
import Logo from './Logo';
import githubLogo from '../../assets/images/github.svg';

type HeaderProperties = {
    variant?: 'startup' | 'home' | 'faq' | 'analysis';
};

const Header: React.FC<HeaderProperties> = ({ variant = 'home' }) => {
    const variantContent = {
        startup: null,
        home: <Button variant="primary" children="FAQ" to="/faq"></Button>,
        faq: <Button variant="primary" children="Home" to="/home"></Button>,
        analysis: (
            <div className="space-x-4">
                <Button variant="primary" children="Home" to="/home"></Button>
                <Button variant="primary" children="FAQ" to="/faq"></Button>
            </div>
        ),
    };
    const selectedVariantContent = variantContent[variant];

    return (
        <div className="flex justify-between items-center px-8 pt-4">
            <Logo variant="icon"></Logo>
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
