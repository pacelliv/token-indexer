import {MdOutlineMoneyOff} from "react-icons/md"

type Params = {
    message: string
}

const NoBalancePlaceholder = ({message}: Params) => {
    return (
        <div className="my-12 flex w-full flex-grow flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-zinc-600 p-12 text-gray-500 opacity-40 dark:text-gray-400">
            <MdOutlineMoneyOff className="text-7xl" />
            <span className="text-4xl">Oops!</span>
            <p className="text-2xl">You own no {message}</p>
        </div>
    )
}

export default NoBalancePlaceholder
