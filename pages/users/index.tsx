import CardListUser from "@/components/CardListUser";
import Header from "@/components/Header";
import Navsidebar from "@/components/Navsidebar";
import { useTheme } from "@/context/theme";
import { User } from "@prisma/client";
import axios from "axios";
import { getSession } from "next-auth/react";
interface Props {
    user: {
        name: string,
        email: string,
        image: string
    }

    listUsers: [User]

}

export default function Users(props: Props) {

    const { theme, toggleTheme } = useTheme();

    console.log(props.listUsers)

    return (
        <div className="flex">


            <Navsidebar
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <div className="w-full">
                <Header theme={theme} user={props.user} />
                <div className="px-24 pt-20">
                    <div className={` w-full flex flex-col gap border rounded-xl ${theme === 'light' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-700 text-zinc-100'}`}>
                        <div className={`grid h-14 items-center`} style={{ gridTemplateColumns: '1fr 2fr 2fr 2fr 1fr' }}>
                            <h1 className="text-center">
                                Foto
                            </h1>
                            <h1>
                                Nome
                            </h1>
                            <h1>
                                Data de criação
                            </h1>
                            <h1>
                                Email
                            </h1>
                            <h1>

                            </h1>
                        </div>
                        <hr/>
                        {props.listUsers?.map((user_, index) => (
                          <CardListUser key={index} user={user_}/>
                        ))}

                    </div>
                </div>
            </div>

            {/* Nesse trecho listar os usuário e no item de listar tem opção de editar e deletar */}
        </div>
    )
}
export async function getServerSideProps(ctx: any) {
    const { host } = ctx.req.headers;
    const session = await getSession(ctx)
    const listUsers = await axios.get(`http://${host}/api/users`)

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
                    user,
                    listUsers: listUsers.data
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