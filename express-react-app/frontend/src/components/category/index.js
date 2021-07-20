import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeCategory } from '../../store/home-category';

function Category() {
	const dispatch = useDispatch();
	const category = useSelector((state) =>
		state.homeCategory.map((item) => item['title'])
	);
	console.log(category);
	useEffect(() => {
		dispatch(homeCategory());
	}, [dispatch]);
	return (
		<div>
			{category.map((item) => {
				return <div className='category-component'>{item}</div>;
			})}
		</div>
	);
}

export default Category;
