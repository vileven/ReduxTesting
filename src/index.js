import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import './styles/app.css'
import configureStore from './store/configureStore';


const store = configureStore();

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<div className='app'>
					<Component/>
				</div>
			</Provider>
		</AppContainer>,
		document.getElementById('root'),
	)
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./containers/App', () => {
		render(App)
	})
}

module.hot.accept();