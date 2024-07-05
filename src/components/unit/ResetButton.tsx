import { initializeUnitResult, initializeUnitValues } from "../../util/initialStates"
export default ({ setResult, setVal }: {
    setResult: React.Dispatch<React.SetStateAction<{
        cost: string
        quality: {
            A: string
            B: string
        }
    }>>,
    setVal: React.Dispatch<React.SetStateAction<{
        a1Val: string
        a2Val: string
        b1Val: string
        b2Val: string
    }>>
}) => {
    const onReset = () => {
        setResult(initializeUnitResult)
        setVal(initializeUnitValues)
    }

    return (
        <div>
            <button onClick={onReset} > Reset </button>
        </div>
    )
}