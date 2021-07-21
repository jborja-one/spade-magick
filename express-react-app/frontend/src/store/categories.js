import { csrfFetch } from './csrf';

const SET_CATEGORIES = 'categories/setCategories';

const setCategories = (eachCategory) => {
	return {
		type: SET_CATEGORIES,
		payload: eachCategory,
	};
};

export const categories = () => async (dispatch) => {
	const response = await csrfFetch('/api/category');
	const eachCategory = await response.json;
	dispatch(setCategories(eachCategory));
};

const categoriesReducer = (state = [], action) => {
	console.log(action);
	let newState;
	switch (action.type) {
		case SET_CATEGORIES:
			newState = Object.assign({}, state);
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default categoriesReducer;
