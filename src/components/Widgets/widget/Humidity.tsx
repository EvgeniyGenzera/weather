import React, { useMemo } from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';

const Humidity = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const humidityLevel: string = useMemo(
		() =>
			!weather
				? 'No data'
				: weather.current.humidity > 70
				? 'Poor high'
				: weather.current.humidity > 60 && weather.current.humidity <= 70
				? 'Fair humidity'
				: weather.current.humidity > 30 && weather.current.humidity <= 60
				? 'Maintain'
				: weather.current.humidity > 25 && weather.current.humidity <= 30
				? 'Fair humidity'
				: 'Poor low',
		[weather]
	);

	return (
		<div className={style.frame}>
			<h2>Wind Status</h2>
			{weather && (
				<div className={style.humudity}>
					<div>
						<p>
							<span>{weather.current.humidity}</span> %
						</p>
						<p>{humidityLevel}</p>
					</div>
					<div className={style.frame__humudity}>
						<div style={{ background: `linear-gradient(360deg, blue ${weather.current.humidity}%, #fff 50%)` }}></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Humidity;
