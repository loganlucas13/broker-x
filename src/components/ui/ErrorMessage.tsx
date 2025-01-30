import React from 'react';
import Button from './Button';
import closeIcon from '../../assets/images/close.svg';

type ErrorMessageProperties = {
    onClose: () => void;
};

function ErrorMessage(props: ErrorMessageProperties) {
    return (
        <div
            className="flex flex-row bg-red-50 p-2 pl-4 rounded-full border-2 text-red-400 border-red-400 font-semibold gap-2 items-center group hover:bg-rose-100 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8 hover:cursor-pointer"
            onClick={props.onClose}
        >
            Invalid input! Please try again.
            <div className="hover:animate-shake group-hover:animate-shake">
                <Button
                    variant="icon"
                    children={closeIcon}
                    onClick={props.onClose}
                ></Button>
            </div>
        </div>
    );
}

export default ErrorMessage;
