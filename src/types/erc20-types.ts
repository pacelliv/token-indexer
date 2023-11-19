export interface Result {
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}

export interface TokenMetadata {
    id: number
    jsonrpc: string
    result: Result
}

export interface TokenBalance {
    balance: string | null
    decimals?: number
}

export interface TokenData {
    // `tokenBalance` is treated as `string` in `TokenData`
    // but in `TokenBalancesResponse is treated as `string | null`
    tokenBalance: TokenBalance
    contractAddress: string
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}