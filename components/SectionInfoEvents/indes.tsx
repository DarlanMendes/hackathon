import Image from 'next/image';
import Link from 'next/link';

export default function SectionInfoEvents() {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col items-center relative m-auto">
      <Image
        src="/images/Rectangle11.png"
        className="absolute right-16 -top-20"
        width={150}
        height={250}
        alt="retangulo"
      />

      <div className="w-24 h-1 rounded-full bg-gray-400/50 mt-24"></div>

      <div className="flex justify-center text-5xl text-color-gray-title mt-8 mb-7">
        Gerencie os seus eventos
      </div>
      <div className="text-gray-400/80 text-center w-1/2 text-xl mt-6 leading-snug">
        Com a eventsphere você pode criar, gerenciar e ainda<br/> ver uma visão
        analítica dos eventos da sua empresa. Tudo isso de forma<br/> intuitiva e
        editável.
      </div>
      <div className="flex justify-center items-center w-60 h-16 border-none mt-20 mb-20 bg-gray-400/30 rounded-full">
        <Link href="" className="text-xl text-green-500">
          Saiba Mais
        </Link>
      </div>
      <Image
        src="/images/dashborad.svg"
        className="w-full px-16 mb-40
        "
        width={676}
        height={962}
        alt="retangulo"
      />
    </section>
  );
}
