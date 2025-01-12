import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import rightArrow from '../../assets/images/right-arrow.svg';

type StockProperties = {
    variant?: 'primary';
    name: string;
    symbol: string;
};

const Stock: React.FC<StockProperties> = ({
    variant = 'primary',
    name,
    symbol,
}) => {
    const navigate = useNavigate();

    // redirects user to the analysis page for a given stock
    // @param: 'query': stock symbol to analyze
    const handleSearch = (query: string) => {
        navigate(`/analysis?query=${encodeURIComponent(query)}`);
    };

    const defaultStyling =
        'p-2 flex flex-row justify-between rounded-full items-center border-2 border-rose-400 gap-4 text-rose-400 bg-stone-100 hover:bg-rose-100 hover: cursor-pointer hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8';

    return (
        <div
            className={`${defaultStyling}`}
            onClick={() => handleSearch(symbol)}
        >
            <span className="px-4 py-2">{`${name} (${symbol})`}</span>
            <Button variant="icon" children={rightArrow}></Button>
        </div>
    );
};

export default Stock;
