import React from "react";
import s from './Display.module.css';

type PropsType = {
    displayedDigit: number
    maxValue: number
}

export function Display(props: PropsType) {

    let digitClassName = props.displayedDigit === props.maxValue ? s.counterStop : s.counter

    return (
        <div className={digitClassName}>
            {props.displayedDigit}
        </div>
    )
}