import {useNavigate, useRouteError} from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    let status: string | undefined
    if (typeof error === "object" && error && "status" in error) {
        status = error.status?.toString()
    }

    const navigate = useNavigate()

    return (
        <div className="widescreen:section-min-height tallscreen:section-min-height mx-auto my-12 flex max-w-4xl flex-col items-center p-6">
            <h1 className="text-[7rem] font-black sm:text-[11rem]">
                <span className="text-indigo-700 dark:text-indigo-300">{status?.[0]}</span>
                <span className="text-slate-900 dark:text-white">{status?.[1]}</span>
                <span className="text-indigo-700 dark:text-indigo-300">{status?.[2]}</span>
            </h1>
            <h1 className="text-3xl font-bold">Oops! An error occured!</h1>
            <button
                className="mt-8 w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-xl text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none"
                onClick={() => navigate(0)}
            >
                Refresh Page
            </button>
        </div>
    )
}

export default Error
