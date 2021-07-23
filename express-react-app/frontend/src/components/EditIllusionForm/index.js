import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../Navigation/ProfileButton';
import logotxt from './images/logo-txt.png';
import logotxtEdit from './images/logotxt-edit.png';
import logo from './images/logo.jpeg';
import { illusionEdit } from '../../store/illusion';
import { homeCategory } from '../../store/home-category';

function EditIllusionForm({ isLoaded }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);
	const editIllusion = useSelector((state) => state.illusions);
	const categories = useSelector((state) => state.homeCategory);

	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [steps, setSteps] = useState('');
	const [select, setSelect] = useState('');

	const updateTitle = (e) => setTitle(e.target.value);
	const updateImage = (e) => setImage(e.target.value);
	const updateDescription = (e) => setDescription(e.target.value);
	const updateSteps = (e) => setSteps(e.target.value);
	const updateSelect = (e) => setSelect(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			// ...editIllusion,
			title,
			image,
			description,
			steps,
			userId: sessionUser.id,
			categoryId: select,
			illusionId: editIllusion.id,
		};

		let updatedIllusion = await dispatch(illusionEdit(payload));
		if (updatedIllusion) {
			history.push(`/illusions/${updatedIllusion.id}`);
		}
	};

	useEffect(() => {
		if (editIllusion) {
			setTitle(editIllusion.title);
			setImage(editIllusion.image);
			setDescription(editIllusion.description);
			setSteps(editIllusion.steps);
			setSelect(editIllusion.categoryId);
		}
	}, [editIllusion]);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}
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
						src={logotxtEdit}></img>
				</div>
				<div className='title'></div>
				<div className='title-container'>
					<h1 className='title'>Discover, Create, Show off</h1>
					<h3 className='subtitle'>
						We know you like perfect... Make it your own!
					</h3>
				</div>
			</div>
			<div className='form-container'>
				<form
					onSubmit={handleSubmit}
					className='initial-form signup-form'>
					<label className='form-label'>
						Select a Category
						<select
							value={select}
							onChange={updateSelect}
							className='form-input'>
							{categories?.map((el) => (
								<option key={el.id} value={el.id}>
									{el.title}
								</option>
							))}
						</select>
					</label>

					<label className='form-label'>
						Illusion Title
						<input
							className='form-input'
							type='text'
							value={title}
							onChange={updateTitle}
							required
							placeholder='Ex. Three Card Monte'
						/>
					</label>

					<label className='form-label'>
						Illusion URL Image
						<input
							className='form-input'
							type='text'
							value={image}
							onChange={updateImage}
							required
							placeholder='Copy the URL here'
						/>
					</label>

					<label className='form-label input-textarea'>
						Illusion Description
						<input
							className='form-input'
							type='textarea'
							value={description}
							onChange={updateDescription}
							required
							placeholder='Ex. What is the main effect of your illusion'
						/>
					</label>
					<label className='form-label input-textarea'>
						Illusion Steps
						<input
							className='form-input'
							type='textarea'
							value={steps}
							onChange={updateSteps}
							placeholder='Ex. How is this Illuision done'
						/>
					</label>
					<div className='form-btn__container'>
						<button type='submit' className='form-btn'>
							Confirm
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default EditIllusionForm;
