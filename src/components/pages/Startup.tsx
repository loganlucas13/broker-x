import React from 'react';
import { ReactTyped } from 'react-typed';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import githubLogo from '../../assets/images/github.svg';

function Startup() {
    return (
        <div className="flex flex-col text-center bg-stone-100 min-h-screen w-full pb-10">
            <div className="absolute top-5 left-5">
                <Logo variant="icon"></Logo>
            </div>
            <div className="absolute top-5 right-5">
                <Button
                    variant="icon"
                    children={githubLogo}
                    external="https://github.com/loganlucas13/broker-x"
                ></Button>
            </div>
            <div className="flex flex-col text-center items-center justify-center min-h-screen gap-5">
                <ReactTyped
                    className="text-rose-400 text-6xl font-bold"
                    strings={['Your new personal stock assistant.']}
                    typeSpeed={35}
                />
                <Button
                    variant="primary"
                    to="/home"
                    children="Try it out!"
                ></Button>
            </div>
        </div>
    );
}

export default Startup;
