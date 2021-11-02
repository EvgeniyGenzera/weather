import React, { useEffect, useState } from 'react';
import style from './sidebar.module.scss';
import { weatherAPI } from '../../core/services/WeatherSerices';
import { formatDate } from '../../core/utils/utils';

const Sidebar = () => {
	const { data: oneDay, isLoading } = weatherAPI.useFetchOneDayQuery('London');
	const [date, setDate] = useState('');
	// const { data: oneCall } = oneDay
	// 	? weatherAPI.useFetchOneCallApiQuery(oneDay.coord)
	// 	: weatherAPI.useFetchOneCallApiQuery({ lat: 0, lon: 0 });
	if (oneDay) {
		formatDate(oneDay.dt);
	}

	return (
		<div className={style.sidebar}>
			<div className={style.search}>
				<label className={style.search__field}>
					<i className="fa fa-search"></i>
					<input type="text" />
				</label>
				<button className={style.search__btn}>
					<i className="fa fa-home"></i>
				</button>
			</div>
			{oneDay && (
				<div key={oneDay.id}>
					<img
						className={style.icon}
						src={`http://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
						alt=""
					/>
					<h1 className={style.title}>{Math.floor(oneDay.main.temp - 273)}°C</h1>
					<h3 className={style.city}>
						{oneDay.name}, {oneDay.sys.country}
					</h3>
					<p className={style.date}>
						{date}, <span className={style.date__time}>13:17</span>
					</p>
					<div className={style.clouds}>
						<p className={style.clouds__visible}>Clouds {oneDay.clouds.all}%</p>
						<p className={style.clouds__status}>{oneDay.weather[0].description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
