import React, {CSSProperties, FC, useRef, useState} from 'react';
import styles from "./Input.module.scss";
import validImg from "../../static/photos/valid.svg"
import notValidImg from "../../static/photos/notvalid.svg"


interface IInput {
    placeholder: string
    nameInput: string
    typeInput: string
    fieldInput: string
    img: string
    required?: boolean
    mask?: (value: string) => string
    pattern?: string
    autocomplete?: string
    style?: CSSProperties
    validate?: boolean
    validateText? : string
    showPasswordMargin?: CSSProperties
}

const Input: FC<IInput> = ({placeholder, fieldInput, validate, validateText, nameInput, typeInput, img, required, mask, pattern, autocomplete, style, showPasswordMargin}) => {

    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const ref = useRef<null | HTMLInputElement>(null)

    const onChangeHandler = (e :  React.ChangeEvent<HTMLInputElement>) => {
        if (mask){
            const res = mask(e.target.value)
            setValue(res)
        } else {
            setValue(e.target.value)
        }
    }



    const validateInput = () => {
        const isInputValid = ref.current?.checkValidity() as boolean

        setIsValid(isInputValid)
    };

    return (
        <div className={styles.container + (isValid === false ? " " + styles.containerNotValid : "") + (isValid === true ? " " + styles.containerValid : "")} style={style}>
            <img className={styles.inputIcon} src={img} alt=""/>

            <div className={styles.wrapper}>
                <div className={styles.fieldInput + ((focused || value) ? " " + styles.fieldAppear : "")}>
                    {fieldInput}
                </div>

                <input ref={ref} onChange={onChangeHandler} value={value} style={typeInput === "password" ? (validate ? {width: "calc(100% - 110px)"} : {width: "calc(100% - 80px)"}) : {}}
                       pattern={pattern}
                       onBlur={() => {
                           setFocused(false)
                           if (validate)
                               validateInput()
                       }}
                       onFocus={() => setFocused(true)} type={typeInput} name={nameInput} placeholder={placeholder}
                       className={styles.input} required={required} autoComplete={autocomplete}/>

                {(typeInput === "password") && value &&
                    <div className={styles.hideValue} style={showPasswordMargin} onClick={() => {
                        if (ref.current!.type === "text")
                            ref.current!.type = "password"
                        else
                            ref.current!.type = "text"
                    }}>
                        Показать
                    </div>
                }

                {isValid === false &&
                    <img className={styles.validImg} src={notValidImg} alt=""/>
                }
                {isValid === true &&
                    <img className={styles.validImg} src={validImg} alt=""/>
                }

            </div>
            {isValid === false &&
                <div className={styles.validText}>{validateText}</div>
            }
        </div>
    );
};

export default Input;