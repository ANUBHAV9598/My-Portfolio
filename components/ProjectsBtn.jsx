import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
      <div className="mx-auto xl:mx-0 flex items-center justify-center">
        <Link href={'/work'} className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[135px] lg:h-[135px] flex items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group">
          <Image 
            src={'/rounded-text.png'} 
            width={141} 
            height={148} 
            alt='' 
            className="w-full h-full animate-spin-slow max-w-[85px] max-h-[90px] sm:max-w-[100px] sm:max-h-[105px] md:max-w-[120px] md:max-h-[125px] lg:max-w-[100px] lg:max-h-[100px]" 
          />
          <HiArrowRight className="absolute text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-white/80 group-hover:text-accent transition-all duration-300 group-hover:translate-x-2"/>
        </Link>
      </div>
    );
};

export default ProjectsBtn;
