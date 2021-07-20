import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeCategory } from '../../store/home-category';
import './Category.css';

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
		<div className='component-container'>
			{category.map((item) => {
				return (
					<div className='category-component'>
						<div className='category-img'>
							<img src='https://christopherhowell.net/images/Sleight-of-Hand-Magician-Dai-Vernon-2.jpg'></img>
						</div>
						<div className='component-title'>
							{item}
							<a href=''>Discover More</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Category;
