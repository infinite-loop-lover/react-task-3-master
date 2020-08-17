import React, {useEffect, useState} from 'react';
import './App.css';
import {ValueSetter} from "./components/ValueSetter/ValueSetter";
import {Counter} from "./components/Counter/Counter";

function App() {


    let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem("startValue")) || 0)
    let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem("maxValue")) || 5)
    let [error, setError] = useState<boolean>(false)
    let [disabledInc, setDisabledInc] = useState<boolean>(false)
    let [disabledSet, setDisabledSet] = useState<boolean>(false)
    let [displayedDigit, setDisplayedDigit] = useState<number>(startValue)
    let [settingMode, setSettingMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }, [startValue, maxValue])

    function onValueChange(inputDigit: number, title: string) {
        if (title === "start value:") {
            startValue = inputDigit
            setStartValue(startValue)
        } else if (title === "max value:") {
            maxValue = inputDigit
            setMaxValue(maxValue)
        }
        changePrompt()
    }

    function changePrompt() {
        if (startValue < 0 || maxValue <= startValue) {
            setDisabledSet(true)
            setError(true)
        } else {
            setDisabledSet(false)
            setError(false)
        }
    }

    function onSetButtonClick() {
        setSettingMode(!settingMode)
        setDisplayedDigit(startValue)
    }

    function changeDigit(displayedDigit: number) {
        setDisplayedDigit(displayedDigit)
        disableButton(displayedDigit)
    }

    function disableButton(displayedDigit: number) {
        if (displayedDigit === maxValue) {
            setDisabledInc(true)
        } else if (displayedDigit === startValue) {
            setDisabledInc(false)
        }
    }

    return (
        <div className={"app-wrapper"}>
            { settingMode
            ? <ValueSetter
                maxValue={maxValue}
                startValue={startValue}
                onValueChange={onValueChange}
                error={error}
                disabledSet={disabledSet}
                onSetButtonClick={onSetButtonClick}/>
            : <Counter
                displayedDigit={displayedDigit}
                startValue={startValue}
                maxValue={maxValue}
                disabledInc={disabledInc}
                disabledSet={disabledSet}
                onSetButtonClick={onSetButtonClick}
                changeDigit={changeDigit}/> }
        </div>
    )
}

export default App;
