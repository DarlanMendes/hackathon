import Link from "next/link";
import Image from "next/image";


interface Props{
    theme:string,
    toggleTheme:(theme:string)=>void
}
export default function Navsidebar(props:Props){
    function handleTheme(){
        if(props.theme==='light'){
            props.toggleTheme('dark')
        }else{
            props.toggleTheme('light')
        }
    }
    return(
    <div className={`w-80 p-6 ${props.theme==='light'?'bg-zinc-50':'bg-zinc-700'} h-screen grid justify-center`} style={{gridTemplateRows:"140px 1fr 128px "}}>
        <div className="h-[90px] w-64 flex flex-col">
        <Image
            height={20}
            width={48}
            src="/images/logo-dark.png"
             alt="dashboard"/>
            </div>
        <div className="flex flex-col gap-8">
        <Link href="/dashboard"  className="text-base font-bold flex gap-2" style={props.theme ==='light'?{color:'#333333'}:{color:"#F5F5F5"}}>
            <Image
            height={20}
            width={22}
            src="/images/Dashboard.png"
             alt="dashboard"/>
             Dashboard
            </Link>
        <Link href="/dashboard" className="text-base font-bold flex gap-2" style={props.theme ==='light'?{color:'#333333'}:{color:"#F5F5F5"}}>
        <Image
            height={20}
            width={22}
            src="/images/Eventos.png"
             alt="dashboard"/>
            Eventos
            </Link>
        <Link href="/user" className="text-base font-bold flex gap-2" style={props.theme ==='light'?{color:'#333333'}:{color:"#F5F5F5"}}>
            Usuários
        </Link>
        <Link href="/rooms" className="text-base font-bold flex gap-2" style={props.theme ==='light'?{color:'#333333'}:{color:"#F5F5F5"}}>
            Salas
        </Link>

        </div>
        
        <div className="flex flex-col items-center  justify-center">
            <span className={`text-sm  p-4 ${props.theme==='light'?'text-zinc-700':'text-white font-semibold'}`}>Ajuda e primeiros passos</span>
            <div className={`relative flex justify-between items-center ${props.theme==='light'?'bg-slate-300':'bg-yellow-300'} rounded-2xl px-5 py-1 w-full`}>
                <div >Claro</div>
                <div>Escuro</div>
                <button className="absolute bg-white w-24 rounded-xl transition ease-linear duration-1500"
                style={props.theme==='light'?{left:4}:{transform:"translateX(140%)",color:"white",backgroundColor:"#44403c"}}
                onClick={()=>{handleTheme()}}
                >
                   {props.theme==='light'?"Claro":"Escuro"}
                </button>
            </div>
        </div>
    </div>
    )
}