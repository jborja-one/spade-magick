import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer from './session';
import homeCategoryReducer from './home-category';
import illusionReducer from './illusion';
import categoriesReducer from './categories';
import reviewReducer from './reviews';

const rootReducer = combineReducers({
	// add reducer functions here
	session: sessionReducer,
	homeCategory: homeCategoryReducer,
	illusions: illusionReducer,
	categories: categoriesReducer,
	reviews: reviewReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
