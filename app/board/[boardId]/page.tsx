import { Canvas } from "./_components/canvas"

import { Room } from "@/components/room"
import { LoadingCanvas } from "./_components/canvas-loading"


interface BoardIdProps{
    params:{
        boardId:string
    }

}
const BoardIdPage=({params}:BoardIdProps)=>{
    //testing loading screen
    // return <LoadingCanvas/>


    return (
        <Room roomId={params.boardId} fallback={<LoadingCanvas />}>
            <Canvas boardId={params.boardId} />
        </Room>
        

    )
}

export default BoardIdPage
