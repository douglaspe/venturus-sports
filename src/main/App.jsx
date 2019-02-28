
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Routes />
        </div>
    </BrowserRouter>

