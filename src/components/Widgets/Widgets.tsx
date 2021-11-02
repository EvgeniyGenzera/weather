import React from 'react';
import style from './Widgets.module.scss';

const Widgets = () => {
	return (
		<div className={style.widgets}>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
			<div className={style.frame}></div>
		</div>
	);
};

export default Widgets;
