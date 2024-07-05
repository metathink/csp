interface ValueObject {
    [key: string]: string;
}

export default ({ name, value, onChange }: {
    name: string,
    value: ValueObject,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
    <div className="block">
        <span> {name} : </span>
        <input
            type="number"
            name={`${name}1Val`}
            value={value[`${name}1Val`]}
            onChange={onChange}
            min="0" />
        <span> 単位(g,ml) </span>
        <input
            type="number"
            name={`${name}2Val`}
            value={value[`${name}2Val`]}
            onChange={onChange}
            min="0"
        />
        <span> 円 </span>
        <span> 内包個数 </span>
        <input
            type="number"
            name={`${name}3Val`}
            value={value[`${name}3Val`]}
            onChange={onChange}
            min="0"
        />
    </div>
)