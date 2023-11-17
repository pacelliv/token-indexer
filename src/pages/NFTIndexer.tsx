import {getNFTs} from "../api/getNFTs"
import {OwnedNftsResponse} from "../types/types"
import {ActionFunctionArgs, useActionData, useNavigation} from "react-router-dom"
import Placeholder from "../components/Placeholder"
import NoBalancePlaceholder from "../components/NoBalancePlaceholder"
import Loader from "../components/Loader"
import SearchBar from "../components/SearchBar"
import NFTs from "../components/NFTs"

export const action = async ({request}: ActionFunctionArgs) => {
    const address = (await request.formData()).get("address")

    if (typeof address === "string") {
        const tokenData = await getNFTs({address})
        return tokenData
    }

    return null
}

const NFTIndexer = () => {
    const navigation = useNavigation()
    const actionData = useActionData() as OwnedNftsResponse | null

    return (
        <section className="widescreen:section-min-height tallscreen:section-min-height mx-auto my-12 flex max-w-4xl flex-col items-center p-6">
            <SearchBar />
            {navigation.state === "idle" && typeof actionData === "undefined" ? (
                <Placeholder />
            ) : null}
            {navigation.state === "idle" &&
            typeof actionData != "undefined" &&
            (actionData?.totalCount as number) > 0 ? (
                <NFTs tokenData={actionData as OwnedNftsResponse} />
            ) : null}
            {navigation.state === "submitting" ? <Loader /> : null}
            {navigation.state === "idle" && actionData?.totalCount === 0 ? (
                <NoBalancePlaceholder message={"NFT"} />
            ) : null}
        </section>
    )
}

export default NFTIndexer
