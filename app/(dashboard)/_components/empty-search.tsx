import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center pointer-events-none select-none">
            <Image 
            height={140}
            width={140}
            alt="Empty Search"
            src="/empty-search.svg"
            className="pointer-events-none"/>

            <h2 className="text-2xl font-semibold mt-6 pointer-events-none">
                No results found!
            </h2>
            <p className="text-muted-foreground text-sm mt-2 pointer-events-none">
                Try searching for something else
            </p>
        </div>
    )
}