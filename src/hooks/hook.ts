import { useState } from "react"
import { initializeTab } from "../util/initialStates"

export defalut() => {
    const [tab, setTab] = useState(initializeTab)
    return { tab, setTab }
} 
