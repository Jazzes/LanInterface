import React, {useContext, useState} from 'react';
import styles from './Login.module.scss';
import Logo from "../../static/photos/LogoLogin.svg"
import InputNumber from "../../components/inputs/InputNumber";
import InputPassword from "../../components/inputs/InputPassword";
import GooglePlay from "../../static/photos/GooglePlay.svg"
import AppStore from "../../static/photos/AppStore.svg"
import {Link} from "react-router-dom";
import {loginTest, passwordTest} from "../../data/data";
import {UserContext} from "../../context/Context";


const Login = () => {
    const {changeAuth} = useContext(UserContext)

    const [isFormValid, setIsFormValid] = useState(false)

    const handleFormInput = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsFormValid(e.currentTarget.checkValidity())
    }

    const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const tel = formData.get('tel') as string
        const password = formData.get('password') as string

        if (tel === loginTest && password === passwordTest){
            changeAuth()
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt=""/>
            <form onSubmit={handleFormSubmit} className={styles.form} onInput={handleFormInput}>

                <div className={styles.inputs}>
                    <InputNumber/>
                    <InputPassword/>
                </div>
                <div className={styles.forgetPassword}>Забыли пароль?</div>

                <button type="submit" className={styles.login + (isFormValid ? (" " + styles.activeLogin) : "")}>Войти</button>
            </form>


            <div className={styles.registerCont}>
                <div className={styles.registerText}>
                    Если у вас еще нет аккаунта?
                </div>
                <Link to="/register" className={styles.register}>
                    Зарегистрируйтесь
                </Link>
            </div>

            <div className={styles.downloadCont}>
                <div className={styles.downloadText}>Установите приложение.</div>

                <div className={styles.downloadImgs}>
                    <img className={styles.downloadGoogleStore} src={GooglePlay} alt=""/>
                    <img className={styles.downloadAppStore} src={AppStore} alt=""/>
                </div>

            </div>

        </div>
    );
};

export default Login;