import React from 'react';
import { ReactTyped } from 'react-typed';
import Header from '../ui/Header';
import Button from '../ui/Button';

function Startup() {
    return (
        <div className="flex flex-col text-center bg-stone-100 min-h-screen w-full">
            <Header variant="startup"></Header>
            <div className="flex flex-col flex-grow text-center items-center justify-center gap-5">
                <ReactTyped
                    className="text-stone-600 text-6xl font-bold"
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
