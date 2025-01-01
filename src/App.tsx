import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="text-center bg-stone-100 min-h-screen w-full">
      <Header></Header>
      <div className="p-36 flex flex-row justify-center">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}

export default App;
