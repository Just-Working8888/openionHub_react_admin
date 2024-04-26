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



const Form3: FC<Props> = ({ setSelectForm, formData, setFormData }) => {

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
                <h1 className={classes.form_title}>Добавьте адрес регистрации</h1>
                <p className={classes.form_step}>Шаг 3/4</p>

                <Form.Item<FieldType>

                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Select
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                cityId: e
                            })
                        }}
                        style={{ width: 450, height: 60, backgroundColor: 'rgba(40, 40, 40, 0.05)' }} defaultValue={'0'}>
                        <Select.Option disabled value="0">Выберите город</Select.Option>
                        <Select.Option value="1">г. Ош</Select.Option>
                        <Select.Option value="2">г. Бишкек</Select.Option>
                        <Select.Option value="3">г. Джаливуд</Select.Option>
                        <Select.Option value="4">г. Баткен city</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                cityName: e?.target?.value
                            })
                        }}
                        placeholder="Город" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>


                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                street: e?.target?.value
                            })
                        }}
                        placeholder="Улица" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>


                <div className={classes.form_item_row}>
                    <Form.Item<FieldType>


                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            onChange={(e) => {

                                setFormData({
                                    ...formData,
                                    house: e?.target?.value
                                })
                            }}
                            placeholder="Дом" style={{ width: 120, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                    </Form.Item>
                    <Form.Item<FieldType>


                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            onChange={(e) => {

                                setFormData({
                                    ...formData,
                                    building: e?.target?.value
                                })
                            }}
                            placeholder="Корпус" style={{ width: 120, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                    </Form.Item>
                    <Form.Item<FieldType>


                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            onChange={(e) => {

                                setFormData({
                                    ...formData,
                                    room: e?.target?.value
                                })
                            }}
                            placeholder="Помещение" style={{ width: 120, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                    </Form.Item>
                </div>

                <Form.Item<FieldType>


                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                mailIndex: e?.target?.value
                            })
                        }}
                        placeholder="Индекс" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
                </Form.Item>

                <Form.Item valuePropName="checked">
                    <Checkbox
                        onChange={(e) => {

                            setFormData({
                                ...formData,
                                addressCheckbox: e?.target?.checked
                            })
                        }}
                        style={{ width: 450 }}><p className={classes.form_text}>Почтовый адрес отличается от адреса регистрации</p></Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button
                        onClick={() => {
                            setSelectForm(2)
                        }}
                        style={{ color: 'black', background: '#F4F2F2', marginRight: 20 }} type="primary" htmlType="submit">
                        Назад
                    </Button>
                    <Button
                        onClick={() => {
                            if (formData.cityId
                                && formData.cityName
                                && formData.street
                                && formData.house
                                && formData.building
                                && formData.room
                                && formData.mailIndex) {
                                setSelectForm(4)
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

export default Form3;
