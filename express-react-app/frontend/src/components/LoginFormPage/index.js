import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to='/' />;

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);
	};

	return (
		<form onSubmit={handleSubmit} className='initial-form login-form'>
			<ul>
				{errors.map((error, idx) => (
					<li key={idx}>{error}</li>
				))}
			</ul>
			<label className='form-label'>
				Username or Email
				<input
					className='form-input individual-form-input'
					type='text'
					value={credential}
					onChange={(e) => setCredential(e.target.value)}
					required
				/>
			</label>
			<label className='form-label'>
				Password
				<input
					className='form-input individual-form-input'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
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

export default LoginFormPage;
