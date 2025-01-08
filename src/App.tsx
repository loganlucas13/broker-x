import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FAQ from './components/FAQ';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/faq" element={<FAQ></FAQ>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
