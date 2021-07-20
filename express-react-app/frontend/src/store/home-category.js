import { csrfFetch } from './csrf';

const SET_CATEGORY = 'category/setCategory';

const setCategory = (categories) => {
	return {
		type: SET_CATEGORY,
		payload: categories,
	};
};

export const homeCategory = () => async (dispatch) => {
	const response = await fetch('/api/home');
	const categories = await response.json();
	dispatch(setCategory(categories));
};

const homeCategoryReducer = (state = [], action) => {
	console.log(action);
	let newState;
	switch (action.type) {
		case SET_CATEGORY:
			newState = Object.assign({}, state);
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default homeCategoryReducer;
