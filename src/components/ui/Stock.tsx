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
        'p-2 flex flex-row justify-between rounded-full items-center border-2 border-stone-600 gap-4 text-stone-600 bg-stone-100 hover:bg-stone-200 hover: cursor-pointer hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8';

    return (
        <div
            className={`${defaultStyling} group`}
            onClick={() => handleSearch(symbol)}
        >
            <span className="px-4 py-2">{`${name} (${symbol})`}</span>
            <div className="hover:animate-bounce-horizontal group-hover:animate-bounce-horizontal">
                <Button variant="icon" children={rightArrow}></Button>
            </div>
        </div>
    );
};

export default Stock;
