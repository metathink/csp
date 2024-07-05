export default ({ result }: {
    result: {
        cost: string
        quality: {
            A: {
                qualityValue: string
                costPerUnit: string
            }
            B: {
                qualityValue: string
                costPerUnit: string
            }
        }
    }
}) => {
    return (
        <>
            {result.cost.length > 0 && (
                <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                    <h3>費用対効果の結果</h3>
                    <p>{result.cost}</p>
                    <div style={{ marginTop: '10px' }}>
                        <h4>品質評価</h4>
                        <p><strong>1円あたりの価値 - A:</strong> {result.quality.A.qualityValue} </p>
                        <p><strong>1個あたりの価値 - A:</strong> {result.quality.A.costPerUnit} 円</p>
                        <p><strong>1円あたりの価値 - B:</strong> {result.quality.B.qualityValue} </p>
                        <p><strong>1個あたりの価値 - A:</strong> {result.quality.B.costPerUnit} 円</p>
                    </div>
                </div>
            )}
        </>
    )
}