export default (str: string) => {
    return str.replace(/^0+(?!\.|$)/, '')
}