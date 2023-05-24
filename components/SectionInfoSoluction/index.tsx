import Image from 'next/image';
import Link from 'next/link';

export default function SectionInfoSoluction() {
  return (
    <section className="bg-background-gray">
      <div className="max-w-screen-2xl mx-auto flex justify-around">
        <Image
          className="mt-2"
          height={600}
          width={546}
          src="/images/imagesection3.svg"
          alt=""
        />
        <div className="flex flex-col mt-36 mr-16">
          <div className="flex justify-center text-6xl leading-snug text-color-gray-title mb-6">
            A solução
            <br /> perfeita para a<br /> sua empresa!
          </div>
          <div className="text-color-gray-title text-center text-lg mt-5 leading-snug">
            Seus eventos nunca foram tão fácil de organizar!
          </div>
          <div className="flex justify-center items-center border-none w-48 h-16 bg-gradiente-1 mt-10 mb-20 rounded-full">
            <Link href="" className="text-xl text-white">
              Teste agora
            </Link>
          </div>
          <div className="flex gap-2">
            <Image
              className="mb-40"
              height={29}
              width={145}
              src="/images/star.png"
              alt=""
            />
            <div className="text-color-gray-title">
            <b>3.6 millions</b> calls completed<br/> with a 96% star rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
