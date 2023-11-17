import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <NavLink
                to="erc20-indexer"
                className={({isActive}) =>
                    `relative hover:opacity-90 ${
                        isActive &&
                        "before:absolute before:top-12 before:h-1 before:w-full before:bg-red-200 before:content-['']"
                    }`
                }
            >
                ERC20 Indexer
            </NavLink>
            <NavLink
                to="nft-indexer"
                className={({isActive}) =>
                    `relative hover:opacity-90 ${
                        isActive &&
                        "before:absolute before:top-12 before:h-1 before:w-full before:bg-red-200 before:content-['']"
                    }`
                }
            >
                NFT Indexer
            </NavLink>
        </nav>
    )
}

export default Navbar
