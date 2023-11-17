import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
