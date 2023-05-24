import Header from '@/components/Header';
import Navsidebar from '@/components/Navsidebar';
import { useTheme } from '@/context/theme';
import { getSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

interface Props {
  theme: string;
  toggleTheme: (theme: string) => void;
}
export default function User(props: Props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="grid" style={{ gridTemplateColumns: '2fr 10fr' }}>
      <Navsidebar theme={theme} toggleTheme={toggleTheme} />
      <main className="bg-zinc-100 ">
        <Header theme={theme} user={props.user} />
        <div className=" px-20 static">
          <div className="h-screen bg-gray-200 mx-10 relative top-16 rounded-md">
            <div className="flex p-5">
              <Image
                height={80}
                width={80}
                src="/images/avatar.jpg.png"
                alt="dashboard"
              />
              <div className="flex-col">
                <div className="flex items-start ml-5 text-3xl font-semibold">
                  Fulano de Tal
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
            <div className="flex gap-10 pl-5 pt-10">
              <Link href="/login" className="text-base font-semibold flex gap-2">
                Inscrito
              </Link>
              <Link href="" className="text-base font-semibold flex gap-2">
                Favoritos
              </Link>
              <Link href="" className="text-base font-semibold flex gap-2">
                Realizado
              </Link>
              <Link href="" className="text-base font-semibold flex gap-2">
                Cancelado
              </Link>
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
