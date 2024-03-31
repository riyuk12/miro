import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"

export interface HintProps {
    label: string,
    children: React.ReactNode, 
    side?: "left" | "right" | "top" | "bottom",
    align?: "start" | "center" | "end",
    sideOffset?: number,
    alignOffset?: number,
}

export const Hint = ({
label,
children,
side,
align,
sideOffset,
alignOffset,
}:HintProps)=>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-white bg-[#000000dd] border-[#000000dd]"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}>
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}