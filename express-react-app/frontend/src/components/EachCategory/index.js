import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../store/categories';
import './EachCategory.css';

function Illusion() {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(categories());
	}, [dispatch]);

	return <h1>Each Category Page</h1>;
}

export default Illusion;
