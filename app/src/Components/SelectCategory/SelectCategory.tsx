
import React, { useEffect, useState } from 'react';
import { Button, Drawer, Input, Select, Skeleton, Space } from 'antd';
import classes from './SelectCategory.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hook';
import axios from 'axios';
import { fetchCategories, fetchCategoriesById } from 'store/reducers/categoryReduser';
import { Categories } from 'types/types';




const SelectCategory: React.FC = () => {
    // const { data, children, status } = useAppSelector((state) => state.category)
    // const dispatch = useAppDispatch()
    // const [open, setOpen] = useState(false);
    // const [category, setCategory] = useState<number>(1)
    // const [subcategory, setSubcategory] = useState<number>(0)
    // useEffect(() => {
    //     const source = axios.CancelToken.source();
    //     dispatch(fetchCategories({ cancelToken: source.token, }))
    //     return () => {
    //         source.cancel('Запрос отменен, компонент размонтирован');
    //     };
    // }, []);
    // useEffect(() => {
    //     document.body.style.overflow = open ? 'hidden' : 'auto';
    //     return () => { document.body.style.overflow = 'auto' };
    // }, [open]);
    // const handleMouseEnter = (key: string) => {
    //     const source = axios.CancelToken.source();
    //     if (!children[category]) {
    //         dispatch(fetchCategoriesById({ cancelToken: source.token, id: +key })).then((res: any) => {
    //             dispatch(setHoveredItem(res.payload));
    //         });
    //     }
    //     setCategory(+key);
    // };
    // const subCateoryList = {
    //     'succeeded': children[category]?.subcategories?.map((item: Categories, index) =>
    //         <li key={item.id}>
    //             <Button style={subcategory === index ? { background: '#F2F3F7', color: 'black' } : {}} onMouseOver={() => setSubcategory(index)} className={classes.categoryItem} type="text">
    //                 {item.title}
    //                 {
    //                     item?.subcategories?.length > 0 ? <svg style={subcategory === index ? { transform: 'rotate(0.25turn)', transition: '0.3s' } : { transition: '0.3s' }} xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
    //                         <path style={subcategory === index ? { stroke: 'black', transition: '0.3s' } : { transition: '0.3s' }} d="M1 1L6 6L1 11" stroke="#DCDCDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //                     </svg> : ''
    //                 }
    //             </Button>
    //         </li>

    //     ),
    //     'pending': <>
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />

    //     </>,
    //     'idle': <>
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />

    //     </>,
    //     'failed': 'samthing went wrong'
    // }

    return (
        <>


            {/* <Input prefix={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.5787 4.89442C9.83227 4.89442 9.09314 5.04145 8.40352 5.3271C7.7139 5.61275 7.0873 6.03144 6.55949 6.55926C6.03168 7.08708 5.613 7.71369 5.32735 8.40332C5.0417 9.09295 4.89468 9.83209 4.89468 10.5785C4.89468 11.325 5.0417 12.0641 5.32735 12.7538C5.613 13.4434 6.03168 14.07 6.55949 14.5978C7.0873 15.1256 7.7139 15.5443 8.40352 15.83C9.09314 16.1156 9.83227 16.2627 10.5787 16.2627C12.0862 16.2627 13.532 15.6638 14.5979 14.5978C15.6639 13.5318 16.2627 12.0861 16.2627 10.5785C16.2627 9.07102 15.6639 7.62524 14.5979 6.55926C13.532 5.49328 12.0862 4.89442 10.5787 4.89442ZM3 10.5785C3.00005 9.36986 3.28917 8.17872 3.84325 7.10452C4.39733 6.03033 5.20028 5.10423 6.18511 4.40352C7.16994 3.70282 8.30808 3.24782 9.50454 3.07651C10.701 2.9052 11.9211 3.02254 13.063 3.41874C14.2048 3.81494 15.2354 4.4785 16.0686 5.35406C16.9019 6.22962 17.5136 7.29177 17.8528 8.45187C18.192 9.61198 18.2489 10.8364 18.0186 12.0229C17.7882 13.2095 17.2775 14.3237 16.5289 15.2727L20.7152 19.3747C20.8042 19.4618 20.8751 19.5655 20.9239 19.68C20.9728 19.7945 20.9986 19.9175 20.9999 20.042C21.0013 20.1665 20.9781 20.29 20.9316 20.4055C20.8852 20.521 20.8165 20.6263 20.7294 20.7152C20.6423 20.8042 20.5386 20.8751 20.4241 20.9239C20.3096 20.9728 20.1866 20.9986 20.0621 20.9999C19.9377 21.0013 19.8141 20.9781 19.6986 20.9316C19.5831 20.8852 19.4779 20.8165 19.3889 20.7294L15.179 16.6018C14.056 17.4596 12.7155 17.9863 11.3089 18.1225C9.90234 18.2586 8.48572 17.9988 7.21903 17.3723C5.95233 16.7459 4.88601 15.7777 4.14049 14.5772C3.39496 13.3767 2.99993 11.9917 3 10.5785Z" fill="#DCDCDC" />
            </svg>} className={classes.search} placeholder='Поиск по категории' />
            <main className={classes.openCategories}>
                <aside className={classes.openCategories_sideBar}>
                    <ul>
                        {data?.map((item: Categories) =>
                            <li onMouseOver={() => handleMouseEnter(`${item.id}`)} key={item.id}>

                                <Button style={children[category]?.title === item.title ? { background: '#F2F3F7', color: 'black' } : {}} className={classes.categoryItem} type="text">
                                    {item.title}
                                    <svg style={children[category]?.title === item.title ? { transform: 'rotate(0.25turn)', transition: '0.3s' } : { transition: '0.3s' }} xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                        <path style={children[category]?.title === item.title ? { stroke: 'black', transition: '0.3s' } : { transition: '0.3s' }} d="M1 1L6 6L1 11" stroke="#DCDCDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Button>

                            </li>
                        )}
                    </ul>
                </aside>
                <aside style={{ marginLeft: '6px', borderLeft: '1px solid #DCDCDC' }} className={classes.openCategories_sideBar}>
                    <ul>
                        {subCateoryList[status]}
                    </ul>
                </aside>
                <aside style={{ marginLeft: '6px', borderLeft: '1px solid #DCDCDC' }} className={classes.openCategories_sideBar}>
                    <ul>
                        {children[category]?.subcategories[subcategory]?.subcategories?.map((item: Categories) => (
                            <li key={item.id}>
                                <Button onClick={() => console.log(item.id)
                                } className={classes.categoryItem} type="text">
                                    {item.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </aside>


            </main > */}
        </>
    );
};

export default SelectCategory;
