import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const formatDate = (date, zoneTime) => {
	dayjs.extend(timezone);
	dayjs.extend(utc);
	if (date.current) {
		return dayjs(new Date(date.current.dt * 1000))
			.tz(zoneTime)
			.format('dddd,H:mm');
	}
	return dayjs(new Date(date * 1000))
		.tz(zoneTime)
		.format('dddd,H:mm');
};

export const humudityDescription = humidity => {
	return !humidity
		? 'No data'
		: humidity > 70
		? 'Poor high'
		: humidity > 60 && humidity <= 70
		? 'Fair humidity'
		: humidity > 30 && humidity <= 60
		? 'Maintain'
		: humidity > 25 && humidity <= 30
		? 'Fair humidity'
		: 'Poor low';
};

export const sunInformation = time => {
	return !time ? new Date() : new Date(time * 1000).getHours() + ':' + new Date(time * 1000).getMinutes();
};
export const uviWidgetPaint = uvi => {
	return {
		offset: uvi
			? null
			: uvi === 0
			? 0
			: uvi < 1
			? 5
			: uvi < 3
			? 15
			: uvi <= 4
			? 23
			: uvi <= 6
			? 33
			: uvi <= 7
			? 50
			: uvi <= 8
			? 60
			: uvi <= 9
			? 70
			: uvi <= 10
			? 85
			: 100,
	};
};
export const uviWidgetCoord = uvi => {
	return uvi === 0 ? 2 : uvi > 10 ? 1 : 0;
};

export const toCelcius = temp => {
	return Math.floor(temp - 273);
};

export const toFahrenheit = temp => {
	return (Math.floor(temp - 273) * 9) / 5 + 32;
};

export const sliderSettings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
