import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';

function App() {
  return (
    <div className="text-center bg-stone-100 min-h-screen w-full">
      <Header></Header>
      <div className="pt-36 pb-12 flex justify-center">
        <SearchBar></SearchBar>
      </div>
      <div className="flex justify-center">
        <StockList></StockList>
      </div>
    </div>
  );
}

export default App;
