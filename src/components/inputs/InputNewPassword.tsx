import React from 'react';
import Input from "./Input";
import img from "../../static/photos/password.svg";

const InputNewPassword = () => {
    return (
        <Input img={img} nameInput={"password"} fieldInput={"Укажите пароль"} typeInput={"password"}
               placeholder={"Введите пароль"} required={true} autocomplete="new-password"
               validate={true} validateText={"Пароль должен быть не менее 6 символов"} pattern="^.{6,}$"
               style={{marginTop: 35}} showPasswordMargin={{right: 40}}
        />
    );
};

export default InputNewPassword;