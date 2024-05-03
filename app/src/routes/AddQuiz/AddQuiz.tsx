
import { Affix, Button, Card, Input, message } from "antd";
import classes from "./AddQuiz.module.scss";
import { FC, useEffect, useState } from "react";
import EditableEditor from "./Desperation/Desperation";
import AddQuetion from "./addQuetion/AddQuetion";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCategories } from "store/reducers/categoryReduser";
import { Categories } from "store/models/ICategories";


const AddQuiz: FC = () => {

    const { data } = useAppSelector((state) => state.categories)
    const [quetion, setQuetion] = useState([1])
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCategories({}))
    }, [])
    return (
        <div className={classes.Quiz}>
            <div className={classes.AddQuiz}>
                <Card title={
                    <div className={classes.AddQuiz_title}>
                        <Input defaultValue={'Tilte'} className='borderBotInput' />
                        <hr />
                        <br />
                        <EditableEditor />

                    </div>
                }
                    className={classes.AddQuiz_container}>

                </Card>
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
                </Affix>

            </div>
        </div>
    );
};

export default AddQuiz;
