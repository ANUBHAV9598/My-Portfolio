import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles/>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
              variants={fadeIn('up',0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up',0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className="mb-4 text-xs lg:text-md max-w-[400px] mx-auto lg:mx-0"
            >
              I offer end-to-end frontend development and UI/UX design services focused on crafting intuitive, 
              responsive, and visually engaging digital experiences. With a strong understanding of both design 
              principles and modern web technologies, I bridge the gap between aesthetics and functionality. 
              Whether it&apos;s building seamless user interfaces or enhancing user journeys, I aim to deliver 
              solutions that are not only visually compelling but also performance-driven and user-centric.            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down',0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <ServiceSlider/> 
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Services;
