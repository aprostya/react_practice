import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';
import './index.css';
import {robots} from './robots';
ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
