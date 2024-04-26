import React, { useState } from "react";
import classes from './ProductsPrices.module.scss';
import { Button, message, Steps } from 'antd';
import { InfoCircleOutlined } from "@ant-design/icons";
import ProductInformation from "./ProductInformation/ProductInformation";

const ProductsPrices: React.FC = () => {

    // console.log(flag)

    const [current, setCurrent] = useState(0);

    const steps = [
        {
            title: 'Информация о товаре',
            content: <ProductInformation setCurrent={setCurrent}/>,
        },
        {
            title: 'Характеристики',
            content: 'Second-content',
        },
        {
            title: 'Медиа',
            content: 'Last-content',
        },
        {
            title: 'Предварительный просмотр',
            content: 'Last2-content',
        },
    ];


    // const next = () => {
    //     setCurrent(current + 1);
    // };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (

        <div className={classes.conteiner}>
            <div className={classes.flexConteiner}>

                <div className={classes.firstCol}>
                    <h3>Добавление товара</h3>

                    <div className={classes.flexItem}>
                        <div>
                            <Steps size="small" className={classes.flexStep} current={current} items={items} />
                            <div>{steps[current].content}</div>
                            <div className={classes.button} style={{ marginTop: 24 }}>
                                {/* {current < steps.length - 1 && (
                                    !flag ?
                                    <Button disabled type="primary" onClick={() => next()}>
                                        Далее
                                    </Button> 
                                    : 
                                    <Button type="primary" onClick={() => next()}>
                                        Далее
                                    </Button> 
                                )} */}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                        Завершить
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                        Назад
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.secdCol}>
                    <div>
                        <div className={classes.contentR}>
                            <div className={classes.flexReit}>
                                <p>Контент-рейтинг</p>
                                <p>0 баллов <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></p>
                            </div>
                            <button>Подробнее о рейтинге</button>
                        </div>
                        <div className={classes.contentH}>
                            <h3><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> Помощь</h3>

                            <Button className={classes.buttonLink} type="link">Как создать один вариант</Button>
                            <Button className={classes.buttonLink} type="link">Как создать несколько вариантов</Button>

                            <p>Подробную информацию по заведению товаров вы сможете найти в соответствующем разделе справочного центра</p>
                            
                            <Button className={classes.buttonLink} type="link">Перейти в базу знаний</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPrices