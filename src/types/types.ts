import {OwnedNft} from "alchemy-sdk"

interface ImagesUrl {
    cachedUrl: string
    contentType: string
    originalUrl: string
    pngUrl: string
    size: number
    thumbnailUrl: string
}

interface OwnedNfts extends OwnedNft {
    image: ImagesUrl
}

interface ValidAt {
    blockHash: string
    blockNumber: number
    blockTimestamp: string
}

export interface OwnedNftsResponse {
    readonly ownedNfts: OwnedNfts[]
    readonly pageKey?: string
    readonly totalCount: number
    readonly validAt: ValidAt
}
