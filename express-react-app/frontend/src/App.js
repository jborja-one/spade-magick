import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Category from './components/Category';
import Illusion from './components/Illusion';
import EachCategory from './components/EachCategory';
import CreateIllusionForm from './components/CreateIllusionForm';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Navigation isLoaded={isLoaded} />
					<Category />
				</Route>
				<Route path='/login'>
					<LoginFormPage />
				</Route>
				<Route path='/signup'>
					<SignupFormPage />
				</Route>
				<Route path='/illusions/create'>
					<CreateIllusionForm isLoaded={isLoaded} />
				</Route>
				<Route path='/illusions/:illusionId'>
					<Illusion isLoaded={isLoaded} />
				</Route>
				<Route path='/categories/:categoryId'>
					<EachCategory isLoaded={isLoaded} />
				</Route>
			</Switch>
		</>
	);
}
export default App;
