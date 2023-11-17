import {TokenBalancesResponse} from "alchemy-sdk"

type Result = {
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}

type TokenMetadata = {
    id: number
    jsonrpc: string
    result: Result
}

export const getTokenMetadata = async (erc20Balances: TokenBalancesResponse) => {
    const batchRequests = JSON.stringify(
        erc20Balances.tokenBalances.map((balance, i) => ({
            jsonrpc: "2.0",
            id: i,
            method: "alchemy_getTokenMetadata",
            params: [balance.contractAddress],
        })),
    )

    const requestHeaders = new Headers()
    requestHeaders.append("Content-Type", "application/json")

    const requestOptions = {
        method: "POST",
        headers: requestHeaders,
        body: batchRequests,
    }

    const res = await fetch(import.meta.env.VITE_MAINNET_RPC_URL, requestOptions)

    if (!res.ok) {
        throw {
            status: res.status,
            statusText: res.statusText,
        }
    }

    const data = await res.json()
    return data as TokenMetadata[]
}
