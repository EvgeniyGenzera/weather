import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoord, IWeather } from '../../core/types/types';

interface WeatherState {
	weather: IWeather;
	isLoading: boolean;
	placeRequest: ICoord;
	currentName: string;
}

const initialState: WeatherState = {
	weather: {
		current: {
			clouds: 0,
			dew_point: 0,
			dt: 0,
			feels_like: 0,
			humidity: 0,
			pressure: 0,
			sunrise: 0,
			sunset: 0,
			temp: 0,
			uvi: 0,
			visibility: 0,
			weather: [],
			wind_deg: 0,
			wind_gust: 0,
			wind_speed: 0,
		},
		daily: [],
		hourly: [],
	},
	currentName: 'Kiev, UA',
	placeRequest: {
		lat: 50.4333,
		lng: 30.5167,
	},
	isLoading: false,
};

export const weatherSlice = createSlice({
	name: 'whether',
	initialState,
	reducers: {
		setPlaceRequest(state, action: PayloadAction<ICoord>) {
			state.placeRequest = action.payload;
		},
		setWeather(state, action: PayloadAction<IWeather>) {
			state.weather = action.payload;
		},
		setCurrentName(state, action: PayloadAction<string>) {
			state.currentName = action.payload;
		},
	},
});
export const { setPlaceRequest, setWeather, setCurrentName } = weatherSlice.actions;
export default weatherSlice.reducer;
