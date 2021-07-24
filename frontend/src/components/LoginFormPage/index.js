import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css';
import logotxt from './images/logo-txt.png';
import logo from './images/logo.jpeg';

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
		<div className='form-container'>
			<form onSubmit={handleSubmit} className='initial-form login-form'>
				<div className='logo-container'>
					<img className='label-img' src={logo}></img>
					<img className='logotxt' src={logotxt}></img>
				</div>
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
						placeholder="No... We don't know your name..."
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
						placeholder='Enter your password...'
					/>
				</label>
				<div className='form-btn__container'>
					<button type='submit' className='form-btn'>
						Log In
					</button>
				</div>
				<div className='log-from__footer-container'>
					<NavLink to='/signup' className='log-from__footer'>
						Create a new account
					</NavLink>
				</div>
			</form>
		</div>
	);
}

export default LoginFormPage;
