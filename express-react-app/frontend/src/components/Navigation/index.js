import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logotxt from './images/logo-txt.png';
import logo from './images/logo.jpeg';

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
			<div className='home-logo__container'>
				<div className='title-logo__container'>
					<img
						alt='title-logo'
						className='title-logo'
						src={logo}></img>
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
