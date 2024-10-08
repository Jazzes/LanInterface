import React, {memo} from 'react';
import Input from "./Input";
import img from "../../static/photos/tel.svg"

const InputNumberRegistration = memo(() => {

    const mask = (value: string) : string => {
        const input = value.replace(/\D/g, '')
        let formattedPhone = ''

        if (input.length > 0) {
            if (input.startsWith('7')) {
                formattedPhone = '+7 '
                if (input.length > 1) formattedPhone += `(${input.slice(1, 4)}`
                if (input.length > 4) formattedPhone += `) ${input.slice(4, 7)} `
                if (input.length >= 7) formattedPhone += `${input.slice(7, 9)} `
                if (input.length >= 9) formattedPhone += `${input.slice(9, 11)}`
            } else {
                formattedPhone = '8 '
                if (input.length > 1) formattedPhone += `(${input.slice(1, 4)}`
                if (input.length > 4) formattedPhone += `) ${input.slice(4, 7)} `
                if (input.length >= 7) formattedPhone += `${input.slice(7, 9)} `
                if (input.length >= 9) formattedPhone += `${input.slice(9, 11)}`
            }
        }


        return formattedPhone.trim()
    }

    return (
        <Input fieldInput="Номер телефона" placeholder="Введите номер телефона" img={img} nameInput="tel"
               typeInput="text" required={true} pattern="(\+7|8)\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}" mask={mask}
               autocomplete="tel" validate={true} validateText={"Поле должно содержать 11 цифр"} style={{marginTop: 35}}/>
    );
})

export default InputNumberRegistration;