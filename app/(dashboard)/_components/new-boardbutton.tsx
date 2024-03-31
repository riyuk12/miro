"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import {useRouter} from 'next/navigation'

interface NewBoardButtonProps {
    orgId:string,
    disabled?:boolean
}

export const NewBoardButton = ({orgId,disabled}:NewBoardButtonProps) => {
  const create =useMutation(api.board.create)
  const router=useRouter()
  return (

    <button disabled={disabled} onClick={()=>{
      create(
        {
          orgId,
          title: "untitled"
        }
      ).then((id)=>{
        // console.log(id)
        toast.success('Board Created')
        router.push(`/board/${id}`)
      }).catch((e)=>{
        toast.error('Error creating board')
      })
    }}
        className={cn("col-span-1 aspect-[100/127]  bg-blue-600  text-white rounded-lg flex flex-col justify-center items-center cursor-pointer py-6",
        disabled && "opacity-75 cursor-not-allowed",
        !disabled && "hover:bg-blue-700")}
    >
        <Plus className='h-12 w-12 stroke-1' />
        <div />
        <p className='font-light mt-4' >New Board</p>
    </button>
  )
}

