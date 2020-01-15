import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

// We wrap the App component with the router component to be able to implement router component behavior

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);
