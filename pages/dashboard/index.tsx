import Header from '@/components/Header'
import Navsidebar from '@/components/Navsidebar'
import { getSession, signOut } from 'next-auth/react'
import { useTheme } from '../../context/theme';
import Overview from '@/components/Overview';
interface Props {
    user: {
        name: string,
        email: string,
        image: string
    }
}
export default function Dashboard(props: Props) {
    const { theme, toggleTheme } = useTheme();
    let overviewArray = [{ titulo: 'Eventos realizados', qtd: '7', porcentagem: '37,8', periodo: 'nesta semana', img: './check.svg' },
    { titulo: 'Participantes', qtd: '120', porcentagem: '37,8', periodo: 'nesta semana', img: './users.svg' },
    { titulo: 'Taxa de ocupação', qtd: '60%', porcentagem: '37,8', periodo: 'nesta semana', img: './grafic.svg' }
    ]
    return (
        <div className='grid' style={{ gridTemplateColumns: "2fr 10fr" }}>
            <Navsidebar
                theme={theme}
                toggleTheme={toggleTheme}
            />



            <main className={`${theme === 'light' ? 'bg-zinc-100' : 'bg-zinc-400'}`} >
                <Header theme={theme} user={props.user} />
                <div className=" pt-11  flex flex-col justify-center ">
                    <h1 className={`text-4xl font-bold ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-50'}`}>
                        Dashboard
                    </h1>
                    <div className={`py-7 px-6 shadow-xl w-[62vw] ${theme === 'light' ? 'bg-zinc-50' : 'bg-zinc-500'} rounded-lg mt-6`}>
                        <div className='flex justify-between mb-6'>
                            
                                <h1 className={`text-xl font-bold flex items-center gap-2 ${theme==='light'?'text-zinc-700':''}`}> <div className="bg-green-300 h-8 w-4 rounded-md"></div>Overview</h1>
                          

                            <select className='shadow-md'>
                                <option>Hoje</option>
                                <option>Nesta semana</option>
                                <option>Neste mês</option>
                            </select>
                        </div>
                        <div className='flex gap-3'>
                            {overviewArray.map((card, index) => (
                                <Overview key={index} card={card} />
                            ))}
                        </div>



                    </div>

                    <button onClick={() => signOut()}>Sign Out </button>
                </div>

            </main>
        </div>

    )
}
export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)
    if (session) {
        const { user } = session
        if (!user) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false
                }
            }
        } else {
            return {
                props: {
                    user
                }
            }
        }
    } else {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }

    }
}   