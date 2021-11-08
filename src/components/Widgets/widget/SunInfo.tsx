import React, { useMemo } from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';
import sunriseIcon from '../../../assets/images/icons/sunrise.png';
import sunsetIcon from '../../../assets/images/icons/sunset.png';
import { sunInformation } from '../../../core/utils/utils';

const SunInfo = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<div className={style.frame}>
			<h3>Sunrise & Sunset</h3>
			{weather && (
				<div className={style.frame__sunInfo}>
					<p>
						<img src={sunriseIcon} />
						{sunInformation(weather?.current.sunrise)}
					</p>
					<p>
						<img src={sunsetIcon} />
						{sunInformation(weather?.current.sunset)}
					</p>
				</div>
			)}
		</div>
	);
};

export default SunInfo;
