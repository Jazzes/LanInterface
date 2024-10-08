import React, {memo, useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../context/Context";
import styles from "./Register.module.scss";
import InputInitials from "../../components/inputs/InputInitials";
import InputNumberRegistration from "../../components/inputs/InputNumberRegistration";
import InputBirthDate from "../../components/inputs/InputBirthDate";
import InputNewPassword from "../../components/inputs/InputNewPassword";
import InputConfirmPassword from "../../components/inputs/InputConfirmPassword";
import InputChecker from "../../components/inputs/InputChecker";
import backImg from "../../static/photos/arrow_back.svg";

const SimplifiedRegistration = memo(() => {
    const navigate = useNavigate();

    const {changeAuth} = useContext(UserContext)

    const [isFormValid, setIsFormValid] = useState(false)

    const handleFormInput = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsFormValid(e.currentTarget.checkValidity())
    }

    const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isFormValid) {
            changeAuth()
            navigate('/')
        }
    }
    return (
        <form className={styles.form} onSubmit={handleFormSubmit}  onInput={handleFormInput}>
            <InputInitials/>

            <div className={styles.row}>
                <InputNumberRegistration/>
                <InputBirthDate/>
            </div>

            <div className={styles.row}>
                <InputNewPassword/>
                <InputConfirmPassword/>
            </div>

            <div className={styles.agreeRow}>
                <InputChecker/>
                <div className={styles.agreeText}>Я даю свое право на информационную рассылку</div>
            </div>

            <button type={"submit"} className={styles.register + (isFormValid ? (" " + styles.activeRegister) : "")}>Зарегистрироваться</button>

            <Link className={styles.back} to="/">
                <img className={styles.backImg} src={backImg} alt=""/>
                вернутся на главную
                <div className={styles.backImg}></div>
            </Link>

        </form>
    );
})

export default SimplifiedRegistration;