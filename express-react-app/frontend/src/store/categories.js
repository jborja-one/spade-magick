import { csrfFetch } from './csrf';

const SET_CATEGORY_ILLUSIONS = 'categories/setCategoryIllusions';

const setCategories = (categoryIllusions) => {
	return {
		type: SET_CATEGORY_ILLUSIONS,
		payload: categoryIllusions,
	};
};

export const loadCategory = (categoryId) => async (dispatch) => {
	const response = await fetch(`/api/category/${categoryId}`);
	const categoryIllusions = await response.json();
	dispatch(setCategories(categoryIllusions));
};

const categoriesReducer = (state = [], action) => {
	console.log(action);
	let newState;
	switch (action.type) {
		case SET_CATEGORY_ILLUSIONS:
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default categoriesReducer;
