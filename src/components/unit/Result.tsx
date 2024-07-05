export default ({ result }: {
    result: {
        cost: string
        quality: {
            A: string
            B: string
        }
    }
}) => {
    return (
        <>
            {result.cost.length > 1 && (
                <div>
                    <p>{result.cost}</p>
                    <p>1円あたりの価値 - A: {result.quality.A} 単位/円, B: {result.quality.B} 単位/円</p>
                </div>
            )}
        </>
    )
}