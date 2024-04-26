import { FC, useState } from "react";
import classes from './FormBlock.module.scss';
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

type Props = {
    status: number,
    setStatus: any,
}

const FormBlock: FC<Props> = ({ status, setStatus }) => {

    const [selectForm, setSelectForm] = useState(1);
    const [formData, setFormData] = useState({
        organizationType: null,
        inn: '',
        taxSystem: null,
        okpoCode: '',
        surname: '',
        name: '',
        cityId: null,
        cityName: '',
        street: '',
        house: '',
        building: '',
        room: '',
        mailIndex: '',
        addressCheckbox: false,
        bankName: '',
        invoice: '',
        bik: '',
        privacyTerms: false
    });
    return (
        <div className={classes.form_block}>
            {
                selectForm === 1
                    ? <Form1 setSelectForm={setSelectForm}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    : selectForm === 2
                        ? <Form2 setSelectForm={setSelectForm}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        : selectForm === 3
                            ? <Form3 setSelectForm={setSelectForm}
                                formData={formData}
                                setFormData={setFormData}
                            />
                            : selectForm === 4
                                ? <Form4
                                    setStatus={setStatus}
                                    setSelectForm={setSelectForm}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                : status === 2
                                ? <Step2 />
                                : status === 3
                                ? <Step3 setStatus={setStatus} />
                                : status === 4
                                ? <Step4 />
                                : ''
            }

        </div>
    )
}


export default FormBlock;
