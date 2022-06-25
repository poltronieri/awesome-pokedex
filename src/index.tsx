import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import App from './components/App';
import Home from './components/Home';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
