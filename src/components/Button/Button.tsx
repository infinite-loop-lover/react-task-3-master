import React from "react";
import s from './Button.module.css';

type PropsType = {
    title: "inc" | "reset" | "set"
    disabled?: boolean
    startValue?: number
    displayedDigit?: number
    changeDigit?: (displayedDigit: number) => void
    onSetButtonClick?: () => void
}

export function Button(props: PropsType) {

    let onClickHandler = () => {
        if (props.title === "inc") {
            props.changeDigit && props.displayedDigit !== undefined
            && props.changeDigit(props.displayedDigit + 1)
        } else if (props.title === "reset") {
            props.changeDigit && props.startValue !== undefined
            && props.changeDigit(props.startValue)
        } else if (props.title === "set") {
            props.onSetButtonClick                //if props.onSetButtonClick is defined
            && props.onSetButtonClick()
        }
    }

    return (
        <button className={s.btn} disabled={props.disabled} onClick={onClickHandler}>
            {props.title}
        </button>
    )
}