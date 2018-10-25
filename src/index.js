import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css'
import App from './app'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import SongReducer from './store/reducers/songReducer'
import CollectionReducer from './store/reducers/collectionReducer'
import ResourceReducer from './store/reducers/resourceReducer'
import CategoryReducer from './store/reducers/categoryReducer'

const rootReducer = combineReducers({
	sng: SongReducer,
	col: CollectionReducer,
	res: ResourceReducer,
	cat: CategoryReducer
})

const logger = store => {
	console.log('[Middleware] prior state', store.getState())
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action)
			const result = next(action)
			return result
		}
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App className={classes.Body} />
		</BrowserRouter>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'));
