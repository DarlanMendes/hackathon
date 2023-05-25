import AlertDialog from '@/components/AlertDialog';
import Header from '@/components/Header';
import Navsidebar from '@/components/Navsidebar';
import { useTheme } from '@/context/theme';
import { getSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlinePlus,
    AiOutlineSync,
    AiOutlineUserAdd,
} from 'react-icons/ai';

interface Props {
    user: {
        name: string;
        email: string;
        image: string;
        password: string;
        phone: string;
    };
}

interface Props {
    theme: string;
    toggleTheme: (theme: string) => void;
}
export default function User(props: Props) {
    const { theme, toggleTheme } = useTheme();
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);
    const [avatar, setAvatar] = useState(props.user.image);
    const [password, setPassword] = useState(props.user.password);
    const [showDialog, setShowDialog] = useState(false);
    const hancleDeleteAvatar = (event: any) => {
        event.preventDefault();
        if (avatar !== null) {
            setAvatar('');
        }
    };
    const handleAddAvatar = () => {};
    const handleUserUpdate = () => {};
    const handleUserDelete = () => {
        setShowDialog(true);
    };
    const handleDelete = () => {
      console.log('delete')
        setShowDialog(false);
    };
    return (
        <div className="grid" style={{ gridTemplateColumns: '2fr 10fr' }}>
            <Navsidebar theme={theme} toggleTheme={toggleTheme} />
            <main className="bg-zinc-100 ">
                <Header theme={theme} user={props.user} />
                <div className=" px-20 pb-20 static">
                    <h2 className="text-3xl font-semibold pl-14 mt-10">
                        Minha conta
                    </h2>
                    <div className="bg-gray-200 mx-10 relative top-10 rounded-md">
                        <div className="flex p-5 justify-between">
                            <div className="flex ">
                                <div className="flex-col">
                                    <div className="flex items-start ml-5 text-3xl font-semibold">
                                        {props.user.name}
                                    </div>
                                    <div className="flex items-start ml-5 text-xl font-semibold mt-1 text-gray-subtitle">
                                        FullStack - Mat. 005544
                                    </div>
                                    <div className="flex items-center ml-5 font-semibold mt-1 text-gray-subtitle">
                                        <Image
                                            className="mr-3"
                                            height={15}
                                            width={15}
                                            src="/images/Group.png"
                                            alt="dashboard"
                                        />
                                        Digital College Aldeota
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 mr-5 items-center">
                                <button className="w-32 h-14 flex items-center  p-3 bg-gray-500/70 hover:bg-gray-500 rounded-xl gap-3 pl-5 text-white  ">
                                    <AiOutlineEdit /> Editar
                                </button>

                                <button
                                    onClick={handleUserDelete}
                                    className="w-32 h-14 flex items-center  p-3 bg-red-500/70 hover:bg-red-500 rounded-xl gap-3 pl-5 text-white  "
                                >
                                    <AiOutlineDelete /> Excluir
                                </button>
                                {showDialog && (
                                    <AlertDialog
                                        menssage={
                                            'Deseja realmente deseja excluir o seu cadastro ?'
                                        }
                                        handleClickClose={() =>
                                            setShowDialog(false)
                                        }
                                        handleClickOpen={function (): void {
                                            throw new Error(
                                                'Function not implemented.'
                                            );
                                        }}
                                        handleClickConfirm={handleDelete}
                                        open={showDialog}
                                        titulo={'Confirmação'}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="h-1 w-11/12 m-auto bg-slate-600/30 rounded-full"></div>
                        <div className="">
                            <form>
                                <div className="flex ">
                                    <div className="flex flex-col items-center pt-5 px-16">
                                        <Image
                                            className="rounded-full mb-5"
                                            height={150}
                                            width={150}
                                            src={
                                                avatar !== null
                                                    ? avatar
                                                    : '/images/avatar.png'
                                            }
                                            alt=""
                                        />
                                        <div className="flex gap-6 ">
                                            <button onClick={handleAddAvatar}>
                                                {avatar === null ? (
                                                    <AiOutlineUserAdd
                                                        fontSize={35}
                                                        color="grey"
                                                    />
                                                ) : (
                                                    <AiOutlineSync
                                                        fontSize={35}
                                                        color="grey"
                                                    />
                                                )}
                                            </button>
                                            {avatar !== null && (
                                                <button
                                                    onClick={hancleDeleteAvatar}
                                                >
                                                    <AiOutlineDelete
                                                        fontSize={35}
                                                        color="#ec7576"
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col pl-14 mb-10 pt-5 pr-14">
                                    <label className="text-lg font-semibold">
                                        Nome
                                    </label>
                                    <input
                                        className=" w-11/12 h-12 outline-none border-2 rounded border-gray-600/30 p-2 mt-3 bg-gray-200"
                                        id="name"
                                        name="Nome"
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <label className="text-lg pt-5 font-semibold">
                                        Email
                                    </label>
                                    <input
                                        className=" w-11/12 h-12 outline-none border-2 rounded border-gray-600/30 p-2 mt-3 bg-gray-200"
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <label className="text-lg pt-5 font-semibold">
                                        Senha
                                    </label>
                                    <input
                                        className=" w-11/12 h-12 outline-none border-2 rounded border-gray-600/30 p-2 mt-3 bg-gray-200"
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <div className="flex justify-center ">
                                        <button
                                            onClick={handleUserUpdate}
                                            type="submit"
                                            className="w-32 h-14 mt-5 mb-10 flex justify-center items-center bg-blue-700/70 hover:bg-blue-700 rounded-xl text-white  "
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx);
    if (session) {
        const { user } = session;
        if (!user) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        } else {
            return {
                props: {
                    user,
                },
            };
        }
    } else {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}
