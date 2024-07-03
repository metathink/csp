import { useState } from 'react'

import './App.css'

function App() {
  const initialVal = "0"
  const [valA1, setValA1] = useState(initialVal)
  const [valA2, setValA2] = useState(initialVal)
  const [valB1, setValB1] = useState(initialVal)
  const [valB2, setValB2] = useState(initialVal)
  const [result, setResult] = useState("")

  const handleChangeText = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value
    // 数字とドットのみを許可し、先頭の0を排除
    let filteredText = text.replace(/[^0-9.]/g, '')
    // 先頭の0を除去（ドットの前の0も除去）
    if (filteredText.indexOf('.') !== -1) {
      const [integerPart, decimalPart] = filteredText.split('.')
      filteredText = integerPart.replace(/^0+/, '') + (decimalPart ? '.' + decimalPart : '')
    } else {
      filteredText = filteredText.replace(/^0+/, '')
    }
    // 空文字の場合は '0' にする
    setter(filteredText === '' ? '0' : filteredText)
  };

  const onResult = () => {
    const a1 = parseFloat(valA1)
    const a2 = parseFloat(valA2)
    const b1 = parseFloat(valB1)
    const b2 = parseFloat(valB2)

    if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || a2 <= 0 || b2 <= 0) {
      setResult("入力が無効です。有効な数値を入力してください。価格が 0 より大きく、数量が 1 以上であることを確認してください。")
      return
    }

    const qualityA = a1 / a2
    const qualityB = b1 / b2

    if (qualityA > qualityB) {
      setResult("Aの方がコスト効率が良いです。")
    } else if (qualityA < qualityB) {
      setResult("Bの方がコスト効率が良いです。")
    } else {
      setResult("A と B はどちらも費用対効果は同じです。")
    }

  }

  const onReset = () => {
    setValA1(initialVal)
    setValA2(initialVal)
    setValB1(initialVal)
    setValB2(initialVal)
  }

  return (
    <>
      <div> コスパ計算 </div>
      <div>
        <span> A : </span>
        <input
          type="number"
          onChange={handleChangeText(setValA1)}
          value={valA1}
        />
        <span> 単位（g,ml） </span>
        <input
          type="number"
          onChange={handleChangeText(setValA2)}
          value={valA2}
        />
        <span> 円 </span>
      </div>
      <div>
        <span> B : </span>
        <input
          type="number"
          onChange={handleChangeText(setValB1)}
          value={valB1}
        />
        <span> 単位（g,ml） </span>
        <input
          type="number"
          onChange={handleChangeText(setValB2)}
          value={valB2}
        />
        <span> 円 </span>
      </div>
      <div>
        <button onClick={onResult}> Result </button>
      </div>
      <>
        {result ? <p>{result}</p> : null}
      </>
      <div>
        <button onClick={onReset}> Reset </button>
      </div>
    </>
  )
}

export default App
