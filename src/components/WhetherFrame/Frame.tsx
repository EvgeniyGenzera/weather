import React, { FC } from 'react';
import { IDailyWeather, IHourlyWeather } from '../../core/types/types';
import { formatDate } from '../../core/utils/utils';
import style from './Frame.module.scss';

type FrameProps = {
	hourly?: IHourlyWeather;
	daily?: IDailyWeather;
	tempType: boolean;
};
const Frame: FC<FrameProps> = ({ hourly, daily, tempType }) => {
	return (
		<div className={style.frame}>
			{hourly && (
				<>
					<p className={style.title}>{formatDate(hourly.dt)}</p>
					<img src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt="icon" />
					<p className={style.temperature}>
						{tempType ? `${Math.floor(hourly.temp - 273)} C` : `${(Math.floor(hourly.temp - 273) * 9) / 5 + 32} °F`}
					</p>
				</>
			)}
			{daily && (
				<>
					<p className={style.title}>{formatDate(daily.dt)}</p>
					<img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="icon" />
					<p className={style.temperature}>
						{tempType
							? `${Math.floor(daily.temp.min - 273)} °C - ${Math.floor(daily.temp.max - 273)} °C`
							: `${(Math.floor(daily.temp.min - 273) * 9) / 5 + 32} °F - ${
									(Math.floor(daily.temp.max - 273) * 9) / 5 + 32
							  } °F`}
					</p>
				</>
			)}
		</div>
	);
};

export default Frame;
