import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message } from 'antd';
import classes from './Login.module.scss';
import { useAppDispatch } from 'store/hook';
import { loginAsync } from 'store/reducers/authRedusers';
import { setCookie } from 'helpers/cookies';
import {Link} from 'react-router-dom';
import logo from "../../assets/icon/logo.svg"
import Logo from 'Components/Logo/Logo';


const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        dispatch(loginAsync({ email: values.email, password: values.password }));
        try {
            setLoading(true);
            const response = await dispatch(loginAsync({ email: values.email, password: values.password }));
            navigate('/');
            message.success('Авторизация успешна!');
            setCookie('userId', response.payload.userId, 30)
            setCookie('token', response.payload.token, 30);
            
        } catch (error) {
            message.error('Ошибка входа. Пожалуйста, проверьте свои учетные данные.');
        }finally{
            setLoading(false);
        }
    };


    return (
        <section className={classes.auth_reg}>
            <div className={classes.form}>

                <div className={classes.icon}>
               <Logo/>
                </div>

                <div className={classes.title}>
                    <h2>Вход</h2>
                    <p>Войдите в свою учетную запись, чтобы продолжить</p>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input className={classes.input} placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            className={classes.input}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={classes.formBlock}>
                            <div>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Запомнить меня</Checkbox>
                                </Form.Item>
                            </div>

                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading} type="primary" htmlType="submit" className={classes.button} block>
                            Вход
                        </Button>
                        Или <a href="#/"> <Link to={'/signUp'}>зарегистрируйтесь сейчас!</Link></a>
                    </Form.Item>
                </Form>
            </div>
        </section>

    );
};

export default Login;