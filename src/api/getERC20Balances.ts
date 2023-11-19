import {TokenBalancesResponse} from "alchemy-sdk"

export const getERC20Balances = async ({
    address,
}: {
    address: string
}): Promise<TokenBalancesResponse> => {
    const requestBody = JSON.stringify({
        jsonrpc: "2.0",
        id: 0,
        method: "alchemy_getTokenBalances",
        params: [address],
    })

    const requestHeaders = new Headers()
    requestHeaders.append("Content-Type", "application/json")

    const requestOptions = {
        method: "POST",
        headers: requestHeaders,
        body: requestBody,
    }

    const res = await fetch(import.meta.env.VITE_MAINNET_RPC_URL, requestOptions)

    if (!res.ok) {
        throw {
            status: res.status,
            statusText: res.statusText,
        }
    }

    const data = await res.json()
    return data.result
}
