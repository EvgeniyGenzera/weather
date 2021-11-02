import React from 'react';
import style from './Frame.module.scss';

const Frame = () => {
	return (
		<div className={style.frame}>
			<p className={style.title}>Tue</p>
			<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
			<p className={style.temperature}>5 C</p>
		</div>
	);
};

export default Frame;
