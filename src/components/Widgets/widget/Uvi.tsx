import React, { useMemo } from 'react';
import { useAppSelector } from '../../../core/hooks/redux';
import style from '../Widgets.module.scss';
const uvi = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	let coordY = useMemo(
		() => (weather && weather.current.uvi === 0 ? 2 : weather && weather.current.uvi > 10 ? 1 : 0),
		[weather]
	);
	const offset = useMemo(
		() =>
			!weather
				? null
				: weather.current.uvi === 0
				? 0
				: weather.current.uvi < 1
				? 5
				: weather.current.uvi < 3
				? 15
				: weather.current.uvi <= 4
				? 23
				: weather.current.uvi <= 6
				? 33
				: weather.current.uvi <= 7
				? 50
				: weather.current.uvi <= 8
				? 60
				: weather.current.uvi <= 9
				? 70
				: weather.current.uvi <= 10
				? 85
				: 100,
		[weather]
	);

	return (
		<div className={style.frame}>
			<h3>UV index</h3>
			{weather && (
				<div className={style.frame__uv}>
					<div className={style.gradient}>
						<svg id="half-circle" viewBox="0 0 106 57" width="150">
							<defs>
								<linearGradient id="orange-to-pink" x1="1" x2="0" y1="0" y2={`${coordY}`}>
									<stop offset={`${offset}%`} stopColor="darkblue" />
									<stop offset="0" stopColor="#f8f8ff" />
								</linearGradient>
							</defs>
							<path d="M101 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
						</svg>
						<span className={style.firstIndex}>1</span>
						<span className={style.secondIndex}>6</span>
						<span className={style.thirdIndex}>9</span>
						<span className={style.lastIndex}>12</span>
						<span className={style.mainIndex}>{weather.current.uvi}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default uvi;
