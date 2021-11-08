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
