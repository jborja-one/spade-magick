import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategory } from '../../store/categories';
import ProfileButton from '../Navigation/ProfileButton';
import logotxt from './images/logo-txt.png';
import './Illusion.css';

function Illusion({ isLoaded }) {
	const dispatch = useDispatch();
	const { illusionId } = useParams();
	console.log(illusionId);

	const illusion = useSelector((state) => {
		console.log(state);
		return state.categories.filter((item) => {
			const image = item['image'];
			const title = item['title'];
			const description = item['description'];
			const steps = item['steps'];
			return image, title, description, steps;
		});
	});

	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}

	useEffect(() => {
		dispatch(loadCategory(illusionId));
	}, [dispatch]);

	return (
		<div>
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
			{illusion.map((item) => {
				return (
					<div className='illusion-container'>
						<div className='illusion-title'>{item.title}</div>
						<div className='illusion-img'>
							<img src={item.image}></img>
						</div>
						<div className='illusion-description'>
							<h3 className='description-title'>Description</h3>
							{item.description}
						</div>
						<div className='illusion-steps'>
							<h3 className='steps-title'>Steps</h3>
							{item.steps})
						</div>
						<div className='btn-container'>
							<button className='form-btn illusion-btn'>
								Edit
							</button>
							<button className='form-btn illusion-btn'>
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Illusion;
