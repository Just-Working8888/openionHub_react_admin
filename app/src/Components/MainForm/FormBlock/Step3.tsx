import { FC } from "react";
import classes from './FormBlock.module.scss';
import { Button } from "antd";

type Props = {
    setStatus: any,
}

const Step3: FC<Props> = ({setStatus}) => {


    return (
        <div>
            <div
            className={classes.form_item_row}
            >
   <h1 className={classes.form_title}>Заключение Договора</h1>

   <a href="#">О Договоре</a>
            </div>

            <p className={classes.form_text_status}>С реквизитами всё в порядке, поэтому мы выслали вам на электронную почту и в «Чаты» письмо с офертой - нашим согласием заключить с вами
Договор. Договор вступит в силу, когда вы начнете работу на площадке, а датой его начала будем считать дату отправки этого письма.</p>

<p className={classes.form_text_status}>С условиями Договора можно ознакомиться по ссылке ниже.</p>
        <a href="#">Посмотреть условия Договора</a>
      <Button
      type="primary"
      style={{display: 'block', color: '#00000', marginTop: 20}}
      onClick={()=>{
        setStatus(4)
      }}
      >
      К загрузке товаров
      </Button>
        </div>
    )
}

export default Step3
