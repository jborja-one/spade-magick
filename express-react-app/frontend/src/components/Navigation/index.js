import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<NavLink to='/login' className='nav-bar'>
					Log In
				</NavLink>
				<NavLink to='/signup' className='nav-bar'>
					Sign Up
				</NavLink>
			</>
		);
	}

	return (
		<ul className='nav-bar-ul'>
			<li>
				<NavLink exact to='/' className='nav-bar'>
					Home
				</NavLink>
				{isLoaded && sessionLinks}
			</li>
		</ul>
	);
}

export default Navigation;
