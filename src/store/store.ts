import { weatherAPI } from '../core/services/WeatherSerices';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './reducers/WeatherSlice';

const rootReducer = combineReducers({
	weatherReducer,
	[weatherAPI.reducerPath]: weatherAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherAPI.middleware),
	});
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
