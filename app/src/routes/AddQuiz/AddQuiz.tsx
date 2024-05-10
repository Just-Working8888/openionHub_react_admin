
import { Affix, Button, Card, Input } from "antd";
import classes from "./AddQuiz.module.scss";
import { FC, useEffect, useState } from "react";
import EditableEditor from "./Desperation/Desperation";
import AddQuetion from "./addQuetion/AddQuetion";
import { EditOutlined, EllipsisOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCategories } from "store/reducers/categoryReduser";
import { Categories } from "store/models/ICategories";
import { getCookie } from "helpers/cookies";
import { FetchCreateQuiz, fetchQuetionById, fetchUpdateQuetionById } from "store/reducers/quetionReduser";
import { useParams } from "react-router-dom";


const AddQuiz: FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('')
    const { data } = useAppSelector((state) => state.categories)
    const { singleProduct } = useAppSelector((state) => state.quetions)
    const [quetion, setQuetion] = useState([1])
    const dispatch = useAppDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchCategories({}))
        dispatch(fetchQuetionById({ id: Number(id) }))
    }, [])
    useEffect(() => { setTitle(singleProduct?.title as string) }, [singleProduct])
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchUpdateQuetionById({ id: id, data: { ...singleProduct, title: title } } as any))
        }, 1000);
        return () => clearTimeout(timer);
    }, [title])

    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', title);
            formDataToSend.append('description', String(description));
            formDataToSend.append('userId', String(getCookie('userId')));
            if (selectedFile) {
                formDataToSend.append('image', selectedFile);
            }
            dispatch(FetchCreateQuiz(formDataToSend))
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };



    return (
        <div className={classes.Quiz}>
            <div className={classes.AddQuiz}>
                <Card
                    cover={
                        <label htmlFor="upload" className={classes.AddQuiz_upload}>
                            {imageUrl ? (
                                <div>
                                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
                                </div>
                            ) : singleProduct?.image ? <img src={`http://localhost:7002/${singleProduct.image}`} alt="Uploaded" style={{ maxWidth: '100%' }} /> :
                                <div className={classes.AddQuiz_upload_section}>
                                    <div className="upload_button">
                                        <UploadOutlined style={{ fontSize: 40 }} />
                                    </div>
                                    <input id="upload" style={{ opacity: 0 }} type="file" onChange={handleFileChange} />
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                        banned files.
                                    </p>
                                </div>
                            }
                        </label>
                    }

                    className={classes.AddQuiz_container}>
                    <div className={classes.AddQuiz_title}>

                        <Input onChange={(e) => setTitle(e.target.value)} value={title} className='borderBotInput' />
                        <hr />
                        <br />
                        <EditableEditor defaultText={singleProduct?.description} setDescription={setDescription} />

                    </div>
                </Card>
                {/* <TestAddQuetion /> */}
                {
                    quetion.map((item) => <>   <br />
                        <Card className={classes.AddQuiz_container}>
                            <AddQuetion />
                        </Card>
                    </>)
                }
                <br />
                <Button onClick={() => setQuetion([...quetion, 1])} style={{ width: " 100%" }}>add </Button>

            </div >

            <div className={classes.Quiz_tools}>
                <Affix offsetTop={30}>
                    <Card
                        title='category'
                        actions={[
                            <Button>
                                <SettingOutlined key="setting" />
                            </Button>,
                            <Button>
                                <EditOutlined key="edit" />
                            </Button>,
                            <Button>
                                <EllipsisOutlined key="ellipsis" />
                            </Button>


                        ]} >
                        <ul>
                            {data?.map((item: Categories) =>
                                <li>

                                    <Button className={classes.categoryItem} type="text">
                                        {item.title}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path d="M1 1L6 6L1 11" stroke="#DCDCDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Button>

                                </li>
                            )}
                        </ul>
                    </Card>
                    <br /><br />
                    <Button onClick={handleSubmit} type="primary" style={{ width: '100%' }}>create</Button>
                </Affix>

            </div>
        </div>
    );
};

export default AddQuiz;
