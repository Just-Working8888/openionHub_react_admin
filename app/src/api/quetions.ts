import { CancelToken } from 'axios';
import { instance } from './index'
import { Quiz } from 'store/models/IQuetion';

const getQuetions = (
    sourceToken?: CancelToken
) =>
    instance.get<Quiz[]>(
        `quetions`,
        { cancelToken: sourceToken }
    );



const getQuetionById = (id?: number, sourceToken?: CancelToken) =>
    instance.get<Quiz>(`/quetions/${id}`, {
        cancelToken: sourceToken,
    });

const postQuetion = (quetion: Quiz, sourceToken?: CancelToken) =>
    instance.post<Quiz>(`/quetions/`, quetion, {
        cancelToken: sourceToken,
    });
const deleteQuetionById = (id?: number, sourceToken?: CancelToken) =>
    instance.delete(`/quetions/${id}`, {
        cancelToken: sourceToken,
    });


const endpoints = {
    getQuetions,
    getQuetionById,
    deleteQuetionById,
    postQuetion
};
export default endpoints;