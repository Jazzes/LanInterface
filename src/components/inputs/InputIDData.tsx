import React from 'react';
import img from "../../static/photos/transcript.svg";
import Input from "./Input";

const InputIdData = () => {

    const mask = (value: string): string =>
        value.replace(/\D/g, '').slice(0, 10).replace(/(\d{4})(\d{0,6})/, '$1 $2').trim()


    return (
        <Input fieldInput="Укажите 10 цифр серия и номер" placeholder="Введите серию и номер" img={img} nameInput="dataID"
               typeInput="text" required={true} autocomplete="id" mask={mask} pattern="(\d{4})\s(\d{6})" validate={true}
        validateText={"Поле должно содержать 10 цифр"} style={{marginTop: 35}}/>
    );
};

export default InputIdData;