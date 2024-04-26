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
  }
const Form2: FC<Props> = ({ setSelectForm, formData, setFormData }) => {

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
                <h1 className={classes.form_title}>Проверьте данные</h1>
                <p className={classes.form_step}>Шаг 2/4</p>

                <Form.Item<FieldType>
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                     onChange={(e) => {

                        setFormData({
                          ...formData,
                          okpoCode: e?.target?.value
                        })
                      }}
                    placeholder="код ОКПО" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>


                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                     onChange={(e) => {

                        setFormData({
                          ...formData,
                          surname: e?.target?.value
                        })
                      }}
                    placeholder="Фамилия" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>

                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                     onChange={(e) => {

                        setFormData({
                          ...formData,
                          name: e?.target?.value
                        })
                      }}
                    placeholder="Имя" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>

                <Form.Item >
                    <Button
                        onClick={() => {
                            setSelectForm(1)
                        }}
                        style={{ color: 'black', background: '#F4F2F2', marginRight: 20 }} type="primary" htmlType="submit">
                        Назад
                    </Button>
                    <Button
                        onClick={() => {
                            if(formData.okpoCode && formData.surname && formData.name){
                                setSelectForm(3)
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

export default Form2;
