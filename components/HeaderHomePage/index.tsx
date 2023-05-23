import Image from 'next/image';

export default function HeaderHomePage() {
    return (
        <header className="h-24 bg-gradient-to-r  to-blue-500 from-cyan-500">
                  <Image
                    className="mr-3"
                    height={60}
                    width={120}
                    src="../../public/images/EventSphere.png"
                    alt=""
                  />
        </header>
    );
}