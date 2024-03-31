"use client"

import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"
import { Hint } from "@/components/hint"
import { Dialog,DialogContent,DialogTrigger } from "@radix-ui/react-dialog"

export const NewButton=()=>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="create organization" side="right" align="start" alignOffset={18}>

                    <button className="flex items-center justify-center w-full h-full bg-white/25 opacity-60 hover:opacity-100 rounded-md transition">
                        <Plus size={24} />
                    </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}