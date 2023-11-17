export const formatBalance = (balance: string): string => {
    const numBalance = Number(balance)

    if (typeof numBalance != "number") {
        return "N/A"
    }

    let formattedBalance = numBalance.toLocaleString("en-US", {maximumFractionDigits: 30})

    const [integerPart, decimalsPart] = formattedBalance.split(".")
    const trimmedDecimals = decimalsPart ? decimalsPart.slice(0, 6) : ""

    return trimmedDecimals ? `${integerPart}.${trimmedDecimals}` : integerPart
}
