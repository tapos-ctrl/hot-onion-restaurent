import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BreakFasts from './../BreakFasts/BreakFasts';
import './FootService.css'
const FootService = () => {
    return (
        <div className='foot-link'>
            <Link to="/breakfast">Break Fast</Link>
            <Link to="/dinner">Dinner</Link>
            <Link to="/lunch">Lunch</Link>
        </div>
    );
};

export default FootService;