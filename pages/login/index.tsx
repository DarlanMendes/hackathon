// Page / Component desenvolvido por João Pedro ---------------------
import { signIn } from "next-auth/react"
import { getSession } from 'next-auth/react'
interface Props {
    user: {
        name: string,
        email: string,
        image: string
    }
}
export default function Login(props: Props) {
    return (
        <div>
            

            <button onClick={() => signIn('google')}>Login botao</button>
        </div>
    )
}
export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)
    if (session) {
        const { user } = session

        if (user) {
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false
                }
            }
        }

        
        
        
    }else{
        return{
            props:{

            }
        }
    }
}