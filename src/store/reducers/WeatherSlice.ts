import { createSlice } from '@reduxjs/toolkit';
import { IWeather } from '../../core/types/types';

interface WeatherState {
	weather: object;
	isLoading: boolean;
}

const initialState: WeatherState = {
	weather: {},
	isLoading: false,
};

export const weatherSlice = createSlice({
	name: 'whether',
	initialState,
	reducers: {},
});

export default weatherSlice.reducer;
