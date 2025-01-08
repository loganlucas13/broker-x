import React from 'react';
import Button from './Button';
import rightArrow from '../assets/images/right-arrow.svg';

type StockProperties = {
    variant?: 'primary';
    name: React.ReactNode;
    symbol: React.ReactNode;
};

const Stock: React.FC<StockProperties> = ({
    variant = 'primary',
    name,
    symbol,
}) => {
    const defaultStyling =
        'p-2 flex flex-row justify-between rounded-full items-center border-2 border-rose-400 gap-4 text-rose-400 bg-stone-100 hover:bg-rose-100 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8';

    return (
        <div className={`${defaultStyling}`}>
            <span className="px-4 py-2">{`${name} ($${symbol})`}</span>
            <Button variant="icon" children={rightArrow}></Button>
        </div>
    );
};

export default Stock;
