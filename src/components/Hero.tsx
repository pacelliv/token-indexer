const Hero = () => {
    return (
        <section
            id="hero"
            className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-between p-6 sm:flex-row"
        >
            <article className="sm:w-1/2">
                <h2 className="max-w-md text-center text-6xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-6xl">
                    We Serve Data{" "}
                    <span className="text-indigo-700 dark:text-indigo-300">Like No One Else</span>{" "}
                    Can
                </h2>
                <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                    We're building fast and reliable indexers for all Ethereum users. For today and
                    beyond.
                </p>
                <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                    Use Indexeum
                </p>
            </article>
            <img
                className="w-1/2"
                src="./ethereum-eth-logo-colored.svg"
                alt="Ethereum Colored Logo"
            />
        </section>
    )
}

export default Hero
