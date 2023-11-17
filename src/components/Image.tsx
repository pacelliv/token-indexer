const Image = ({
    className,
    imageUrl,
    contractAddress,
    tokenId,
}: {
    className: string
    imageUrl: string
    contractAddress: string
    tokenId: string
}) => {
    return (
        <div className={`${className} relative bg-indigo-950 text-center`}>
            <a href={`https://etherscan.io/nft/${contractAddress}/${tokenId}`} target="_blank">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        className="h-full w-full object-cover transition-opacity hover:opacity-80"
                    />
                ) : (
                    <span className="text-slate-200">Image not found</span>
                )}
            </a>
        </div>
    )
}

export default Image
