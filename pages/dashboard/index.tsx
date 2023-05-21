import { getSession, signOut } from 'next-auth/react'
export default function Dashboard() {
    return (
        <div>
            <main>
                Dashboard
                <button onClick={() => signOut()}>Sign Out </button>
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
    }else{
        return{
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
        
    }
}   