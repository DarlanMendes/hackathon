import Link from 'next/link';
import BannerSvg from '/images/banner.svg';
import Image from 'next/image';
export default function BannerHomePage() {
  return (
    <div className="bg-gradient-to-r from-gradiente-1 to-gradiente-2">
      <section className="flex ml-20  ">
        <div className="flex gap-60 max-w-screen-2xl m-auto">
        <div className="flex flex-col">
          <div className="text-white text-7xl mt-72 leading-snug">
            Crie o seu
            <br /> evento
          </div>
          <div className="text-white text-xl mt-6 leading-snug">
            De forma simples, organizada e acessível <br />
            para os seus colaboradores e parceiros
          </div>
          <div className="flex justify-center items-center border-none w-48 h-14 mb-80 bg-button-green mt-10 rounded-full">
            <Link href="" className="text-xl text-white">
              Teste agora
            </Link>
          </div>
        </div>

        <Image
          src="/images/banner.svg"
          className=""
          width={500}
          height={600}
          alt="Banner"
        />
        </div>
      </section>
    </div>
  );
}
