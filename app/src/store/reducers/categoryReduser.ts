import { createAsyncThunk } from "@reduxjs/toolkit";
import { CancelToken } from "axios";
import { api } from "../../api";
import { Quiz } from "store/models/IQuetion";
import { Categories } from "store/models/ICategories";


export const fetchCategories = createAsyncThunk<Categories[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchCategories',
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await api.getCategories();
            return response.data as Categories[];
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchCategoriesById = createAsyncThunk<Categories, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchCategoriesById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.getCategoryById(id);
            return response.data as Categories;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchDeleteQuetionById = createAsyncThunk<Categories, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchDeleteQuetionById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.deleteCategoryById(id);
            return response.data as Categories;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
