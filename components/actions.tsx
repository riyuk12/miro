"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

import { toast } from "sonner"

import { useApiMutation } from "@/hooks/use-api-mutation"

import { api } from "@/convex/_generated/api"

import {Button} from "@/components/ui/button"

import { ConfirmModal } from "./confirm-modal"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Link2 } from "lucide-react"
import { Trash2 } from "lucide-react"
import { Pencil } from "lucide-react"

import { useRenameModal } from "@/store/use-rename-modal"

interface ActionProps{
    children:React.ReactNode,
    side?:DropdownMenuContentProps['side'],
    sideOffset?:DropdownMenuContentProps['sideOffset'],
    title:string,
    id:string
}

export const Action = ({children,side,sideOffset,id}:ActionProps)=>{

    const {onOpen}=useRenameModal()
    const {mutate,pending}=useApiMutation(api.board.remove)
    // console.log({children,side,sideOffset,id})

    const onCopyLink=()=>{
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
        .then(()=>toast.success("Link Copied "))
        .catch(()=>toast.error("Failed to copy link"))
    }

    const onDelete=()=>{
        
        mutate({id:id})
        .then(()=>toast.success("Board Deleted"))
        .catch(()=>toast.error("Failed to delete board"))
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
            onClick={(e)=>{
                e.stopPropagation()
            }}
            side={side}
            sideOffset={sideOffset}
            className="w-60"
            >
                <DropdownMenuItem className="p-3 cursor-pointer"
                    onClick={()=>{
                        onCopyLink()
                    }}
                >
                    <Link2  className="h-4 w-4 mr-2"/>
                        Copy board Link
                    
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer"
                    onClick={()=>{
                        onOpen(id,"untitled")
                    }}
                >
                    <Pencil  className="h-4 w-4 mr-2"/>
                        Rename board
                    
                </DropdownMenuItem>
                <ConfirmModal 
                    header="Delete Board?"
                    description="Are you sure you want to delete this board? This action cannot be undone."
                    disabled={pending}
                    onConfirm={onDelete}
                >
                    <Button className="p-3 cursor-pointer text-sm w-full justify-start"
                        variant={"ghost"}
                    >
                        <Trash2  className="h-4 w-4 mr-2"/>
                            Delete
                        
                    </Button>
                </ConfirmModal>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}