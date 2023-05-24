import Header from "@/components/Header"
import Navsidebar from "@/components/Navsidebar"
import { useTheme } from "@/context/theme"
import axios from "axios"
import { useState } from "react"


interface Props {
    user: {
        id: string,
        name: string,
        email: string,
        phonenumber: string,
        photo: string,
        role: string
    }

}
export default function UsersDetailedEdit(props: Props) {
    const { theme, toggleTheme } = useTheme()

    const [name, setName] = useState<string>(props.user.name)
    const [email, setEmail] = useState<string>(props.user.email)
    const [phonenumber, setPhonenumber] = useState<string>(props.user.phonenumber)
    const [image, setImage] = useState<string>(props.user.photo)
    const [role, setRole] = useState<string>(props.user.role)

    let user = { name, email, image }
    console.log(user)
    return (


        <div className="flex">
            <Navsidebar
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <div className="w-full flex flex-col ">
                <Header theme={theme} user={user} />
                <div className="px-20 pt-12 text-4xl">
                    Editar usuário
                    <div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export const getServerSideProps = async (ctx: any) => {
    const { id } = ctx.query
    const { host } = ctx.req.headers
    const user = await axios.get(`http://${host}/api/users/${id}`)

    return {
        props: {
            user: user.data
        }
    }
}