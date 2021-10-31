import { configureStore, combineReducers } from '@reduxjs/toolkit';
import whetherReducer from './reducers/WhetherSlice';

const rootReducer = combineReducers({
	whetherReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
