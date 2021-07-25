import { useEffect, useState } from 'react';
import { Link, NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reviewCreate, reviewDelete, getReviews } from '../../store/reviews';

function Reviews() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { illusionId } = useParams();
	const reviews = useSelector((state) => state.reviews);
	const user = useSelector((state) => state.session.user);
	const illusion = useSelector((state) => state.illusions);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const updateTitle = (e) => setTitle(e.target.value);
	const updateDescription = (e) => setDescription(e.target.value);

	const editBtn = (e) => {
		e.preventDefault();
		history.push('/reviewform');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			reviewId: reviews.id,
			title,
			description,
			userId: user.id,
			illusionId: illusion.id,
		};

		let updatedReviewCreate = await dispatch(reviewCreate(payload));
		if (updatedReviewCreate) {
			history.push(`/illusions/${updatedReviewCreate.id}`);
		}

		let updatedReviewDelete = await dispatch(
			reviewDelete(payload.reviewId)
		);
		if (updatedReviewDelete) {
			history.push(`/categories/${updatedReviewDelete.id}`);
		}
	};

	useEffect(() => {
		dispatch(getReviews(illusionId));
	}, [dispatch]);

	return (
		<div className='review-container'>
			<div className='review-title__form'>
				<h1>
					Fan Reviews{'	'}
					<Link to='/reviews/create'>
						<i class='fas fa-plus'></i>
					</Link>
				</h1>
			</div>
			<div className='review-form'>
				<form onSubmit={handleSubmit}>
					<input
						className=''
						type='text'
						value={title}
						onChange={updateTitle}
						required
						placeholder='Enter the title of you review here ...'
					/>
					<input
						className=''
						type='textarea'
						value={description}
						onChange={updateDescription}
						required
						placeholder='Enter your review here ...'
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
			{reviews !== undefined && (
				<div className='reviews-display__container'>
					<div className='review-display'>
						<div className='review-Title'>{reviews.title}</div>
						<div>{user.userName}</div>
						<div>{reviews.description}</div>
						<div>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Reviews;
