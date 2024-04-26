import { FC } from "react";
import classes from './FormBlock.module.scss'


const Step4: FC = () => {


    return (
        <div>
            <div
                className={classes.form_item_row}
            >
                <h1 className={classes.form_title}>Загрузите товары</h1>

                <a href="#">О загрузке товаров</a>
            </div>

            <div className={classes.form_download_row}>
                <div className={classes.form_download_item}>
                    <h2 className={classes.form_download_item_title}>Вручную</h2>
                    <p className={classes.form_download_item_text}>Создайте товары по одному</p>
                </div>
                <div className={classes.form_download_item}>
                    <h2 className={classes.form_download_item_title}>Через шаблон BigBee</h2>
                    <p className={classes.form_download_item_text}>Добавьте сразу много товаров</p>
                </div>
                <div className={classes.form_download_item}>
                    <h2 className={classes.form_download_item_title}>С других площадок</h2>
                    <p className={classes.form_download_item_text}>Перенесите в пару
кликов через
шаблон</p>
                </div>
                <div className={classes.form_download_item}>
                    <h2 className={classes.form_download_item_title}>Через Seller API</h2>
                    <p className={classes.form_download_item_text}>Подключите свою систему к личному кабинету BigBee</p>
                </div>
            </div>

        </div>
    )
}

export default Step4
