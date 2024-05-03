import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { CancelToken } from "axios";
import { api } from "../../api";
import { Quiz } from "store/models/IQuetion";


export const fetchQuetion = createAsyncThunk<Quiz[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchQuetion',
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await api.getQuetions();
            return response.data as Quiz[];
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchQuetionById = createAsyncThunk<Quiz, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchQuetionById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.getQuetionById(id);
            return response.data as Quiz;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchDeleteQuetionById = createAsyncThunk<Quiz, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'quetion/fetchDeleteQuetionById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.deleteQuetionById(id);
            return response.data as Quiz;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);

export const FetchCreateQuiz = createAsyncThunk(
    'quetion/createQuiz',
    async (quetion: Quiz, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.postQuetion(quetion, source.token);
        return response.data;
    }
);