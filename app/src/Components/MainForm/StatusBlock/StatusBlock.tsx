import { FC } from "react";
import classes from './StatusBlock.module.scss'
import completeIcon from './Vector 3 (Stroke).svg';

type Props = {
    status: number,
    setStatus: any,
}

const StatusBlock: FC<Props> = ({status, setStatus}) =>{

    return(
        <div className={classes.status}>
                <h1 className={classes.status_title}>Добро пожаловать в BigBee Seller</h1>

                <p className={
                    status == 1
                    ? `${classes.status_item} ${classes.status_item_active}`
                    : classes.status_item
                }>
                    <span>{
                        status > 1
                        ? <img src={completeIcon} alt="" />
                        : 1
                        }</span>
                    Укажите реквизиты
                </p>
                <p className={ status == 2
                    ? `${classes.status_item} ${classes.status_item_active}`
                    : classes.status_item
                }>
                    <span>2</span>
                    Дождитесь проверки
                </p>
                <p className={ status == 3
                    ? `${classes.status_item} ${classes.status_item_active}`
                    : classes.status_item
                }>
                    <span>3</span>
                    Заключите договор
                </p>
                <p className={ status == 4
                    ? `${classes.status_item} ${classes.status_item_active}`
                    : classes.status_item
                }>
                    <span>4</span>
                    Загрузите товары
                </p>

        </div>
    )
}


export default StatusBlock;
