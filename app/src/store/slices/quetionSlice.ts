
import { createSlice } from '@reduxjs/toolkit';
import { Quiz } from 'store/models/IQuetion';
import { fetchQuetion, fetchQuetionById } from 'store/reducers/quetionReduser';

interface QuetionState {
    data: Quiz[];
    singleProduct: Quiz | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: QuetionState = {
    data: [],
    status: 'idle',
    singleProduct: null,
    error: null,
    laoding: false
};


const quetionSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuetion.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchQuetion.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
                state.laoding = false
            })
            .addCase(fetchQuetion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch cart items' : 'Failed to fetch cart items';
                state.laoding = false
            })
            .addCase(fetchQuetionById.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchQuetionById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProduct = action.payload;
                state.laoding = false
            })
            .addCase(fetchQuetionById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch product' : 'Failed to fetch product';
                state.laoding = false
            })

    },
});

export const { } = quetionSlice.actions;
export const selectProducts = (state: { products: QuetionState }) => state.products;

export default quetionSlice.reducer;
