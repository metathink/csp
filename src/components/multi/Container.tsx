import { useState } from "react"
import { initializeResult, initializeMultiValues } from "../../util/initialStates"
import replaceStr from "../../util/replaceStr"
import Block from "./Block"
import ResultButton from "./ResultButton"
import ResetButton from "./ResetButton"
import Result from "./Result"

export default () => {
    const [val, setVal] = useState(initializeMultiValues)
    const [result, setResult] = useState(initializeResult)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const formattedValue = replaceStr(value)
        setVal((prevVal) => ({
            ...prevVal,
            [name]: formattedValue
        }))
    }

    return (
        <div>
            <Block name="a" value={val} onChange={handleChange} />
            <Block name="b" value={val} onChange={handleChange} />
            <ResultButton val={val} setResult={setResult} />
            <Result result={result} />
            <ResetButton />
        </div>
    )
}