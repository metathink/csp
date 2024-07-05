import { useState } from 'react'
import './App.css'

import MainContainer from './components/MainContainer'
import SelectContainer from './components/SelectContainer'
import Title from './components/Title'
import { initializeTab } from './util/initialStates'

function App() {
  const [tab, setTab] = useState(initializeTab)

  return (
    <div>
      <Title />
      <SelectContainer tab={tab} setTab={setTab} />
      <MainContainer tab={tab} />
    </div>
  )
}

export default App
