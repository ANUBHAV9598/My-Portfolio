import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import {BsArrowRight} from 'react-icons/bs';
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/p1.png',
          link: 'https://anubhav9598.github.io/Obys-Clone/',
        },
        {
          title: 'title',
          path: '/p2.png',
          link: 'https://anubhav9598.github.io/Refokus-Clone/',
        },
        {
          title: 'title',
          path: '/p3.png',
          link: 'https://la-restaurante-anubhav.netlify.app/',
        },
        {
          title: 'title',
          path: '/p4.png',
          link: '/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative overflow-hidden rounded-lg flex items-center justify-center group">
                    <Link href={image.link} className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                        <Image 
                          src={image.path} 
                          alt={image.title} 
                          width={500} 
                          height={300} 
                        />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part-1 */}
                          <div className="delay-100 text-[2.3vw] lg:text-base">LIVE</div>
                          {/* title part-2 */}
                          <div className="text-[2.3vw] lg:text-base translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                          {/* icon */}
                          <div className="text-[3vw] lg:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
