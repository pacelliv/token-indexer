import {useMemo} from "react"
import {useReactTable, getCoreRowModel, flexRender, createColumnHelper} from "@tanstack/react-table"
import {Utils} from "alchemy-sdk"
import {formatBalance} from "../utils/formatBalance"
import {FaExternalLinkAlt} from "react-icons/fa"
import {TokenData} from "../types/erc20-types"

const TokenBalancesTable = ({tokenData}: {tokenData: TokenData[]}) => {
    const data: TokenData[] = useMemo(() => tokenData, [])
    const columnHelper = createColumnHelper<TokenData>()

    const columns = [
        columnHelper.accessor("symbol", {
            header: () => "Symbol",
            cell: (info) => info.getValue()?.slice(0, 5),
        }),
        columnHelper.accessor("name", {
            header: () => "Name",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("logo", {
            header: () => "Logo",
            cell: (info) => {
                const url = info.getValue()
                if (url) {
                    return (
                        <img className="mx-auto h-6 w-6" src={info.getValue()} alt="token logo" />
                    )
                }
                return <div className="mx-auto h-6 w-6 rounded-full bg-blue-700" />
            },
        }),
        columnHelper.accessor("contractAddress", {
            header: () => "Address",
            cell: (info) => {
                const contractAddress = info.getValue()
                return (
                    <div className="flex w-full items-center justify-center hover:text-indigo-600">
                        <a
                            className="flex items-center gap-2"
                            href={`https://etherscan.io/token/${contractAddress}`}
                        >
                            {contractAddress.slice(0, 6)}...{contractAddress.slice(-5)}
                            <FaExternalLinkAlt className="inline text-xs" />
                        </a>
                    </div>
                )
            },
        }),
        columnHelper.accessor("decimals", {
            header: () => "Decimals",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("tokenBalance", {
            header: () => "Balance",
            cell: (info) => {
                const balance = info.getValue().balance
                const decimals = info.getValue().decimals
                return formatBalance(Utils.formatUnits(balance as string, decimals))
            },
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <section className="mt-12 w-full overflow-x-auto rounded">
            <table className="w-full text-base text-black dark:text-gray-100">
                <thead className="bg-slate-800 text-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className="border border-stone-800" key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className="border border-stone-600 p-3 text-center text-base font-medium"
                                    key={header.id}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            className="border border-stone-800 hover:bg-gray-200 hover:dark:bg-gray-950"
                            key={row.id}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    className="border border-stone-800 px-3 py-3 text-center"
                                    key={cell.id}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default TokenBalancesTable
