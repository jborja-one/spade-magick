import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import logotxt from './images/logo-txt.png';
import logo from './images/logo.jpeg';

function SignupFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to='/' />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({
					firstName,
					lastName,
					userName,
					email,
					password,
				})
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
				<img alt='logo' className='label-img' src={logo}></img>
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
					onChange={(e) => setLastName(e.target.value)}
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
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
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
