import { FC } from "react";
import classes from './MainForm.module.scss';
import Col_1 from './Col_1/Col_1';
import Col_2 from "./Col_2/Col_2";


const MainForm: FC = () =>{

    return(
        <div className={classes.mainForm}>
          <Col_1 />
          <Col_2/>

        </div>
    )
};

export default MainForm;
