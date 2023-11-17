import {FaTwitter, FaGithub} from "react-icons/fa"
import {FaHouse} from "react-icons/fa6"
import {GoMail} from "react-icons/go"

const Footer = () => {
    return (
        <footer id="footer" className="bg-teal-700 text-xl text-white">
            <section className="mx-auto flex max-w-4xl flex-col px-4 py-12 sm:flex-row sm:justify-between md:py-20">
                <div className="flex-col gap-5 md:flex">
                    <a
                        className="my-2.5 flex items-center gap-3 font-medium hover:opacity-90 md:my-0"
                        target=""
                        href="#"
                    >
                        <FaHouse /> Indexeum Labs
                    </a>
                    <a
                        className="my-2.5 flex items-center gap-3 font-medium hover:opacity-90 md:my-0"
                        target=""
                        href="www.twitter.com"
                    >
                        <FaTwitter /> Twitter
                    </a>
                    <a
                        className="my-2.5 flex items-center gap-3 font-medium hover:opacity-90 md:my-0"
                        target="_blank"
                        href="www.github.com/pacelliv"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <address>
                        <a
                            className="my-2.5 flex items-center gap-3 font-medium not-italic hover:opacity-90 md:my-0"
                            target="_blank"
                            href="mailto:inquiries@indexeumlabs.com"
                        >
                            <GoMail /> Inquiries@indexeumlabs.com
                        </a>
                    </address>
                </div>
                <nav className="hidden flex-col gap-5 md:flex" aria-label="footer">
                    <a href="#indexers" className="font-medium hover:opacity-90">
                        Indexers
                    </a>
                    <a href="#testimonials" className="font-medium hover:opacity-90">
                        Testimonials
                    </a>
                    <a href="#contact" className="font-medium hover:opacity-90">
                        Contact Us
                    </a>
                </nav>
                <div className="flex flex-col sm:gap-5">
                    <p className="text-right font-medium">
                        Copyright &copy; <span id="year">{new Date().getFullYear()}</span>
                    </p>
                    <p className="text-right font-medium">All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
