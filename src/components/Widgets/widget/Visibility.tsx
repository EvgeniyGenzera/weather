import React from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';

const Visibility = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h3>Visibility</h3>

			<div className={style.visibility}>
				<span>{weather?.current?.visibility || 0}</span> Average visibility, metres
			</div>
		</div>
	);
};

export default Visibility;
