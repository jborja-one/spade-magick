const SET_ILLUSION = 'illusion/setIllusion';

const setIllusion = (illusion) => {
	return {
		type: SET_ILLUSION,
		payload: illusion,
	};
};

export const illusions = () => async (dispatch) => {
	const response = await fetch('/api/illusion');
	const illusion = await response.json();
	dispatch(setIllusion(illusion));
};

const illusionReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case SET_ILLUSION:
			Object.assign({}, state);
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default illusionReducer;