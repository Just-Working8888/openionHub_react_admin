import { FC } from "react";
import classes from './FormBlock.module.scss';


const Step2: FC = () =>{


    return (
        <div>
            <h1 className={classes.form_title}>Проверяем ваши данные</h1>
            <p className={classes.form_text_status}>Обычно это занимает не больше 15 минут. Результат проверки покажем здесь и пришлём на почту.</p>
        </div>
    )
}

export default Step2
