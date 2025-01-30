import React, { useState } from 'react';
import Header from '../ui/Header';
import SearchBar from '../ui/SearchBar';
import StockList from '../ui/StockList';
import ErrorMessage from '../ui/ErrorMessage';

function Home() {
    const [showError, setShowError] = useState<boolean>();

    const handleError = () => {
        setShowError(true);
    };

    const handleCloseError = () => {
        setShowError(false);
    };

    return (
        <div className="text-center bg-stone-100 min-h-screen w-full">
            <Header variant="home"></Header>
            <div className="pt-24 pb-12 flex justify-center">
                <SearchBar onError={handleError}></SearchBar>
            </div>
            <div className="flex justify-center">
                <StockList></StockList>
            </div>
            <div className="absolute right-8 bottom-8">
                {showError && (
                    <ErrorMessage onClose={handleCloseError}></ErrorMessage>
                )}
            </div>
        </div>
    );
}

export default Home;
