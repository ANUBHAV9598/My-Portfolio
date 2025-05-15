import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {RxCrop,RxPencil2,RxDesktop,RxReader,RxRocket,RxArrowTopRight} from "react-icons/rx";
import {FreeMode,Pagination} from "swiper/modules";


const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I create visually appealing and memorable brand identities that align with your business goals and resonate with your target audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I create modern, user-focused designs that are clean, intuitive, and visually engaging.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I develop responsive, performance-driven, and user-friendly web applications that are tailored to your business needs.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I write compelling and engaging copy that resonates with your audience and drives conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I optimize your website for search engines to improve visibility and drive organic traffic.',
  },
];

const ServiceSlider = () => {
  return (
  <Swiper 
    breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:15,
      },
      640:{
        slidesPerView:3,
        spaceBetween:15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable:true,
    }}
    modules={[FreeMode,Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item,index)=>{
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg lg:px-6 px-3 lg:py-8 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="lg:text-4xl text-2xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <div className="lg:mb-8 mb-2">
                  <div className="mb-2 lg:text-lg text-sm">{item.title}</div>
                  <p className="max-w-[300px] text-sm lg:text-sm leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-lg md:text-2xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
