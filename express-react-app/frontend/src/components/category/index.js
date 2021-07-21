import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeCategory } from '../../store/home-category';
import './Category.css';

function Category() {
	const dispatch = useDispatch();
	const category = useSelector((state) => {
		return state.homeCategory.map((item) => item['image']);
		// console.log();
	});

	useEffect(() => {
		dispatch(homeCategory());
	}, [dispatch]);
	return (
		<div className='component-container'>
			{category.map((item) => {
				return (
					<div className='category-component'>
						<div className='category-img'>
							<img src={item}></img>
						</div>
						<div className='component-title'>
							{item[0]}
							<a href=''>Discover More</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Category;
