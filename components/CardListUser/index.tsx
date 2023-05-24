import { User } from "@prisma/client"

interface Props{
    user:
        User
    
}
export default function CardListUser(props:Props){
    return(
        <div className="h-12 items-center grid" style={{gridTemplateColumns:"80x 80px 1fr 1fr 1fr 1fr"}}>


            <h1 className ="border text-xs">{props.user.name} </h1>
            <span className ="border text-xs" >{props.user.name} </span>
            <h1>{props.user.name} </h1>
            <h1 className ="border text-xs">{props.user.name} </h1>
            <span className ="border text-xs" >{props.user.name} </span>
            <h1>{props.user.name} </h1>
        </div>
    )
}