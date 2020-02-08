import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './food.css';
import App from './App';
import List from './List';
import Numbers from './Numbers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<List />, document.getElementById('list'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
