import { Spin } from "antd";
import { FC, useEffect } from "react";
import logo from '../../assets/icon/logo.svg'
import { useNavigate, useParams } from "react-router-dom";
import { getCookie, setCookie } from "helpers/cookies";
const ParamsAuth: FC = () => {
    const { token, id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // Проверяем, есть ли id и token
        if (id && token) {
            // Если оба параметра присутствуют, устанавливаем куки
            setCookie('user_id', id, 30);
            setCookie('access_token', token, 30);

            // Перенаправляем пользователя на главную страницу после установки куки
            navigate('/'); // Изменено на путь к главной странице
        } else {
            // Если один из параметров отсутствует, перенаправляем на страницу входа
            navigate('/');
        }
    }, [id, token, navigate]); // Добавляем `navigate` в массив зависимостей


    return (
        <>
            <Spin spinning={true} size="large" delay={500}>
                <div style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img width='40%' src={logo} alt="" />
                </div >
            </Spin >
        </>

    )
}
export default ParamsAuth