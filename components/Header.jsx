import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-2 py-6">
          {/* logo */}
          <Link href={'/'}>
            <h2 className="text-2xl font-bold">Anubhav <span className="font-light">Pandya</span> <span className="text-accent">.</span></h2>
          </Link>
          {/* socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
