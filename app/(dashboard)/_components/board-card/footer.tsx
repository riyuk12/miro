import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
    
    title: string;
    isFavorite: boolean;
    authorLabel: string;
    createdAtLabel: string;
    onClick: () => void;
    disabled: boolean;
}


export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled

}:FooterProps) => {

    const handleClick = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => { 
        event.stopPropagation()
        event.preventDefault()
        onClick()
        // console.log("clicked")
    }

    return(
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">
                {authorLabel} - {createdAtLabel}
            </p>
            <button 
                disabled={disabled}
                onClick={handleClick}
                className={cn(" opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
                {"cursor-not-allowed opacity-75":disabled})}
            >
                {/* "text-blue-950 fill-blue-950":isFavorite,
                        "text-gray-300 fill-gray-300":!isFavorite, */}
                <Star
                    className={cn("w-4 h-4",
                        isFavorite && "text-blue-950 fill-blue-950",
                        !isFavorite && "text-gray-300 fill-gray-300",
                    )}
                />
            </button>
        </div>
    )
}