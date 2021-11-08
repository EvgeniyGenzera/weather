import { useState, FC } from 'react';
import { useAppSelector } from '../../core/hooks/redux';
import Frame from '../WhetherFrame/Frame';
import style from './Header.module.scss';
import Slider from 'react-slick';
import { sliderSettings as settings } from '../../core/utils/utils';

export interface headerProps {
	setSidebarOpened: (value: boolean) => void;
	sidebarOpened: boolean;
}

const Header: FC<headerProps> = ({ sidebarOpened, setSidebarOpened }) => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const [view, setView] = useState(true);
	const [tempType, setTempType] = useState(true);
	return (
		<div className={style.header}>
			<div className={style.btns}>
				<div
					className={sidebarOpened ? `${style.activebrgr} ${style.burger}` : `${style.burger}`}
					onClick={() => setSidebarOpened(!sidebarOpened)}
				>
					<div className={style.dash}></div>
					<div className={style.dash}></div>
					<div className={style.dash}></div>
					<div className={style.dash}></div>
				</div>
				<div className={style.btns__view}>
					<p className={view ? `${style.activeType}` : ' '} onClick={() => setView(true)}>
						Today
					</p>
					<p className={!view ? `${style.activeType}` : ' '} onClick={() => setView(false)}>
						Week
					</p>
				</div>
				<div className={style.btns__temperature}>
					<p className={tempType ? `${style.activeTemp}` : ' '} onClick={() => setTempType(true)}>
						°C
					</p>
					<p className={!tempType ? `${style.activeTemp}` : ' '} onClick={() => setTempType(false)}>
						°F
					</p>
				</div>
			</div>
			<div className={style.header__content}>
				{weather && view && (
					<Slider {...settings}>
						{weather.hourly.map(hour => (
							<Frame hourly={hour} key={hour.dt} tempType={tempType} timezone={weather.timezone} />
						))}
					</Slider>
				)}
				{weather && !view && (
					<Slider {...settings}>
						{weather.daily.map(day => (
							<Frame daily={day} key={day.dt} tempType={tempType} timezone={weather.timezone} />
						))}
					</Slider>
				)}
			</div>
		</div>
	);
};

export default Header;
