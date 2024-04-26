import classes from "./MainPage.module.scss";
import { FC, useState } from "react";
import { MainForm, SelectCategory } from "Components";
import { Button, Drawer } from "antd";



const MainPage: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.main}>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer size='large' style={{ width: '70vw' }} width={'right'} title="Выберите категорию товара" onClose={onClose} open={open}>
        <p style={{ width: '550px' }}>
          Выберите категорию, в которой вы собираетесь продавать товары.
          Если вы не нашли подходящую категорию, <a href="">попросите нас ее добавить.</a>
        </p>
        <SelectCategory />

      </Drawer>
      <MainForm />
    </div >
  );
};

export default MainPage;
