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
  text?: string;
};

type Props = {
  setSelectForm: any,
  formData: any,
  setFormData: any,
}

const Form1: FC<Props> = ({ setSelectForm, formData, setFormData }) => {

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
        <h1 className={classes.form_title}>Добавьте реквизиты</h1>
        <p className={classes.form_step}>Шаг 1/4</p>
        <Form.Item<FieldType>

          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Select
            onChange={(e) => {

              setFormData({
                ...formData,
                organizationType: e
              })
            }}
            style={{ width: 450, height: 60, backgroundColor: 'rgba(40, 40, 40, 0.05)' }} defaultValue={'0'}>
            <Select.Option value="0">Тип организации</Select.Option>
            <Select.Option value="1">Организации 1</Select.Option>
            <Select.Option value="2">Организации 2</Select.Option>
            <Select.Option value="3">Организации 3</Select.Option>
          </Select>
        </Form.Item>



        <Form.Item<FieldType>


          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            onChange={(e) => {

              setFormData({
                ...formData,
                inn: e?.target?.value
              })
            }}
            placeholder="ИНН" style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} />
        </Form.Item>

        <Form.Item<FieldType>

          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Select
          onChange={(e) => {

            setFormData({
              ...formData,
              taxSystem: e
            })
          }}
          style={{ width: 450, height: 60, background: 'rgba(40, 40, 40, 0.05)' }} defaultValue={'0'}>
            <Select.Option value="0">Система налогообложения</Select.Option>
            <Select.Option value="1">Система налогообложения 1</Select.Option>
            <Select.Option value="2">Система налогообложения 2</Select.Option>
            <Select.Option value="3">Система налогообложения 3</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item >
          <Button
            onClick={() => {
              if(formData.organizationType && formData.inn && formData.taxSystem){
                setSelectForm(2)
              }

            }}
           type="primary" htmlType="submit">
            Далее
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Form1;
