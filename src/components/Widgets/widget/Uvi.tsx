import { useAppSelector } from '../../../core/hooks/redux';
import { uviWidgetCoord, uviWidgetPaint } from '../../../core/utils/utils';
import style from '../Widgets.module.scss';
const Uvi = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);

	return (
		<div className={style.frame}>
			<h3>UV index</h3>
			{weather && (
				<div className={style.frame__uv}>
					<div className={style.gradient}>
						<svg id="half-circle" viewBox="0 0 106 57" width="150">
							<defs>
								<linearGradient id="orange-to-pink" x1="1" x2="0" y1="0" y2={`${uviWidgetCoord(weather.current.uvi)}`}>
									<stop offset={`${uviWidgetPaint(weather.current.uvi)}%`} stopColor="darkblue" />
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

export default Uvi;
