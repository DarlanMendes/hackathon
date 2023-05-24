// Page / Component desenvolvido por João Pedro ---------------------
import { signIn } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { IconContext } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineLockClosed } from 'react-icons/hi';
import Image from 'next/image';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface Props {
  host: string;
}
export default function Signup(props: Props) {
  const router = useRouter();
  console.log(`http://${props.host}/api/users`);

  const handleSignup = async () => {
    const userCreated = await axios.post(`http://${props.host}/api/users`, {
      name: 'Joao',
      email: 'joaocarlo@gmail.com',
      phonenumber: '85999999999',
      photo: '/images/dots.png',
    });
    console.log(userCreated)
    
  };

  return (
    <div className="max-w-screen-1xl mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col px-6  lg:px-8 z-50 bg-white">
          <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              width={200}
              height={100}
              className="mx-auto"
              src="/images/logo-dark.png.png"
              alt="logo"
            />
            <h2 className="mt-5  text-4xl font-semibold leading-4 text-center tracking-tight text-gray-900">
              Cadastre-se
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-1" action="#" method="POST">
              <div>
                <p className="p-10px font-semibold">Entre com sua conta:</p>
              </div>
              <div className="border-b-2 w-full pb-8  ">
                <button
                  type="submit"
                  className="border-2 border-gray-200 flex w-full justify-center items-center rounded-xl  bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => signIn('google')}
                >
                  <span className="text-3xl">
                    <FcGoogle />
                  </span>
                  <span className=" pl-1 text-xl"> Google </span>
                </button>
              </div>

              <div>
                <p className="p-10px font-semibold">
                  Ou continue com o seu endereço de e-mail:
                </p>
              </div>

              <div className="relative ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 absolute top-3
                    left-3"
                >
                  <IconContext.Provider
                    value={{
                      color: 'grey',
                      className: 'mt-1.5 global-class-name',
                    }}
                  >
                    <AiOutlineMail />
                  </IconContext.Provider>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="block py-3 w-full rounded-md border-0 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600  font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
              <div className="relative ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 absolute top-3
                    left-3"
                >
                  <IconContext.Provider
                    value={{
                      color: 'grey',
                      className: 'mt-1.5 global-class-name',
                    }}
                  >
                    <AiOutlineMail />
                  </IconContext.Provider>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Confirme seu Email"
                    required
                    className="block py-3 w-full rounded-md border-0 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600  font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 absolute top-5 left-3"
                  >
                    <IconContext.Provider
                      value={{
                        color: 'grey',
                        className: 'mt-1.5 global-class-name',
                      }}
                    >
                      <HiOutlineLockClosed />
                    </IconContext.Provider>
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Senha"
                    required
                    className="block w-full rounded-md border-0 py-3 bg-zinc-100 shadow-sm ring-1 ring-inset pl-8  ring-grey-600 placeholder:text-grey-600 font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  text-zinc-200 sm:leading-6 "
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 absolute top-5 left-3"
                  >
                    <IconContext.Provider
                      value={{
                        color: 'grey',
                        className: 'mt-1.5 global-class-name',
                      }}
                    >
                      <HiOutlineLockClosed />
                    </IconContext.Provider>
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Confirme sua Senha"
                    required
                    className="block w-full rounded-md border-0 py-3 bg-zinc-100 shadow-sm ring-1 ring-inset pl-8  ring-grey-600 placeholder:text-grey-600 font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  text-zinc-200 sm:leading-6 "
                  />
                </div>
              </div>

              <div>
                <button
                  
                  type="submit"
                  className="flex mb-5 rounded-xl w-full justify-center  bg-blue-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cadastrar
                </button>
              </div>
            </form>
            <button onClick={handleSignup}>teste</button>

          </div>
        </div>
        <Image
          width={600}
          height={700}
          className=""
          src="/images/imagelogin.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const { host } = ctx.req.headers;

  if (session) {
    const { user } = session;

    if (user) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      };
    }
  } else {
    return {
      props: { host },
    };
  }
}
