import { Card, Typography } from "antd"
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
                <Card style={{ margin: 8, padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                    <Typography.Title level={3}> 結果 </Typography.Title>
                    <Typography.Text strong>{result.cost}</Typography.Text>
                    <Typography.Text strong>1円あたりの価値 - A: {result.quality.A} 単位/円, B: {result.quality.B} 単位/円</Typography.Text>
                </Card>
            )}
        </>
    )
}