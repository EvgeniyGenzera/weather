import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICoord, IWeather } from '../types/types';
export const weatherAPI = createApi({
	reducerPath: 'weatherAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
	endpoints: build => ({
		fetchOneDay: build.query<IWeather, string>({
			query: (city = 'London') => ({
				url: `weather?q=${city}&appid=6bf7ff90ae50cf1d91e8c6b3deef0bb8`,
			}),
		}),
		fetchOneWeek: build.query<IWeather, string>({
			query: (city = 'London') => ({
				url: `forecast?q=${city}&appid=6bf7ff90ae50cf1d91e8c6b3deef0bb8`,
			}),
		}),
		fetchOneCallApi: build.query<IWeather, ICoord>({
			query: arg => ({
				url: `onecall?lat=${arg.lat}&lon=${arg.lon}&exclude=current&appid=6bf7ff90ae50cf1d91e8c6b3deef0bb8`,
			}),
		}),
	}),
});
