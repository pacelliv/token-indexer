import {OwnedNftsResponse} from "../types/types"

type Params = {
    address: string
}

export const getNFTs = async ({address}: Params) => {
    const URL = `https://eth-mainnet.g.alchemy.com/nft/v3/${
        import.meta.env.VITE_MAINNET_API_KEY
    }/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const requestOptions = {
        method: "GET",
        headers,
    }

    const res = await fetch(URL, requestOptions)

    if (!res.ok) {
        throw {
            status: res.status,
            statusText: res.statusText,
        }
    }

    const data: OwnedNftsResponse = await res.json()
    return data
}
