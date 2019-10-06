import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

export const init = config => {
	config.target = config.target && document.querySelector(config.target) ? document.querySelector(config.target) : document.getElementById('MINDD');
	const text = config.target.innerText;
	ReactDOM.render(<App config={config}>{text}</App>, config.target);
};

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
