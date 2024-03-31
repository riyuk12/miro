"use client"

import { LucideIcon } from "lucide-react"

import { Hint } from "@/components/hint"

import { Button } from "@/components/ui/button"


interface ToolButtonProps {
    label:string;
    icon:LucideIcon;
    onClick:()=>void;
    isActive?:boolean;
    isDisabled?:boolean;
}

export const ToolButton =({label,
    icon:Icon,
    isActive,
    onClick,
    isDisabled,}:ToolButtonProps)=>{
        return(
            <Hint label={label} side="right" sideOffset={14}>
                <Button
                    disabled={isDisabled}
                    onClick={onClick}
                    size={"icon"}
                    variant={isActive?"boardActive":"board"}
                >
                    <Icon size={24} className="text-gray-500"/>
                </Button>
            </Hint>
        )
}