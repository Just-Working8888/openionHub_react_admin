import React, { useEffect, useState } from 'react';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, FolderOpenOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Flex, Input, List, Modal, Select, Space, message } from 'antd';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { FetchCreateQuiz, fetchDeleteQuetionById, fetchQuetion } from 'store/reducers/quetionReduser';
import { useNavigate } from 'react-router-dom';

const onChange: any = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const QuetionList: React.FC = () => {
    const { data } = useAppSelector((state) => state.quetions)
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchQuetion({}))
    }, [])

    const handleDelete = async (id: number) => {
        try {
            dispatch(fetchDeleteQuetionById({ id }))
            dispatch(fetchQuetion({}))
            messageApi.open({
                type: 'success',
                content: <>delete success</>,
            });
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: <>{error}</>,
            });
        }
    }
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');

    const showModal = () => {
        setOpen(true);

    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);

    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <List
            className='quizList'
            itemLayout="vertical"
            size="large"

            dataSource={data}
            header={
                <Flex gap={10} justify='space-between'>
                    <Flex gap={10}>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            // onChange={handleChange}/
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                        <Input style={{ width: "300px" }} />
                        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                    </Flex>


                    <Button onClick={() => navigate('/servey/create')}><AppstoreAddOutlined /> add new</Button>
                    <Modal
                        title="add new"
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >
                        <Input onChange={(e) => setModalText(e.target.value)} placeholder='please write title' />
                    </Modal>
                </Flex>}
            footer={
                <div>
                    <b>ant design</b> footer part
                </div>
            }
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                        <EditOutlined onClick={() => navigate(`/servey/create/${item.id}`)} />,
                        <FolderOpenOutlined />,
                        <DeleteOutlined onClick={() => handleDelete(item.id)} />,
                    ]}
                    extra={
                        <img
                            style={{ objectFit: 'cover', borderRadius: '5px' }}
                            height={170}
                            width={272}
                            alt="logo"
                            src={`http://localhost:7002/${item.image}`}
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.image} />}
                        title={<a href={`/servey/${item.id}`}>{item.title}</a>}
                        description={item.title}
                    />
                    {item.description}
                </List.Item>
            )}
        />
    );
}

export default QuetionList;