import "./index.css"
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom"
import Home from "./pages/Home"
import ERC20Indexer, {action as erc20IndexerAction} from "./pages/ERC20Indexer"
import NFTIndexer, {action as nftIndexerAction} from "./pages/NFTIndexer"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import Error from "./components/Error"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
                path="erc20-indexer"
                element={<ERC20Indexer />}
                errorElement={<Error />}
                action={erc20IndexerAction}
            />
            <Route
                path="nft-indexer"
                element={<NFTIndexer />}
                errorElement={<Error />}
                action={nftIndexerAction}
            />
            <Route path="*" element={<NotFound />} />
        </Route>,
    ),
)

const App = () => {
    return <RouterProvider router={router} />
}

export default App
