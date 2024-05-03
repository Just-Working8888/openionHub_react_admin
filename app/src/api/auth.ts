import { CancelToken } from 'axios';
import { instance } from './index'


const login = (email: string, password: string, sourceToken?: CancelToken) =>
    instance.post('/auth/login/', { email, password }, { cancelToken: sourceToken });

const register = (username: string, email: string, password: string, confirm_password: string, sourceToken?: CancelToken) =>
    instance.post('/auth/registration', { username, password, email, confirm_password }, { cancelToken: sourceToken });

const endpoints = {
    login,
    register
};
export default endpoints;
