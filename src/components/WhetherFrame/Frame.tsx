import { FC } from 'react';
import { IDailyWeather, IHourlyWeather } from '../../core/types/types';
import { formatDate, toCelcius, toFahrenheit } from '../../core/utils/utils';
import style from './Frame.module.scss';

type FrameProps = {
	hourly?: IHourlyWeather;
	daily?: IDailyWeather;
	tempType: boolean;
	timezone: string;
};
const Frame: FC<FrameProps> = ({ hourly, daily, tempType, timezone }) => {
	return (
		<div className={style.frame}>
			{hourly && (
				<>
					<p className={style.title}>{formatDate(hourly.dt, timezone)}</p>
					<img src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt="icon" />
					<p className={style.temperature}>
						{tempType ? `${toCelcius(hourly.temp)} C` : `${toFahrenheit(hourly.temp)} °F`}
					</p>
				</>
			)}
			{daily && (
				<>
					<p className={style.title}>{formatDate(daily.dt, timezone)}</p>
					<img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="icon" />
					<p className={style.temperature}>
						{tempType
							? `${toCelcius(daily.temp.min)} °C - ${toCelcius(daily.temp.max)} °C`
							: `${toFahrenheit(daily.temp.min)} °F - ${toFahrenheit(daily.temp.max)} °F`}
					</p>
				</>
			)}
		</div>
	);
};

export default Frame;
