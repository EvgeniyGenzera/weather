import { createSlice } from '@reduxjs/toolkit';
import { IWhether } from '../../core/types/types';

interface WhetherState {
	whether: object;
}

const initialState: WhetherState = {
	whether: {},
};

export const whetherSlice = createSlice({
	name: 'whether',
	initialState,
	reducers: {},
});

export default whetherSlice.reducer;
