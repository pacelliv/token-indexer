import {Link} from "react-router-dom"

const Indexers = () => {
    return (
        <section
            id="indexers"
            className="widescreen:section-min-height tallscreen:section-min-height mt-12 scroll-mt-20 p-6"
        >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Our Indexers
            </h2>
            <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
                <Link
                    className="w-2/3 rounded-3xl border border-solid border-slate-900 bg-white shadow-xl transition-colors hover:bg-zinc-100 dark:border-gray-100 dark:bg-black dark:hover:bg-zinc-950 sm:w-5/6"
                    to="erc20-indexer"
                >
                    <li className="flex flex-col items-center px-2 py-6">
                        <img src="./tokens.svg" alt="Tokens" className="mb-6 w-1/2" />
                        <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                            ERC-20 Indexer
                        </h3>
                        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400">
                            Query any Ethereum address for its ERC-20 balances.
                        </p>
                    </li>
                </Link>
                <Link
                    className="w-2/3 rounded-3xl border border-solid border-slate-900 bg-white shadow-xl transition-colors hover:bg-zinc-100 dark:border-gray-100 dark:bg-black dark:hover:bg-zinc-950 sm:w-5/6"
                    to="nft-indexer"
                >
                    <li className="flex flex-col items-center px-2 py-6">
                        <img src="./nfts-ethereum.webp" alt="Tokens" className="mb-6 w-1/2" />
                        <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                            NFT Indexer
                        </h3>
                        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400">
                            Query any Ethereum address for its NFT balances.
                        </p>
                    </li>
                </Link>
            </ul>
        </section>
    )
}

export default Indexers
