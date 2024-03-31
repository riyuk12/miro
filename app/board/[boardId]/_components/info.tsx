"use client"

import { useQuery } from "convex/react";

import { Hint } from "@/components/hint";

import Image from "next/image";
import Link from "next/link";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";
import { Action } from "@/components/actions";
import { Menu } from "lucide-react";


interface InfoProps{
    boardId:string;
}

const font=Poppins({subsets:["latin"],weight:["600"]})

const TabSeparator=()=>{
    return(
        <div className="text-neutral-300 px-1.5">
            |
        </div>
    )
}

export const Info=({boardId}:InfoProps)=>{

    const {onOpen}=useRenameModal()

    const data =useQuery(api.board.get ,{
        id:boardId as Id<"boards">
    })

    if(!data){
        return Info.Skeleton()
    }

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint label="Go to Boards" side="bottom" sideOffset={10}>    
                <Button asChild variant={"board"} className="px-2">
                <Link href={"/"}>
                        <Image src={"/logo.svg"} alt="Logo" height={40} width={40} />
                        <span className={cn("font-semibold text-xl ml-2 text-black",font.className)}>Boardy</span>
                </Link>
                </Button>
            </Hint>
            <TabSeparator />
            {/* title:v.string(),
        orgId:v.string(),
        authorId:v.string(),
        authorName:v.string(),
        imageUrl:v.string(), */}
            
            <Hint label="Rename" side="bottom" sideOffset={10}>    
                <Button  variant={"board"} className="px-2" onClick={()=>onOpen(data._id,data.title)}>
                            {data.title}
                </Button>
            </Hint>
            <TabSeparator />
            <Button variant={"board"} className="text-base font-normal">
                {data.authorName}
            </Button>
            <TabSeparator />
            <Action id={data._id} title={data.title} sideOffset={10} side="bottom">

                <div>
                    <Hint label="Main Menu" sideOffset={10} side="bottom">
                        <Button size={"icon"} variant={"board"}>
                            <Menu />
                        </Button>
                    </Hint>
                </div>
            </Action>
            
        </div>
    )
}

Info.Skeleton=function InfoSkeleton() {
    return(
        <div className="absolute top-2 left-2 bg-slate-200 rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]">
            <Skeleton  className="h-full w-full bg-muted-400"/>
        </div>
    )
}