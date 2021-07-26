import { csrfFetch } from './csrf';

const SET_REVIEW = 'review/setReview';
const CREATE_REVIEW = 'review/createReview';
const EDIT_REVIEW = 'review/editReview';
const DELETE_REVIEW = 'review/deleteReview';

const setReview = (review) => {
	return {
		type: SET_REVIEW,
		payload: review,
	};
};

const createReview = (review) => {
	return {
		type: CREATE_REVIEW,
		payload: review,
	};
};

const editReview = (review) => {
	return {
		type: EDIT_REVIEW,
		payload: review,
	};
};

const deleteReview = (review) => {
	return {
		type: DELETE_REVIEW,
		payload: review,
	};
};

export const getReviews = () => async (dispatch) => {
	const response = await fetch(`/api/illusion/review`);

	if (response.ok) {
		const review = await response.json();
		dispatch(setReview(review));
		return review;
	}
};

export const reviewCreate = (payload) => async (dispatch) => {
	const response = await csrfFetch('/api/illusion/review/create', {
		method: 'POST',
		body: JSON.stringify(payload),
	});

	if (response.ok) {
		const review = await response.json();
		dispatch(createReview(review));
		return review;
	}
};

export const reviewEdit = (payload) => async (dispatch) => {
	const response = await csrfFetch(
		`/api/illusion/review/edit/${payload.reviewId}`,
		{
			method: 'PUT',
			body: JSON.stringify(payload),
		}
	);

	if (response.ok) {
		const review = await response.json();
		dispatch(editReview(review));
		return review;
	}
};

export const reviewDelete = (payload) => async (dispatch) => {
	const response = await csrfFetch(
		`/api/illusion/review/delete/${payload.reviewId}`,
		{
			method: 'DELETE',
			body: JSON.stringify(payload),
		}
	);

	if (response.ok) {
		const review = await response.json();
		dispatch(deleteReview(review));
		return review;
	}
};

const reviewReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case SET_REVIEW:
			newState = action.payload;
			return newState;
		case CREATE_REVIEW:
			newState = action.payload;
			return newState;
		case EDIT_REVIEW:
			newState = Object.entries(...state);
			return newState;
		case DELETE_REVIEW:
			newState = action.payload;
			return newState;
		default:
			return state;
	}
};

export default reviewReducer;
