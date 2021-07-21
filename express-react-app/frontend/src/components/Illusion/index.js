import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { illusions } from '../../store/illusion';
import './Illusion.css';

function Illusion() {
	const dispatch = useDispatch();
	const illusion = useSelector((state) => state.illusions);

	return <h1>Illusions Page</h1>;
}

export default Illusion;
