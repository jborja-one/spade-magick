import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logotxt from './images/logo-txt.png';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}
	// else {
	// 	sessionLinks = (
	// 		<>
	// 			<NavLink to='/login' className='nav-bar'>
	// 				Log In
	// 			</NavLink>
	// 			<NavLink to='/signup' className='nav-bar'>
	// 				Sign Up
	// 			</NavLink>
	// 		</>
	// 	);
	// }
	//todo create NavLink for path
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
						src={logotxt}></img>
				</div>
				<div className='title'></div>
				<div className='title-container'>
					<h1 className='title'>Discover, Create, Show off</h1>
					<h3 className='subtitle'>
						Finally a place for seasoned magicians, amateurs, and
						everyone who appreciates the art!
					</h3>
				</div>
			</div>
		</>
	);
}

export default Navigation;
