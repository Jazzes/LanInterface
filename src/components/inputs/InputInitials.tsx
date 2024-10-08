import React from 'react';
import img from "../../static/photos/user.svg";
import Input from "./Input";

const InputInitials = () => {

    const mask = (value: string): string => {
        const input = value.replace(/[^А-Яа-яЁёA-Za-z\s]/g, '')
        let formattedOutput = ''
        if (input.length > 0)
            formattedOutput = input

        return formattedOutput
    };

    return (
        <Input fieldInput="ФИО" placeholder="Иван Иванов Иванович" img={img} nameInput="initials"
               typeInput="text" required={true} pattern="^[A-Za-zА-Яа-яЁё]+\s[A-Za-zА-Яа-яЁё]+(?:\s[A-Za-zА-Яа-яЁё]+)?$" mask={mask} validate={true}/>
    );
};

export default InputInitials;