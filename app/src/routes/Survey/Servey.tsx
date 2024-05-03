import { QuetionList } from "Components";
import classes from "./Servey.module.scss";
import { FC, useEffect, useState } from "react";
import { Button, Card, Input, message } from "antd";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCategories } from "store/reducers/categoryReduser";
import { Categories } from "store/models/ICategories";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
// import MyColumnChart from "Components/Charts/TestChart";

const Servey: FC = () => {
    const { data } = useAppSelector((state) => state.categories)

    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCategories({}))
    }, [])

    return (
        <div className={classes.Servey}>
            <Card actions={[
                <Button>
                    <SettingOutlined key="setting" />
                </Button>,
                <Button>
                    <EditOutlined key="edit" />
                </Button>,
                <Button>
                    <EllipsisOutlined key="ellipsis" />
                </Button>


            ]} className={classes.Servey_leftBar}>
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

            <Card className={classes.Servey_QuetionsContainer}>
                <QuetionList />
            </Card>

        </div >
    );
};

export default Servey;
