import React, {ChangeEvent} from "react";
import s from './InputForm.module.css';

type PropsType = {
    inputDigit: number
    title: string
    onChange: (inputDigit: number, title: string) => void
    error: boolean
}

export function InputForm(props: PropsType) {

    const onDigitInput = (e: ChangeEvent<HTMLInputElement>) => {
        let input = Number(e.currentTarget.value)
        props.onChange(input, props.title)
    }

    let inputClassName = props.error ? s.incorrectValue : ""

    return (
        <div className={s.input}>
            <label>{props.title}<input className={inputClassName} type={"number"} value={props.inputDigit} onChange={onDigitInput}/></label>
        </div>
    )
}