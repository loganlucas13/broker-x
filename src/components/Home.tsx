import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import StockList from './StockList';

function Home() {
    return (
        <div className="text-center bg-stone-100 min-h-screen w-full">
            <Header></Header>
            <div className="pt-24 pb-12 flex justify-center">
                <SearchBar></SearchBar>
            </div>
            <div className="flex justify-center">
                <StockList></StockList>
            </div>
        </div>
    )
}

export default Home;