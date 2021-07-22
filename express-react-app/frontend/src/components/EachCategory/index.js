import { useEffect } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategory } from '../../store/categories';
import ProfileButton from '../Navigation/ProfileButton';
import './EachCategory.css';
import logotxt from './images/logo-txt.png';
import logotxtCategory from './images/logotxt-categories.png';

function EachCategory({ isLoaded }) {
	const dispatch = useDispatch();
	const { categoryId } = useParams();
	console.log(categoryId);
	const category = useSelector((state) => {
		console.log(state);
		return state.categories.filter((item) => {
			const image = item['image'];
			const title = item['title'];
			return image, title;
		});
	});

	useEffect(() => {
		dispatch(loadCategory(categoryId));
	}, [dispatch]);

	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}

	return (
		<>
			<div className='nav-bar__container'>
				<div className='nav-bar-logo__container'>
					<img
						alt='navbar-logotxt'
						className='nav-bar__logotxt'
						src={logotxt}></img>
				</div>
				<ul className='nav-bar-ul'>
					{isLoaded && sessionLinks}
					<li className='nav-bar__link'>Discover</li>
					<li className='nav-bar__link'>
						<NavLink exact to='/' className='nav-bar'>
							Create
						</NavLink>
					</li>
				</ul>
			</div>
			<div className='home-logo__container'>
				<div className='title-logo__container'>
					<img
						alt='title-logo'
						className='title-logo'
						src='https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/195136_1684899921290_3431314_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=de6eea&_nc_ohc=EkeuXqOksMIAX_TnxCv&_nc_oc=AQntQ8RpUXzolwlVMaLiIZ-aVQb6h-_AlkbZRF4kUx49MhE5ROrbNuabxj3qRI1N7Mk&_nc_ht=scontent-den4-1.xx&oh=f5a95df237ac5829d425cc379303b82e&oe=60F92415'></img>
					<img
						alt='title-logo-txt'
						className='title-logotxt'
						src={logotxtCategory}></img>
				</div>
				<div className='title'></div>
				<div className='title-container'>
					<h1 className='title'>Discover, Create, Show off</h1>
					<h3 className='subtitle'>The Best of "Title"</h3>
				</div>
			</div>
			<div className='component-container'>
				{category.map((item) => {
					return (
						<Link to={`/illusions/${item.id}`}>
							<div className='category-component'>
								<div className='category-img'>
									<img
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
		</>
	);
}

export default EachCategory;
