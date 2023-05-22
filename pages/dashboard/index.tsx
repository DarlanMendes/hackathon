import Header from '@/components/Header'
import Navsidebar from '@/components/Navsidebar'
import { getSession, signOut } from 'next-auth/react'
import { useTheme } from '../../context/theme';

interface Props {
    user: {
        name: string,
        email: string,
        image: string
    }
}
export default function Dashboard(props: Props) {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='grid' style={{ gridTemplateColumns: "2fr 10fr" }}>
            <Navsidebar 
            theme={theme}
            toggleTheme={toggleTheme}
            />



            <main className="bg-zinc-100 ">
                <Header theme={theme} user={props.user} />
                <div className=" pt-11 pl-64">
                    <h1 className="text-4xl font-bold">
                        Dashboard
                    </h1>

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