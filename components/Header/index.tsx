import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {BsSearch} from "react-icons/bs"
interface Props {
    user: {
        name: string,
        email: string,
        image: string
    }
    theme:string
}
export default function Header(props: Props) {
    return (
        <main className={`flex  justify-between items-center h-24 bg-${props.theme==='light'?'zinc-50':'zinc-700'} pr-10 pl-44`}>
            <div className="relative flex items-center">
                <input  className="h-12 bg-neutral-100 rounded-md w-[360px]"/>
                <button  className="absolute h-8 w-[36] flex items-center right-2 gap-2 px-2 rounded-md bg-white">
                  <BsSearch/>  Buscar
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button className="w-32  flex items-center  p-3 bg-blue-700 rounded-xl gap-3 pl-5 text-white  ">
                    <AiOutlinePlus /> Criar
                </button>
                <div className="h-12 flex flex-col justify-center">
                    <IconContext.Provider value={{ className: "text-2xl text-slate-500" }}>
                        <IoMdNotificationsOutline />
                    </IconContext.Provider>
                </div>
                <div >
                    <img src={props.user.image} className="h-12 w-12 rounded-full bg-blue-600" />
                </div>
            </div>
        </main>
    )
}