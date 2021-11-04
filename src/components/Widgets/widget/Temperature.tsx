import React from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';
import maxTemp from '../../../assets/images/icons/maxTemp.png';
import minTemp from '../../../assets/images/icons/minTemp.png';
const Temperature = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h2>Min & Max temperature</h2>
			{weather && (
				<div className={style.temperature}>
					<p>
						<img src={maxTemp} alt="max" />
						<span>{Math.floor(weather.daily[0].temp.max) - 273} °C</span>
					</p>
					<p>
						<img src={minTemp} alt="min" />
						<span>{Math.floor(weather.daily[0].temp.min) - 273} °C</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Temperature;
