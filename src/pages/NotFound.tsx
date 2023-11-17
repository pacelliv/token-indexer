import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <main className="relative mx-auto mb-28 mt-6 max-w-4xl grow">
            <section className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">
                <h1 className="text-[11rem] font-black sm:text-[15rem]">
                    <span className="text-indigo-700 dark:text-indigo-300">4</span>
                    <span className="text-slate-900 dark:text-white">0</span>
                    <span className="text-indigo-700 dark:text-indigo-300">4</span>
                </h1>
                <h1 className="text-3xl font-bold">
                    Oops! The page you are looking for was not found!
                </h1>
                <Link
                    className="my-8 rounded-md border border-none bg-teal-700 px-4 py-3 text-base font-bold text-white transition-colors hover:bg-teal-600"
                    to="/"
                >
                    Take me back home
                </Link>
            </section>
        </main>
    )
}

export default NotFound
