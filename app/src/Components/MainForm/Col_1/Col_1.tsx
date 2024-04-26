import { FC, useState } from "react";
import classes from './Col_1.module.scss'
import StatusBlock from "../StatusBlock/StatusBlock";
import FormBlock from "../FormBlock/FormBlock";
import RaitingBlock from "../RaitingBlock/RaitingBlock";

const Col_1: FC = () =>{
    const [status, setStatus] = useState(1);
    return(
        <div className={classes.col_1}>
            <div className={classes.col_1_row}>
                <StatusBlock setStatus={setStatus} status={status} />
                <FormBlock setStatus={setStatus} status={status} />
            </div>
            <RaitingBlock />
        </div>
    )
}


export default Col_1;
