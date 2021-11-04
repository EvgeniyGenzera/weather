import React from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';

const WindStatus = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h2>Wind Status</h2>
			{weather && (
				<div>
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
