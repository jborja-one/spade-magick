import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import logotxt from './images/logo-txt.png';
// import Navigation from '../Navigation';

function SignupFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLasttName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to='/' />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ email, username, password })
			).catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});
		}
		return setErrors([
			'Confirm Password field must be the same as the Password field',
		]);
	};

	return (
		<form onSubmit={handleSubmit} className='initial-form signup-form'>
			<div className='logo-container'>
				<img
					alt='logo'
					className='label-img'
					src='https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/195136_1684899921290_3431314_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=de6eea&_nc_ohc=EkeuXqOksMIAX_TnxCv&_nc_oc=AQntQ8RpUXzolwlVMaLiIZ-aVQb6h-_AlkbZRF4kUx49MhE5ROrbNuabxj3qRI1N7Mk&_nc_ht=scontent-den4-1.xx&oh=f5a95df237ac5829d425cc379303b82e&oe=60F92415'></img>
				<img alt='logo-text' className='logotxt' src={logotxt}></img>
			</div>
			<ul>
				{errors.map((error, idx) => (
					<li key={idx}>{error}</li>
				))}
			</ul>
			<label className='form-label'>
				First Name
				<input
					className='form-input'
					type='text'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
					placeholder='Ex. Chris'
				/>
			</label>
			<label className='form-label'>
				Last Name
				<input
					className='form-input'
					type='text'
					value={lastName}
					onChange={(e) => setLasttName(e.target.value)}
					required
					placeholder='Ex. Angel'
				/>
			</label>
			<label className='form-label'>
				Email
				<input
					className='form-input'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder='Ex. spade@magic.com'
				/>
			</label>
			<label className='form-label'>
				Username
				<input
					className='form-input'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					placeholder='Ex. Mr. Spade Magick'
				/>
			</label>
			<label className='form-label'>
				Password
				<input
					className='form-input'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					placeholder='Confirm Password'
				/>
			</label>
			<label className='form-label'>
				Confirm Password
				<input
					className='form-input'
					type='password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
					placeholder='Password'
				/>
			</label>
			<div className='form-btn__container'>
				<button type='submit' className='form-btn'>
					Sign Up
				</button>
			</div>
			<div className='log-from__footer-container'>
				<NavLink to='/login' className='log-from__footer'>
					Already have an account? Log In
				</NavLink>
			</div>
		</form>
	);
}

export default SignupFormPage;
