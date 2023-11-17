export const getClass = (index: number) => {
    if (index % 5 === 0) {
        return "col-span-2 row-span-2"
    } else if (index % 6 === 0) {
        return "col-span-2"
    }

    return ""
}
