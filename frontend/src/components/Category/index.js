import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { homeCategory } from '../../store/home-category';
import './Category.css';

function Category() {
	const dispatch = useDispatch();
	const category = useSelector((state) => {
		return state.homeCategory.filter((item) => {
			const image = item['image'];
			const title = item['title'];
			return image, title;
		});
	});

	useEffect(() => {
		dispatch(homeCategory());
	}, [dispatch]);
	return (
		<div className='component-container'>
			<div className='category-header__container'>
				<h1 className='category-page__header form-input'>
					Top Categories ... Enjoy our Art
				</h1>
			</div>
			{category.map((item) => {
				return (
					<Link to={`/categories/${item.id}`}>
						<div className='category-component'>
							<div className='category-img'>
								<img
									alt='category-image'
									className='categoryImg'
									src={item.image}></img>
							</div>
							<div className='component-title'>
								{item.title}
								<a href='/category'>Discover More</a>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Category;
