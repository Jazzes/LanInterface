import React from 'react';
import Input from "./Input";
import img from "../../static/photos/password.svg";

const InputConfirmPassword = () => {
    return (
        <Input img={img} nameInput={"password"} fieldInput={"Повторите пароль"} typeInput={"password"}
               placeholder={"Повторите пароль"} required={true} autocomplete="new-password"
               validate={true} validateText={"Пароль должен быть не менее 6 символов"} pattern="^.{6,}$"
        style={{marginLeft: 40, marginTop: 35}} showPasswordMargin={{right: 40}}
        />
    );
};

export default InputConfirmPassword;