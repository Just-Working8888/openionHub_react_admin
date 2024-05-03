import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
    console.log('Received values of form:', values);
};
// question: string
// options: string[]
// correctAnswer: string
const AddQuetion: React.FC = () => (
    <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
    >
        <Form.Item >
            <Input defaultValue={'quetion title'} className='borderBotInput' />
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

                                    <Input defaultValue={'quetion'} className='fokusInput' placeholder="Last Name" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
        {/* <Form.Item>
            <Button  htmlType="submit">
                Submit
            </Button>
        </Form.Item> */}
    </Form>
);

export default AddQuetion;