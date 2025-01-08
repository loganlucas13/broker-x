import React from 'react';
import Button from './Button';
import searchIcon from '../assets/images/search.svg';
import rightArrow from '../assets/images/right-arrow.svg';

function SearchBar() {
    return (
        <div className="flex flex-row border-2 p-2 border-rose-400 rounded-full w-1/3 bg-rose-50 gap-4">
            <img src={searchIcon} alt="search icon" width="40"></img>
            <input
                type="search"
                placeholder="Enter a stock to search (ex. $AAPL)"
                className="flex-grow border-b-2 border-rose-400 text-rose-400 text-bold bg-transparent placeholder:text-rose-400 placeholder:italic focus:outline-none"
            ></input>
            <Button variant="icon" children={rightArrow}></Button>
        </div>
    );
}

export default SearchBar;
