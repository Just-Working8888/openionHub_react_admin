import { CancelToken } from 'axios';
import { instance } from './index'
import { Quiz } from 'store/models/IQuetion';
import { Categories } from 'store/models/ICategories';

const getCategories = (
    sourceToken?: CancelToken
) =>
    instance.get<Categories[]>(
        `category`,
        { cancelToken: sourceToken }
    );

const getCategoryById = (id?: number, sourceToken?: CancelToken) =>
    instance.get<Categories>(`/category/${id}`, {
        cancelToken: sourceToken,
    });
const deleteCategoryById = (id?: number, sourceToken?: CancelToken) =>
    instance.delete(`/category/${id}`, {
        cancelToken: sourceToken,
    });


const endpoints = {
    getCategories,
    getCategoryById,
    deleteCategoryById,
};
export default endpoints;