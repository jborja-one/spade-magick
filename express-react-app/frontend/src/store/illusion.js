const SET_ILLUSION = 'illusion/setIllusion';

const setIllusion = (illusion) => {
	return {
		type: SET_ILLUSION,
		payload: illusion,
	};
};

export const illusions = (illusionId) => async (dispatch) => {
	const response = await fetch(`/api/illusion/${illusionId}`);
	const illusion = await response.json();
	dispatch(setIllusion(illusion));
};

const illusionReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case SET_ILLUSION:
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default illusionReducer;
