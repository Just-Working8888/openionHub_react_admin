import React, { useEffect, useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import profilte from '../../assets/icon/Group — копия.svg'
import messege from '../../assets/icon/Vector — копия.svg'
import quetion from '../../assets/icon/Vector.svg'
import edu from '../../assets/icon/Group.svg'
import logo from '../../assets/icon/logo.svg'
import classes from './Header.module.scss'
import './header.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const menuItems: { [key: string]: string } = {
    '/': '1',
    '/productsPrices': '2',
    '/finance': '3',
    '/analytics': '4',
    '/promotions': '5',
    '/reviews': '6',
};
const HeaderComponent: React.FC = () => {
    const location = useLocation();
    const [current, setCurrent] = useState<string>('');

    useEffect(() => {
        const pathname = location.pathname;
        setCurrent(menuItems[pathname] || '');
    }, [location]);

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };


    return (
        <>
            <header className={classes.header}>
                <div className={classes.header_logo}>
                    <img src={logo} alt="" />
                    <p>Seller</p>
                </div>

                <div className={classes.header_actions}>
                    <div className='headerSelect'>
                        <Select placeholder='Мой магазин' style={{ border: '0px solid #0000000' }} options={[{ value: 'sample', label: <span>sample</span> }]} />
                    </div>
                    <img src={profilte} alt="" />
                    <img src={messege} alt="" />
                    <img src={quetion} alt="" />
                    <img src={edu} alt="" />
                    {/* Insert more icons or components for user account actions */}
                </div>
            </header>
            <div className='navbar'>
                <Menu selectedKeys={[current]} onClick={handleClick} mode="horizontal">
                    <Menu.Item key="1">
                        <Link to={'/'}>
                            Главная
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/productsPrices'}>
                            Товары и Цены
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={'/finance'}>
                            Финансы
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={'/analytics'}>
                            Аналитика
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={'/promotions'}>
                            Продвижения
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to={'/reviews'}>
                            Отзывы
                        </Link>
                    </Menu.Item>
                    {/* ...other menu items */}
                </Menu>
            </div>

        </>

    );
};

export default HeaderComponent;
