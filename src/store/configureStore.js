import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
	const logger = createLogger();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, logger)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		})
	}

	return store;
}
