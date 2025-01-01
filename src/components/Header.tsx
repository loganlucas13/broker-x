import React from 'react';
import Button from './Button';
import Logo from './Logo';

function Header() {
    return (
        <div className="flex justify-between items-center px-24 py-4 bg-rose-50 rounded-b-3xl shadow-sm">
            <Logo variant='background'></Logo>
            <div className="flex items-center gap-4">
                <Button variant='text' buttonText={'About this project'}></Button>
                <Button variant='primary' buttonText={'FAQ'}></Button>
            </div>
        </div>
    );
}

export default Header;