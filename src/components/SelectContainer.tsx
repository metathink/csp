import React from "react"
import initialize from "../util/initialize"

export default ({ tab, setTab }: { tab: string, setTab: React.Dispatch<React.SetStateAction<string>> }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTab(e.target.value)
        initialize()
    }

    return (
        <>
            <div className="selectTab">
                <select name="tabs" value={tab} onChange={handleChange}>
                    <option value="unit"> 単価 </option>
                    <option value="multi"> 複数 </option>
                </select>
            </div>
        </>
    )
}