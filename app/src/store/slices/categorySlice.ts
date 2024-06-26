
import { createSlice } from '@reduxjs/toolkit';
import { Categories } from 'store/models/ICategories';
import { fetchCategories, fetchCategoriesById } from 'store/reducers/categoryReduser';
import { fetchQuetion, fetchQuetionById } from 'store/reducers/quetionReduser';

interface CategoryState {
    data: Categories[];
    singleProduct: Categories | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: CategoryState = {
    data: [],
    status: 'idle',
    singleProduct: null,
    error: null,
    laoding: false
};


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
                state.laoding = false
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch cart items' : 'Failed to fetch cart items';
                state.laoding = false
            })
            .addCase(fetchCategoriesById.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchCategoriesById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProduct = action.payload;
                state.laoding = false
            })
            .addCase(fetchCategoriesById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch product' : 'Failed to fetch product';
                state.laoding = false
            })

    },
});

export const { } = categorySlice.actions;
export const selectProducts = (state: { products: CategoryState }) => state.products;

export default categorySlice.reducer;
