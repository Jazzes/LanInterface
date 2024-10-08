import React, {useState} from 'react';
import styles from './Register.module.scss';
import info from "../../static/photos/info.svg"
import FullRegistration from "./FullRegistration";
import SimplifiedRegistration from "./SimplifiedRegistration";

const Register = () => {
    const [mode, setMode] = useState(1)
    const [hint, setHint] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header}>Регистрация</div>
            <div className={styles.modes}>
                <div className={styles.firstMode + (mode === 1 ? (" " + styles.activeMode) : "")}
                     onClick={() => setMode(1)}>
                    Полная
                    <img onMouseEnter={() => {
                        setHint(true)
                    }} onMouseLeave={() => {
                        setHint(false)
                    }} className={styles.firstModeImg} src={info} alt=""/>
                    <div className={styles.hintRegistration + (hint ? (" " + styles.hintRegistrationActive) : "")}>
                        Это полная версия регистрации.<br/>
                        Здесь паспорт.<br/>
                        Здесь Сила.
                    </div>
                </div>
                <div className={styles.secondMode + (mode === 2 ? (" " + styles.activeMode) : "")}
                     onClick={() => setMode(2)}>Упрощенная
                </div>
            </div>
            {mode === 1 ?
                <FullRegistration/>
                :
                <SimplifiedRegistration/>
            }
        </div>
    );
};

export default Register;