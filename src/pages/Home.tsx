import Hero from "../components/Hero"
import Indexers from "../components/Indexers"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

const Home = () => {
    return (
        <main className="mx-auto max-w-4xl">
            <Hero />
            <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
            <Indexers />
            <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
            <Testimonials />
            <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
            <Contact />
        </main>
    )
}

export default Home
