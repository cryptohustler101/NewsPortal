export function ellipseAddress(address = '', width = 7) {
    if (!address) {
        return ''
    }
    return `${address.slice(0, width)}...${address.slice(-width)}`
}
