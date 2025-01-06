import React from 'react';
import Button from './Button';
import Logo from './Logo';
import githubLogo from '../assets/images/github.svg';

function Header() {
    return (
        <div className="flex justify-between items-center px-24 py-4 bg-rose-50 rounded-b-3xl shadow-sm">
            <Logo variant="background"></Logo>
            <div className="flex items-center gap-6">
                <Button variant="primary" children="FAQ" to="faq"></Button>
                <Button variant="icon" children={githubLogo} external="https://github.com/loganlucas13/broker-x"></Button>
            </div>
        </div>
    );
}

export default Header;