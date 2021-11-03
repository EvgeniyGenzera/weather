export interface IWeather {
	current: ICurrentWeather;
	daily: IDailyWeather[];
	hourly: IHourlyWeather[];
}
export interface ICurrentWeather {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: number;
	humidity: number;
	pressure: number;
	sunrise: number;
	sunset: number;
	temp: number;
	uvi: number;
	visibility: number;
	weather: IWeatherIcons[];
	wind_deg: number;
	wind_gust: number;
	wind_speed: number;
}
export interface IDailyWeather {
	clouds: number;
	dew_point: number;
	dt: number;
	humidity: number;
	moon_phase: number;
	pop: number;
	pressure: number;
	rain: number;
	sunrise: number;
	sunset: number;
	temp: ITempWeather;
	uvi: number;
	weather: IWeatherIcons[];
	wind_deg: number;
	wind_gust: number;
	wind_speed: number;
}
export interface ITempWeather {
	day: number;
	eve: number;
	max: number;
	min: number;
	morn: number;
	night: number;
}
export interface IHourlyWeather {
	dt: number;
	temp: ITempWeather;
	weather: IWeatherIcons[];
}
interface IWeatherIcons {
	description: string;
	icon: string;
	id: number;
	main: string;
}

export interface ICoord {
	lng: number;
	lat: number;
}
