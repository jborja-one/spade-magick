import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Category from './components/Category';
import Illusions from './components/Illusion';
import EachCategory from './components/EachCategory';

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
				<Route path='/category/illusions'>
					<Illusions />
				</Route>
				<Route path='/category'>
					<EachCategory />
				</Route>
			</Switch>
		</>
	);
}
export default App;
