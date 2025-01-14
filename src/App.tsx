import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startup from './components/pages/Startup';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
import Analysis from './components/pages/Analysis';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Startup></Startup>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/faq" element={<FAQ></FAQ>}></Route>
                <Route path="/analysis" element={<Analysis></Analysis>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
