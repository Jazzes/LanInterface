import React, {memo} from 'react';
import Input from "./Input";
import img from "../../static/photos/password.svg"

const InputPassword = memo(() => {
    return (
        <Input img={img} nameInput={"password"} fieldInput={"Пароль"} typeInput={"password"}
               placeholder={"Введите пароль"} required={true} autocomplete="current-password"/>
    );
})

export default InputPassword;