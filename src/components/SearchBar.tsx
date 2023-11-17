import {Form} from "react-router-dom"

const SearchBar = () => {
    return (
        <>
            <h1 className="mb-8 text-3xl font-bold">Search By Address</h1>
            <Form
                method="post"
                className="flex w-full justify-center gap-2 rounded-full border-none bg-gray-300 p-1.5 dark:bg-white" /*onSubmit={(handleSubmit(onSubmit))}*/
            >
                <input
                    className=" w-10/12 rounded-full bg-gray-300 px-3 py-2 text-black dark:bg-white"
                    type="text"
                    placeholder="0x123aBc..."
                    name="address"
                    required
                />

                <input
                    className="w-2/12 cursor-pointer rounded-full bg-indigo-700 px-3 py-2 text-base font-medium text-white transition-colors hover:bg-indigo-600"
                    type="submit"
                    value="Search"
                />
            </Form>
        </>
    )
}

export default SearchBar
