import React, { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatStockSymbol } from '../../assets/utils/format-stock-symbol';
import Button from './Button';
import searchIcon from '../../assets/images/search.svg';
import rightArrow from '../../assets/images/right-arrow.svg';

type SearchBarProperties = {
    onError: () => void;
};

function SearchBar(props: SearchBarProperties) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [shakeClass, setShakeClass] = useState('');

    const navigate = useNavigate();

    // called if the user clicks Enter while typing in the search bar or if the user clicks the arrow icon in the search bar
    // if the user's search is not empty, they are navigated to the analysis page for their input
    const handleSearch = async () => {
        setIsInvalid(false);
        let query = formatStockSymbol(searchTerm);
        if (query === 'INVALID') {
            setIsInvalid(true);
            setShakeClass('animate-shake');
            setTimeout(() => setShakeClass(''), 500);
            props.onError();
            return;
        }
        setIsInvalid(false);
        navigate(`/analysis?query=${encodeURIComponent(query)}`);
    };

    // this function is called whenever the user pushes a key while typing in the search bar
    // if the user clicked 'Enter', then submit their input as the search query
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div
            className={`flex flex-row border-2 p-2 rounded-full w-1/3 gap-4 border-stone-600 bg-stone-100 ${
                isInvalid ? shakeClass : ''
            }`}
        >
            <img src={searchIcon} alt="search icon" width="40"></img>
            <input
                type="search"
                placeholder="Enter a stock to search (ex. AAPL)"
                className="flex-grow border-b-2 border-stone-600 text-stone-600 text-bold bg-transparent placeholder:text-stone-600 placeholder:italic focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            ></input>
            <div className="hover:animate-bounce-horizontal">
                <Button
                    variant="icon"
                    children={rightArrow}
                    onClick={handleSearch}
                ></Button>
            </div>
        </div>
    );
}

export default SearchBar;
