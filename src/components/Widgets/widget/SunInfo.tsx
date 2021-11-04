import React, { useMemo } from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';
import sunriseIcon from '../../../assets/images/icons/sunrise.png';
import sunsetIcon from '../../../assets/images/icons/sunset.png';

const SunInfo = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const sunrise = useMemo(() => (!weather ? new Date() : new Date(weather?.current.sunrise * 1000)), [weather]);
	const sunset = useMemo(() => (!weather ? new Date() : new Date(weather.current.sunset * 1000)), [weather]);
	return (
		<div className={style.frame}>
			<h2>Sunrise & Sunset</h2>
			{weather && (
				<div className={style.frame__sunInfo}>
					<p>
						<img src={sunriseIcon} />
						{sunrise.getHours() + ':' + sunrise.getMinutes()}
					</p>
					<p>
						<img src={sunsetIcon} />
						{sunset.getHours() + ':' + sunset.getMinutes()}
					</p>
				</div>
			)}
		</div>
	);
};

export default SunInfo;
