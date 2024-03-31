"use client"
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { error } from "console";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoard = () => {
    const router=useRouter()
    const {organization} = useOrganization()
    const {mutate,pending}=useApiMutation(api.board.create)

    const onClick=()=>{
        if(!organization){
            return
        }
        // console.log(organization.id)
        mutate({
            orgId:organization.id,
            title:"untitled"
        }).then((id)=>{
            toast.success("Board created successfully")
            router.push(`/board/${id}`)
        }).catch((error)=>toast.error("Failed to create board"))
    }
    return (
        <div className="h-full w-full flex flex-col items-center justify-center ">
            <Image 
            height={140}
            width={140}
            alt="Empty Favorites"
            src="/note.svg"
            className="pointer-events-none select-none"/>

            <h2 className="text-2xl font-semibold mt-6 pointer-events-none select-none">
                Create your first board
            </h2>
            <p className="text-muted-foreground text-sm mt-2 pointer-events-none select-none">
                Start by creating a board for your team
            </p>
            <div className="mt-6">
                <Button size="lg" disabled={pending} onClick={onClick} >
                    Create Board
                </Button>

            </div>
        </div>
    )
}