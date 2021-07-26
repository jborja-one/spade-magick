import { csrfFetch } from './csrf';

const SET_ILLUSION = 'illusion/setIllusion';
const CREATE_ILLUSION = 'illusion/createIllusion';
const EDIT_ILLUSION = 'illusion/editIllusion';
const DELETE_ILLUSION = 'illusion/deleteIllusion';

const setIllusion = (illusion) => {
	return {
		type: SET_ILLUSION,
		payload: illusion,
	};
};

const createIllusion = (illusion) => {
	return {
		type: CREATE_ILLUSION,
		payload: illusion,
	};
};

const editIllusion = (illusion) => {
	return {
		type: EDIT_ILLUSION,
		payload: illusion,
	};
};

const deleteIllusion = (illusion) => {
	return {
		type: DELETE_ILLUSION,
		payload: illusion,
	};
};

export const getIllusion = (illusionId) => async (dispatch) => {
	const response = await fetch(`/api/illusion/${illusionId}`);
	const illusion = await response.json();
	dispatch(setIllusion(illusion));
};

export const illusionCreate = (payload) => async (dispatch) => {
	const response = await csrfFetch('/api/illusion/create', {
		method: 'POST',
		body: JSON.stringify(payload),
	});

	if (response.ok) {
		const illusion = await response.json();
		dispatch(createIllusion(illusion));
		return illusion;
	}
};

export const illusionEdit = (payload) => async (dispatch) => {
	const response = await csrfFetch(
		`/api/illusion/edit/${payload.illusionId}`,
		{
			method: 'PUT',
			body: JSON.stringify(payload),
		}
	);

	if (response.ok) {
		const illusion = await response.json();
		dispatch(editIllusion(illusion));
		return illusion;
	}
};

export const illusionDelete = (payload) => async (dispatch) => {
	const response = await csrfFetch(
		`/api/illusion/delete/${payload.illusionId}`,
		{
			method: 'DELETE',
			body: JSON.stringify(payload),
		}
	);

	if (response.ok) {
		const illusion = await response.json();
		dispatch(deleteIllusion(illusion));
		return illusion;
	}
};

const illusionReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case SET_ILLUSION:
			newState = action.payload;
			return newState;
		case CREATE_ILLUSION:
			newState = action.payload;
			return newState;
		case EDIT_ILLUSION:
			newState = action.payload;
			return newState;
		case DELETE_ILLUSION:
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default illusionReducer;
