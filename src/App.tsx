import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Analysis from './components/Analysis';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/faq" element={<FAQ></FAQ>}></Route>
                <Route path="/analysis" element={<Analysis></Analysis>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
