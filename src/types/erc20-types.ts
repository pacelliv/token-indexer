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
    tokenBalance: TokenBalance
    contractAddress: string
    decimals?: number
    logo?: string
    symbol?: string
    name?: string
}
