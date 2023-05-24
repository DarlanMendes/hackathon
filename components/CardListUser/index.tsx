import { useTheme } from "@/context/theme";
import { User } from "@prisma/client"
import Link from "next/link";
import { IconContext } from "react-icons";

import { MdOutlineModeEditOutline } from "react-icons/md"
interface Props {
    user:
    User

}
export default function CardListUser(props: Props) {
    let Data = new Date(props.user.createdAt);
    const {theme}= useTheme()
    return (
        <div className={`flex flex-col items-center justify-center rounded-xl ${theme==='light'?'bg-zinc-100 text-zinc-900':'bg-zinc-700 text-zinc-100'}`}>
            <div className="h-18 grid gap items-center w-full pr-6 " style={{ gridTemplateColumns: " 1fr 2fr 2fr 2fr 1fr" }}>
                <div className="flex items-center justify-center" >
                    <img src={props.user.photo} className="h-12  rounded-full flex items-center justify-center" />
                </div>

                <h1 className=" h-20 flex justify-between items-center px-2 w-full overflow-hidden ">{props.user.name} </h1>
                <span className="w-full"> {Data.getDate() < 10 ? "0" + Data.getDate() : Data.getDate()}/ {Data.getMonth() < 10 ? "0" + (Data.getMonth() + 1) : Data.getMonth() + 1} / {Data.getFullYear()}</span>
                <span className=" h-20 flex justify-between items-center px-2" >{props.user.email} </span>
                <Link href={`/users/${props.user.id}`} className="px-4  w-full py-2 flex justify-center items-center bg-blue-700 rounded-xl text-slate-100 gap-2 mr-2 hover:bg-blue-500">
                    <IconContext.Provider value={{className:`${'text-zinc-100'}`}}>
                        <MdOutlineModeEditOutline size={20} />
                    </IconContext.Provider>
                    
                    Editar
                </Link>


            </div>
            <hr  className="w-10/12"/>
        </div>
    

    )
}