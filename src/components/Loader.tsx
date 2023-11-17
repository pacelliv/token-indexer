import {Triangle} from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="my-12 flex w-full flex-grow flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-zinc-600 p-12 text-gray-500 opacity-40 dark:text-gray-400">
            <Triangle
                height="120"
                width="120"
                color="limegreen"
                ariaLabel="triangle-loading"
                visible={true}
            />
            <p className="text-2xl">Fetching balances...</p>
        </div>
    )
}

export default Loader
