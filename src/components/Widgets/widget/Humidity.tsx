import React, { useMemo } from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import { humudityDescription } from '../../../core/utils/utils';
import style from '../Widgets.module.scss';

const Humidity = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h3>Humudity</h3>
			{weather && (
				<div className={style.humudity}>
					<div className={style.humudity__percent}>
						<p>
							<span>{weather.current.humidity}</span> %
						</p>
						<p>{humudityDescription(weather.current.humidity)}</p>
					</div>
					<div className={style.frame__humudity}>
						<div style={{ background: `linear-gradient(360deg, #08E ${weather.current.humidity}%, #fff 50%)` }}></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Humidity;
