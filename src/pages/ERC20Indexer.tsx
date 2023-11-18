import {getERC20Balances} from "../api/getERC20Balances"
import {getTokenMetadata} from "../api/getTokenMetadata"
import {TokenBalancesResponse, Utils} from "alchemy-sdk"
import {ActionFunctionArgs, useActionData, useNavigation} from "react-router-dom"
import {TokenData, TokenMetadata} from "../types/erc20-types"
import Placeholder from "../components/Placeholder"
import NoBalancePlaceholder from "../components/NoBalancePlaceholder"
import Loader from "../components/Loader"
import TokenBalancesTable from "../components/TokenBalancesTable"
import SearchBar from "../components/SearchBar"

export const action = async ({request}: ActionFunctionArgs) => {
    const address = (await request.formData()).get("address")
    const tokenData: TokenData[] = []

    if (typeof address === "string") {
        const tokenBalances: TokenBalancesResponse = await getERC20Balances({address})
        const tokenMetadata: TokenMetadata[] = await getTokenMetadata(tokenBalances)

        for (let i = 0; i < tokenBalances.tokenBalances.length; i++) {
            tokenData.push({
                name: tokenMetadata[i].result.name ? tokenMetadata[i].result.name : "",
                symbol: tokenMetadata[i].result.symbol,
                logo: tokenMetadata[i].result.logo,
                decimals: tokenMetadata[i].result.decimals,
                contractAddress: tokenBalances.tokenBalances[i].contractAddress,
                tokenBalance: {
                    balance: tokenBalances.tokenBalances[i].tokenBalance,
                    decimals: tokenMetadata[i].result.decimals,
                },
            })
        }
    }

    return tokenData
}

const ERC20Indexer = () => {
    const navigation = useNavigation()
    const actionData = useActionData() as TokenData[] | undefined

    const filteredData = actionData?.filter((data) => {
        const formattedBalance = Utils.formatUnits(
            data.tokenBalance.balance as string,
            data.decimals,
        )
        return Number(formattedBalance) > 0
    })

    return (
        <section className="widescreen:section-min-height tallscreen:section-min-height mx-auto my-12 flex max-w-4xl flex-col items-center p-6">
            <SearchBar />
            {navigation.state === "idle" && typeof filteredData === "undefined" ? (
                <Placeholder />
            ) : null}
            {navigation.state === "idle" &&
            typeof filteredData != "undefined" &&
            filteredData.length > 0 ? (
                <TokenBalancesTable tokenData={filteredData} />
            ) : null}
            {navigation.state === "submitting" ? <Loader /> : null}
            {navigation.state === "idle" && filteredData?.length === 0 ? (
                <NoBalancePlaceholder message={"token"} />
            ) : null}
        </section>
    )
}

export default ERC20Indexer
