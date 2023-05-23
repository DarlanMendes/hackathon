import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHomePage() {
  const navLinks = [
    {
      title: 'Services',
      path: '',
    },
    {
      title: 'Log In ',
      path: '/login',
    },
    {
      title: 'Try it Free',
      path: '',
    },
  ];
  return (
    <header
      className="h-28 px-16 w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gradiente-1 to-gradiente-2
 
    "
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Image
          className=""
          height={110}
          width={385}
          src="/images/EventSphere.png"
          alt=""
        />
        <nav>
          <ul className="flex flex-row text-xl ">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <div
                  className={`flex items-center justify-center ${
                    idx === navLinks.length - 1 ? 'bg-gray-200/30' : ''
                  } rounded-full h-12 w-32 cursor-pointer`}
                >
                  <Link
                    href={item.path}
                    className="text-white hover:text-gray-300 font-semibold "
                  >
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
