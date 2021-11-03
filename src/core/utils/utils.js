export const formatDate = date => {
	const dt = new Date(date * 1000);
	const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return `${week[dt.getDay() - 1]}, ${dt.getUTCHours()}:${dt.getUTCMinutes()}`;
};
