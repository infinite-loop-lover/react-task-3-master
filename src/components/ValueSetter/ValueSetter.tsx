import {InputForm} from "../InputForm/InputForm";
import {Button} from "../Button/Button";
import React from "react";
import s from "./ValueSetter.module.css";

type ValueSetterType = {
    startValue: number
    maxValue: number
    error: boolean
    onValueChange: (inputDigit: number, title: string) => void
    disabledSet: boolean
    onSetButtonClick?: () => void

}

export const ValueSetter = (props: ValueSetterType) => {
    return (
        <div className={s.valueSetterWrapper}>
            <div className={s.inputBlock}>
                <InputForm title={"max value:"} inputDigit={props.maxValue} onChange={props.onValueChange} error={props.error}/>
                <InputForm title={"start value:"} inputDigit={props.startValue} onChange={props.onValueChange}
                           error={props.error}/>
            </div>
            <div className={s.btnBlock}>
                <Button title={"set"}
                        disabled={props.disabledSet}
                        onSetButtonClick={props.onSetButtonClick}/>
            </div>
        </div>
    )
}