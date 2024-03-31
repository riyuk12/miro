import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center pointer-events-none select-none">
            <Image 
            height={140}
            width={140}
            alt="Empty Favorites"
            src="/empty-favorites.svg"
            className="pointer-events-none"/>

            <h2 className="text-2xl font-semibold mt-6 pointer-events-none">
                No favorite boards!
            </h2>
            <p className="text-muted-foreground text-sm mt-2 pointer-events-none">
                Try favoriting a board to see it here
            </p>
        </div>
    )
}