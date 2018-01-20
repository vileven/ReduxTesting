import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './containers/App';

ReactDOM.render(
	<App/>,
	document.getElementById('root'),
);

module.hot.accept();