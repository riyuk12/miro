"use client"

import Image from "next/image"
import { Hint } from "@/components/hint";
import { useOrganization,useOrganizationList } from "@clerk/nextjs"
import {cn} from "@/lib/utils"

interface ItemProps{
    id: string,
    name: string,
    imageUrl: string,
}

export const Item=({id,name,imageUrl}:ItemProps)=>{
    const {organization}=useOrganization();
    const {setActive}=useOrganizationList();

    const isActive=organization?.id===id;

    const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };
    
    return(
        <Hint label={name} side="right" align="start" alignOffset={18}>

            <div className="aspect-square relative">
                <Image
                fill
                src={imageUrl}
                alt={name}
                onClick={onClick}
                className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 transition duration-300 ease-in-out",
                isActive?"opacity-100":"opacity-55")}
                />
            </div>
        </Hint>
    )
}