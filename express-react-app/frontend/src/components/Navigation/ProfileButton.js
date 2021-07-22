import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};

		document.addEventListener('click', closeMenu);

		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu]);

	const logout = async (e) => {
		e.preventDefault();
		await dispatch(sessionActions.logout());
		history.push('/login'); //todo once logged out, should rederice to "/login" not working!!!
	};

	return (
		<>
			<a onClick={openMenu}>
				<i className='fas fa-hat-wizard'></i>
			</a>
			{showMenu && (
				<ul className='profile-dropdown'>
					<li className='form-label'>{user.userName}</li>
					<li className='form-label'>{user.email}</li>
					<li className='profile-dropdown__li'>
						<button className='form-btn' onClick={logout}>
							Log Out
						</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
