import { FC } from "react";
import { Button, Checkbox, Form, Input, Select } from 'antd';
import classes from './FormBlock.module.scss';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

type Props = {
    setSelectForm: any,
    formData: any,
    setFormData: any,
    setStatus: any,
}


const Form4: FC<Props> = ({ setSelectForm, formData, setFormData, setStatus }) => {

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 450 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1 className={classes.form_title}>Добавьте банковские реквизиты</h1>
                <p className={classes.form_step}>Шаг 4/4</p>



                <Form.Item<FieldType>
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                bankName: e?.target?.value
                            })
                        }}
                        placeholder="Наименование банка" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>


                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                invoice: e?.target?.value
                            })
                        }}
                        placeholder="Расчетный счёт" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>

                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                bik: e?.target?.value
                            })
                        }}
                        placeholder="БИК" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>

                <Form.Item valuePropName="checked">
                    <Checkbox
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                privacyTerms: e?.target?.checked
                            })
                        }}
                        style={{ width: 450 }}><p className={classes.form_text}>В соответствии с Условиями обработки персональных данных я (Иванов Иван Иванович) даю ООО «Интернет» согласие на распространение моих персональных данных но сайте nitps://www.bigbee.kg, в том числе на любых его страницах и поддоменах (“Bigbee”), с целью доведения до потребителей информации обо мне как о продавце, на следующих условиях. </p></Checkbox>
                </Form.Item>
                <a href="#" style={{ margin: '20px 0', display: 'inline-block' }}>Посмотреть согласие</a>
                <Form.Item >
                    <Button
                        onClick={() => {
                            setSelectForm(3)
                        }}
                        style={{ color: 'black', background: '#F4F2F2', marginRight: 20 }} type="primary" htmlType="submit">
                        Назад
                    </Button>
                    <Button
                        onClick={() => {
                            if (formData.bankName
                                && formData.invoice
                                && formData.bik
                                && formData.privacyTerms
                            ) {
                                setSelectForm(5)
                                setStatus(2)
                                setTimeout(() => {
                                    setStatus(3)
                                }, 5000);
                            }
                        }}
                        style={{ color: 'black', background: '#F5C423' }} type="primary" htmlType="submit">
                        Далее
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Form4;
