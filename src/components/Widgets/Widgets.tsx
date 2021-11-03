import React from 'react';
import style from './Widgets.module.scss';

const Widgets = () => {
	return (
		<div className={style.widgets}>
			<div className={style.frame}>
				<div className={style.frame__uv}>1</div>
			</div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
		</div>
	);
};

export default Widgets;
