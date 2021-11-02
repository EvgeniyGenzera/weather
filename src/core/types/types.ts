export interface IWeather {
	name: string;
	clouds: {
		all: number;
	};
	id: number;
	list: IWeatherDay[];
	sys: {
		id: number;
		country: string;
	};
	dt: number;
	main: {
		temp: number;
	};
	coord: ICoord;
	weather: Array<IWeatherIcons>;
}

export interface IWeatherDay {
	dt: number;
	main: {
		temp_max: number;
		temp_min: number;
	};
}
interface IWeatherIcons {
	description: string;
	icon: string;
	id: number;
	main: string;
}

export interface ICoord {
	lon: number;
	lat: number;
}
