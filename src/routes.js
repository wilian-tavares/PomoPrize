import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Atualize a extensão para .tsx
import Header from './components/Header';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header theme={Home.theme} />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
