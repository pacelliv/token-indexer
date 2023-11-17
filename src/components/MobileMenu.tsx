import {Dispatch} from "react"
import {NavLink} from "react-router-dom"

type MobileMenuProps = {
    open: boolean
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({open, setOpen}: MobileMenuProps) => {
    return (
        <section
            onClick={() => setOpen((prevState) => !prevState)}
            id="mobile-menu"
            className={`top-68 absolute ${
                open ? "" : "hidden"
            } w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl`}
        >
            <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        `w-full py-6 text-center ${
                            isActive ? "text-teal-700" : null
                        } hover:opacity-90`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="erc20-indexer"
                    className={({isActive}) =>
                        `w-full py-6 text-center ${
                            isActive ? "text-teal-700" : null
                        } hover:opacity-90`
                    }
                >
                    ERC20 Indexer
                </NavLink>
                <NavLink
                    to="nft-indexer"
                    className={({isActive}) =>
                        `w-full py-6 text-center ${
                            isActive ? "text-teal-700" : null
                        } hover:opacity-90`
                    }
                >
                    NFT Indexer
                </NavLink>
            </nav>
        </section>
    )
}

export default MobileMenu
