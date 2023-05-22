import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLockClosed} from 'react-icons/hi'
const Login: React.FC = () => {
return (
<>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className=" 
    flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
        <img
        className="mx-auto h-10 w-auto"
        src="#"
        alt="logo qualquer"
        />
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
        Entrar 
        </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
                <p className='p-10px font-semibold'>Entre com sua conta:</p>
        </div>
        <div className='border-b-2 w-full pb-8  '>
            

            <button
            type="submit"
            className="border-2 border-gray-200 flex w-full justify-center items-center rounded-xl  bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <span className='text-3xl'><FcGoogle></FcGoogle>
            </span>
            <span className=' pl-1 text-xl'> Google </span>
            </button>
        </div>


        <div>
            <p className='p-10px font-semibold'>Ou continue com o seu endereço de e-mail:</p>
        </div>




        <div className='relative '>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 absolute top-3
            left-3" >
            <AiOutlineMail/>
            </label>
            <div className="mt-2">
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='Email'
                required
                className="block w-full rounded-md border-0 pl-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600  font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
            </div>
        </div>

        <div className='relative'>
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 absolute top-5 left-3" >
            <HiOutlineLockClosed/> 
            </label>
            
            </div>
            <div className="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder='Senha'
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset pl-8 
                ring-gray-300 placeholder:text-gray-600 font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
            </div>
        </div>

        <div>
            <button
            type="submit"
            className="flex rounded-xl w-full justify-center  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Entrar
            </button>
        </div>

        </form>

    </div>
    </div>
</>
);
};

export default Login;
