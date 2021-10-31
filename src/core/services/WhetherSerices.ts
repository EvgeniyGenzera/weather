import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const whetherAPI = createApi({
	reducerPath: 'whetherAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
	endpoints: () => ({
		fetchOneDay: build.query({
			query: () => {
				url: '';
			},
		}),
	}),
});
