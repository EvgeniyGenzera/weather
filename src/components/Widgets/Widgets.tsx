import React from 'react';
import { useAppSelector } from '../../core/hooks/redux';
import Humidity from './widget/Humidity';
import SunInfo from './widget/SunInfo';
import Temperature from './widget/Temperature';
import Uvi from './widget/Uvi';
import Visibility from './widget/Visibility';
import WindStatus from './widget/WindStatus';
import style from './Widgets.module.scss';

const Widgets = () => {
	return (
		<div className={style.widgets}>
			<Uvi />
			<WindStatus />
			<SunInfo />
			<Humidity />
			<Visibility />
			<Temperature />
		</div>
	);
};

export default Widgets;
