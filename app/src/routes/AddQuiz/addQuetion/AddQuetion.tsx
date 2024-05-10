import React, { useState, useEffect } from 'react';
import { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

const AddQuestion: React.FC = () => {
    const [form] = Form.useForm();
    const [trigger, setTrigger] = useState(true);
    const [questions, setQuestions] = useState([]);

    const onFinish = (values: any) => {

    };

    const handleFormValuesChange = (changedValues: any, allValues: any) => {
        console.log('Changed values:', changedValues);
        setQuestions(allValues.users.map((user: any) => user?.last));
        console.log('All values:', allValues);
    };

    useEffect(() => {
        console.log(questions);

        try {
            form.validateFields();
            console.log(form.submit());
        } catch (error) {
            // Обработка ошибок
        }
    }, [form, trigger,questions]);

    return (
        <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            onValuesChange={handleFormValuesChange}
            style={{ maxWidth: 600 }}
            autoComplete="off"
        >
            <Form.Item>
                <Input defaultValue={'question title'} className='borderBotInput' />
            </Form.Item>
            <div style={{ marginLeft: '2rem' }}>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input defaultValue={'question'} className='fokusInput' placeholder="Last Name" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Добавить поле
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </div>
        </Form>
    );
};

export default AddQuestion;
