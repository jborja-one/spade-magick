import { useEffect } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIllusion } from '../../store/illusion';
import { illusionDelete } from '../../store/illusion';
import ProfileButton from '../Navigation/ProfileButton';
import logotxt from './images/logo-txt.png';
import './Illusion.css';

function Illusion({ isLoaded }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { illusionId } = useParams();

	const illusion = useSelector((state) => state.illusions);
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}

	const editBtn = (e) => {
		e.preventDefault();
		history.push('/editIllusion');
	};

	const deleteIllusion = async (e) => {
		e.preventDefault();

		const payload = {
			illusionId,
		};

		let deletedIllusion = await dispatch(illusionDelete(payload));

		if (deletedIllusion) {
			history.push('/');
		}
	};

	useEffect(() => {
		dispatch(getIllusion(illusionId));
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
					<li className='nav-bar__link'>
						<NavLink exact to='/' className='nav-bar'>
							Discover
						</NavLink>
					</li>
					<li className='nav-bar__link'>
						<NavLink
							exact
							to='/illusions/create'
							className='nav-bar'>
							Create
						</NavLink>
					</li>
				</ul>
			</div>
			{illusion !== undefined && (
				<div className='illusion-container'>
					<div className='illusion-title'>{illusion.title}</div>
					<div className='illusion-img'>
						<img src={illusion.image}></img>
					</div>
					<div className='illusion-description'>
						<h3 className='description-title'>Description</h3>
						{illusion.description}
					</div>
					<div className='illusion-steps'>
						<h3 className='steps-title'>Steps</h3>
						{illusion.steps})
					</div>
					<div className='btn-container'>
						<button
							className='form-btn illusion-btn'
							onClick={editBtn}>
							Edit
						</button>
						<button
							className='form-btn illusion-btn'
							onClick={deleteIllusion}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Illusion;
