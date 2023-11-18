export type Result = {
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}

export type TokenMetadata = {
    id: number
    jsonrpc: string
    result: Result
}

export type TokenBalance = {
    balance: string | null
    decimals?: number
}

export type TokenData = {
    // `tokenBalance` is treated as `string` in `TokenData`
    // but in `TokenBalancesResponse is treated as `string | null`
    tokenBalance: TokenBalance
    contractAddress: string
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}