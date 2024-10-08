import React, {useRef, useState} from 'react';
import styles from "./Input.module.scss";
import img from "../../static/photos/id.svg";
import notValidImg from "../../static/photos/notvalid.svg";
import validImg from "../../static/photos/valid.svg";

const InputID = () => {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const types = ["Паспорт РФ", "Загран паспорт"]

    return (
        <div className={styles.container + (isValid === false ? " " + styles.containerNotValid : "") + (isValid === true ? " " + styles.containerValid : "")}
             style={{marginRight: 40, marginTop: 35}} onMouseLeave={() => setFocused(false)}>
            <img src={img} alt=""/>

            <div className={styles.wrapper}>
                <div className={styles.fieldInput + ((focused || value) ? " " + styles.fieldAppear : "")}>
                    Документ
                </div>

                <div className={styles.row}>
                    <input ref={ref} value={value} onChange={() => {}}
                           onClick={() => setFocused(true)} autoComplete={"off"}
                           onFocus={() => setFocused(true)} type="text" name="typeID" placeholder="Паспорт РФ"
                           className={styles.input} required={true}/>


                    <div className={styles.arrow}>
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                                  d="M10.7958 0.204074C10.6598 0.0679858 10.4987 -1.83564e-06 10.3124 -1.80308e-06L0.687552 -1.20215e-07C0.501235 -8.76387e-08 0.340164 0.0679876 0.204076 0.204076C0.0679877 0.340314 8.7665e-08 0.501385 1.20222e-07 0.687589C1.52772e-07 0.873756 0.0679878 1.03483 0.204076 1.17095L5.01652 5.9834C5.15276 6.11949 5.31383 6.18763 5.5 6.18763C5.68617 6.18763 5.84739 6.11949 5.98336 5.9834L10.7958 1.17091C10.9317 1.03482 11 0.873754 11 0.68755C11 0.501383 10.9317 0.340313 10.7958 0.204074Z"
                                  fill="black"/>
                        </svg>

                    </div>
                </div>

                <div className={styles.list + (focused ? " " + styles.listOpened : "")}>
                    {types.map((type) =>
                    <div key={type} className={styles.listItem} onClick={() => {
                        setValue(type)
                        setFocused(false)
                        setIsValid(true)
                    }}>
                        {type}
                    </div>
                    )}
                </div>

                {isValid === false &&
                    <img className={styles.validImg} src={notValidImg} alt=""/>
                }
                {isValid === true &&
                    <img className={styles.validImg} src={validImg} alt=""/>
                }


            </div>
        </div>
    );
};

export default InputID;