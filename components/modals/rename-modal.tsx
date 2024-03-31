"use client"

import { FormEvent, FormEventHandler, useEffect,useState } from "react"

import { toast } from "sonner"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useRenameModal } from "@/store/use-rename-modal"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"

export const RenameModal = () => {

    const {mutate,pending}=useApiMutation(api.board.update)

    const {
        isOpen,
        initialValues,
        onClose
    }=useRenameModal()

    const [title,setTitle]=useState(initialValues.title)

    useEffect(()=>{
        setTitle(initialValues.title)
    },[initialValues.title])

    const onSubmit:FormEventHandler<HTMLFormElement>=(e)=>{
        e.preventDefault()
        mutate({
            id:initialValues.id,
            title,
        }).then(()=>{
            toast.success("Board renamed")
            onClose()
        })
        .catch(()=>{
            toast.error("Failed to rename board")
            onClose()
        })
    }

    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    enter new title for the board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                    disabled={pending}
                    required
                    maxLength={100}
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Board Title"
                    />
                    
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button disabled={pending} type="submit">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
                
            </DialogContent>
        </Dialog>
    )
}