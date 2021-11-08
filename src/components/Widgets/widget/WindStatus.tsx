import React from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';

const WindStatus = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h3>Wind Status</h3>
			{weather && (
				<div className={style.windStatus}>
					<p>
						<span>{weather.current.wind_speed}</span> km/h
					</p>
					<p>Light breeze</p>
				</div>
			)}
		</div>
	);
};

export default WindStatus;
