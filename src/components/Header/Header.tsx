import React, { useState } from 'react';
import { useAppSelector } from '../../core/hooks/redux';
import Frame from '../WhetherFrame/Frame';
import style from './Header.module.scss';
import Slider from 'react-slick';

const Header = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
	};
	console.log(weather);
	const [view, setView] = useState(true);
	const [tempType, setTempType] = useState(true);
	return (
		<div className={style.header}>
			<div className={style.btns}>
				<div className={style.btns__view}>
					<p onClick={() => setView(true)}>Today</p>
					<p onClick={() => setView(false)}>Week</p>
				</div>
				<div className={style.btns__temperature}>
					<p onClick={() => setTempType(true)}>°C</p>
					<p onClick={() => setTempType(false)}>°F</p>
				</div>
			</div>
			<div className={style.header__content}>
				{weather && view && (
					<Slider {...settings}>
						{weather.hourly.map(hour => (
							<Frame hourly={hour} key={hour.dt} tempType={tempType} />
						))}
					</Slider>
				)}
				{weather && !view && (
					<Slider {...settings}>
						{weather.daily.map(day => (
							<Frame daily={day} key={day.dt} tempType={tempType} />
						))}
					</Slider>
				)}
			</div>
		</div>
	);
};

export default Header;
