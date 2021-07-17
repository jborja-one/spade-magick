import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
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
			<ul>
				{errors.map((error, idx) => (
					<li key={idx}>{error}</li>
				))}
			</ul>
			<label className='form-label'>
				Email
				<input
					className='form-input'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
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
				/>
			</label>
			<div className='form-btn__container'>
				<button type='submit' className='form-btn'><i class="fas fa-sign-in-alt"></i> Log In</button>
				<button type='submit' className='form-btn'><i class="fas fa-sign-in-alt"></i> Sign Up</button>
			</div>
		</form>
	);
}

export default SignupFormPage;
