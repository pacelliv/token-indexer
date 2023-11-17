import {BsSearch} from "react-icons/bs"

const Placeholder = () => {
    return (
        <div className="my-12 flex w-full flex-grow flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-zinc-600 p-12 text-gray-500 opacity-40 dark:text-gray-400">
            <BsSearch className="text-7xl" />
            <span className="text-4xl">Search</span>
            <p className="text-2xl">You haven't made a query yet</p>
        </div>
    )
}

export default Placeholder
