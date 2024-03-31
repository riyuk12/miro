import { useState } from "react";
import { useMutation } from "convex/react"; 

export const useApiMutation = (mutationFunction:any) => {
    const [pending,setpending]=useState(false)
    const apiMutation=useMutation(mutationFunction)
    const mutate=async (args:any)=>{
        setpending(true)
        return apiMutation(args).finally(()=>setpending(false))
        .then((res:any)=>{return res})
        .catch((err:any)=>{throw err})
    }

    return {mutate,pending}
}