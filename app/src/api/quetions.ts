import { CancelToken } from 'axios';
import { instance } from './index'
import { Question, Quiz, QuizDto } from 'store/models/IQuetion';

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

const postQuetion = (quetion: FormData, sourceToken?: CancelToken) =>
    instance.post(`/quetions/`, quetion, {
        cancelToken: sourceToken,
    });
const postQuizQuetion = (quetion: FormData, sourceToken?: CancelToken) =>
    instance.post<Question>(`/quetion/`, quetion, {
        cancelToken: sourceToken,
    });

const patchQuetionById = (id: number, data: QuizDto, sourceToken?: CancelToken) =>
    instance.patch<Quiz>(`/quetions/${id}`, data, {
        cancelToken: sourceToken,
    });
const deleteQuetionById = (id?: number, sourceToken?: CancelToken) =>
    instance.delete(`/quetions/${id}`, {
        cancelToken: sourceToken,
    });


const endpoints = {
    postQuizQuetion,
    patchQuetionById,
    getQuetions,
    getQuetionById,
    deleteQuetionById,
    postQuetion
};
export default endpoints;