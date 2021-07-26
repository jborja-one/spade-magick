import { useEffect, useState } from 'react';
import { Link, NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reviewCreate, reviewDelete, getReviews } from '../../store/reviews';

function Reviews() {
	const dispatch = useDispatch();
	const history = useHistory();
	// const { illusionId } = useParams();
	const user = useSelector((state) => state.session.user);
	const illusion = useSelector((state) => state.illusions);
	const reviews = useSelector((state) => state.reviews);
	// const reviewsArray = Object.entries(reviews);
	// reviewsArray.filter((item) => {
	// 	const title = item['title'];
	// 	const description = item['description'];
	// 	return title, description;
	// });
	// console.log(reviewsArray);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const updateTitle = (e) => setTitle(e.target.value);
	const updateDescription = (e) => setDescription(e.target.value);

	useEffect(() => {
		dispatch(getReviews());
	}, [dispatch]);

	const editBtn = (e) => {
		e.preventDefault();
		history.push('/reviewform');
	};

	const deleteReview = async (e) => {
		e.preventDefault();

		const payload = {
			reviewId: reviews.id,
		};

		let deletedReview = await dispatch(reviewDelete(payload));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			title,
			description,
			userId: user.id,
			illusionId: illusion.id,
		};

		let createdReview = await dispatch(reviewCreate(payload));
		if (createdReview) {
			setTitle('');
			setDescription('');
			history.push(`/illusions/${createdReview.id}`);
		}

		// let updatedReviewDelete = await dispatch(
		// 	reviewDelete(payload.reviewId)
		// );
		// if (updatedReviewDelete) {
		// 	history.push(`/categories/${updatedReviewDelete.id}`);
		// }
	};

	return (
		<div className='illusion-container'>
			<div className='review-title__form'>
				<h1>
					Fan Reviews{'	'}
					<i class='fas fa-plus'></i>
				</h1>
			</div>
			<div className='form-container'>
				<form onSubmit={handleSubmit} className='initial-form'>
					<label className='form-label label-review'>
						{' '}
						Title:
						<input
							className='form-input'
							type='text'
							value={title}
							onChange={updateTitle}
							required
							placeholder='Enter the title of you review here ...'
						/>
					</label>
					<label className='form-label label-review'>
						Description:
						<input
							className='form-input'
							type='textarea'
							value={description}
							onChange={updateDescription}
							required
							placeholder='Enter your review here ...'
						/>
					</label>
					<div className='form-btn__container'>
						<button className='form-btn illusion-btn' type='submit'>
							Submit
						</button>
					</div>
				</form>
			</div>
			{reviews !== undefined && (
				<div className='reviews-display__container'>
					<div className='review-display'>
						{/* <div>Posted By: "{user.userName}"</div> */}
						<div className='review-Title'>
							Title: {reviews.title}
						</div>
						<div>Description: {reviews.description}</div>
						<div className='btn-container'>
							<button
								className='form-btn illusion-btn'
								onClick={editBtn}>
								Edit
							</button>
							<button
								className='form-btn illusion-btn'
								onClick={deleteReview}>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Reviews;
