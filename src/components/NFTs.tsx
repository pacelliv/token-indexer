import {OwnedNftsResponse} from "../types/nft-types"
import {getClass} from "../utils/getClass"
import Image from "./Image"

const NFTs = ({tokenData}: {tokenData: OwnedNftsResponse}) => {
    console.log(tokenData)
    const nfts = tokenData.ownedNfts.map((nft, i) => (
        <Image
            key={i}
            imageUrl={nft.image.cachedUrl as string}
            contractAddress={nft.contract.address}
            tokenId={nft.tokenId}
            className={getClass(i)}
        />
    ))

    return <section className="custom-grid mt-12 w-full">{nfts}</section>
}

export default NFTs
