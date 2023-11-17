const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Testimonials
            </h2>
            <figure className="my-12">
                <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                    <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                        As a researcher, finding accurate and up-to-date data is crucial. Indexeum
                        provided me with a seamless experience in extracting ERC-20 token and NFT
                        data. The simplicity of the interface and the reliability of the information
                        have been invaluable for my work. Thank you for creating such a powerful
                        tool!
                    </p>
                    <figcaption className="mt-2 text-right text-xl italic text-white dark:text-slate-400 sm:text-2xl">
                        &#8212; Sara Milena, Researcher
                    </figcaption>
                </blockquote>
            </figure>
            <figure className="my-12">
                <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                    <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                        Being an avid Ethereum user, managing my assets across various tokens and
                        NFTs used to be a hassle. Your app changed the game for me. Now,{" "}
                        <span className="italic">I can easily and quickly</span> check all my
                        balances in one place. It's user-friendly and has become an essential part
                        of my crypto toolkit. Highly recommended!
                    </p>
                    <figcaption className="mt-2 text-right text-xl italic text-white dark:text-slate-400 sm:text-2xl">
                        &#8212; 0xEtherLover, Indexeum User
                    </figcaption>
                </blockquote>
            </figure>
            <figure className="my-12">
                <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                    <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                        Integrating your app into my design workflow was a game-changer. Your API
                        documentation was clear and straightforward, making the integration process
                        smooth. Now, I can seamlessly pull ERC-20 token and NFT data directly into
                        my designs.{" "}
                        <q className="italic">It's not just a tool; it's a creative asset</q>.
                        Thanks for making my job easier! 💯
                    </p>
                    <figcaption className="mt-2 text-right text-xl italic text-white dark:text-slate-400 sm:text-2xl">
                        &#8212; Pacelli, W3bDesign
                    </figcaption>
                </blockquote>
            </figure>
        </section>
    )
}

export default Testimonials
