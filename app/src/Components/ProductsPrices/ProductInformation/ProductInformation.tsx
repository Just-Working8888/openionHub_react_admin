import React, { useState } from "react";
import { Form, Input, Tooltip, Radio, RadioChangeEvent, Button, FormInstance, Space } from "antd";
import { InfoCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";
import classes from '../ProductsPrices.module.scss'

// 

interface SubmitButtonProps {
    form: FormInstance;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ setCurrent, form, children }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);

    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button onClick={() => setCurrent(1)} type="primary" htmlType="submit" disabled={!submittable}>
            {children}
        </Button>
    );
};


// 

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ProductInformation: React.FC<Props> = ({ setCurrent }) => {

    const [form] = Form.useForm();

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        nameProduct?: string;
        category?: string;
        barcode?: string;
        vendorCode?: string;
        price?: string;
        discount?: string;
        weightProduct?: string;
        lengthProduct?: string;
        widthProduct?: string;
    };

    return (
        <div>
            <br />
            <h4>
                Информация о товаре
            </h4>
            <br />

            <div className={classes.Form}>
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="nameProduct"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Название"
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="category"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Категория *"

                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="barcode"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Штрихкод"
                            suffix={
                                <Tooltip title="Extra information">
                                    <UnorderedListOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="vendorCode"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Артикул *"
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <div className={classes.flexInput}>
                        <Form.Item<FieldType>
                            name="price"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                className={classes.input}
                                placeholder="Цена в Сомах *"
                                suffix={
                                    <Tooltip title="Extra information">
                                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>
                                }
                            />
                        </Form.Item>


                        <Form.Item<FieldType>
                            name="discount"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                className={classes.input}
                                placeholder="Цена до скидки"
                                suffix={
                                    <Tooltip title="Extra information">
                                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                    </div>

                    <p>НДС (налог на добавочную стоимость) *</p>


                    <div className={classes.radio}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio className={classes.radioElem} value={1}>10%</Radio>
                            <Radio className={classes.radioElem} value={2}>20%</Radio>
                            <Radio className={classes.radioElem} value={3}>Не облагается</Radio>

                        </Radio.Group>
                        <p><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></p>
                    </div>

                    <h4>Габариты и вес в упаковке</h4>

                    <Form.Item<FieldType>
                        name="weightProduct"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Вес с упаковкой, г *"
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="lengthProduct"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Длина упаковки, мм *"
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="widthProduct"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            className={classes.input}
                            placeholder="Ширина упаковки, мм *"
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <SubmitButton setCurrent={setCurrent} form={form}>Далее</SubmitButton>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ProductInformation