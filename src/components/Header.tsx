import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"
import {useState} from "react"
import {Link} from "react-router-dom"

const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className="sticky top-0 z-10 bg-teal-700 text-white">
            <section className="mx-auto flex max-w-4xl items-center justify-between p-5">
                <h1 className="text-3xl font-medium">
                    <Link to="/">Indexeum</Link>
                </h1>
                <div>
                    <button
                        onClick={() => setOpen((prevState) => !prevState)}
                        id="hamburger-button"
                        className={`tex-3xl relative h-8 w-8 cursor-pointer md:hidden ${
                            open ? "toggle-btn" : ""
                        }`}
                    >
                        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
                    </button>
                    <Navbar />
                </div>
            </section>
            <MobileMenu open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header
