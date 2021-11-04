import React from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';

const Visibility = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h2>Visibility</h2>

			<div>
				<span>{weather?.current?.visibility || 0}</span> Average visibility, metres
			</div>
		</div>
	);
};

export default Visibility;
