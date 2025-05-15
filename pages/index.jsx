import {fadeIn} from '../variants';
import {motion} from 'framer-motion';
import Avatar from '../components/Avatar';
import ProjectsBtn from '../components/ProjectsBtn';
import ParticlesContainer from '../components/ParticlesContainer';

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center mx-auto text-center pt-[25vh] xl:pt-[30vh] xl:text-left">
          {/* Title */}
          <motion.h1 
            variants={fadeIn('down',0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="text-2xl xl:text-4xl font-bold mb-4 xl:mb-12 xl:max-w-[35vw]"
          >
            Transforming innovative concepts into {' '} 
            <span className="text-accent">seamless digital solutions.</span> 
          </motion.h1>
          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down',0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="max-w-sm text-sm xl:text-[1vw] mx-auto mb-10 xl:max-w-lg xl:mx-0 xl:mb-10"
            >
              Driven web developer with a strong command of data structures and a focus on building 
              high-performance, scalable applications. I thrive on solving complex problems and staying 
              ahead of tech trends to deliver impactful digital solutions.
            </motion.p>
          {/* Buttons */}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Bg-Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer/>
        {/* avatar  */}
        <motion.div
          variants={fadeIn('up',0.5)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"  
          transition={{duration:1, ease:'easeInOut'}}
          className="w-full h-full max-w-[550px] max-h-[450px] absolute lg:bottom-4 lg:right-[6%] z-10"
        >
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
