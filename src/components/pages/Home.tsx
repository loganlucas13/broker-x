import React from 'react';
import Header from '../ui/Header';
import SearchBar from '../ui/SearchBar';
import StockList from '../ui/StockList';

function Home() {
    return (
        <div className="text-center bg-stone-100 min-h-screen w-full">
            <Header variant="home"></Header>
            <div className="pt-24 pb-12 flex justify-center">
                <SearchBar></SearchBar>
            </div>
            <div className="flex justify-center">
                <StockList></StockList>
            </div>
        </div>
    );
}

export default Home;
