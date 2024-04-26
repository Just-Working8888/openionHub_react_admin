import {FC} from 'react';
import classes from './RaitingBlock.module.scss';
import arrowIcon from './arrow-down.svg';

const RaitingBlock: FC = () =>{

    return(
        <div className={classes.raiting}>
            <div className={classes.raiting_col}>
                <div className={classes.raiting_title_block}>
                    <h2 className={classes.raiting_title}>Рейтинги продавца</h2>
                    <img src={arrowIcon} alt="" />
                </div>

                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Доставлено вовремя</p>
                    <div className={classes.raiting_item_value}>--_--</div>
                </div>
                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Процент отмен по FBS</p>
                    <div className={classes.raiting_item_value}>--_--</div>
                </div>
                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Просрочена отгрузка по FBS</p>
                    <div className={classes.raiting_item_value}>--_--</div>
                </div>
            </div>

            <div className={classes.raiting_col}>
                <div className={classes.raiting_title_block}>
                    <h2 className={classes.raiting_title}>Коммуникации</h2>
                    <img src={arrowIcon} alt="" />
                </div>

                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Сообщения</p>
                    <div className={classes.raiting_item_value}>0</div>
                </div>
                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Отзывы</p>
                    <div className={classes.raiting_item_value}>0</div>
                </div>
                <div className={classes.raiting_item}>
                    <p className={classes.raiting_item_name}>Вопросы</p>
                    <div className={classes.raiting_item_value}>0</div>
                </div>
            </div>
        </div>
    )
}

export default RaitingBlock;
