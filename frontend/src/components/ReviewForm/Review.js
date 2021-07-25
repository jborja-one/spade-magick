import { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Reviews() {
	const dispatch = useDispatch();
	const history = useHistory();
	const reviews = useSelector((state) => state.reviews);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const updateTitle = (e) => setTitle(e.target.value);
	const updateDescription = (e) => setDescription(e.target.value);

	return (
		<div>
			<h1>Review Test</h1>
		</div>
	);
}

export default Reviews;
