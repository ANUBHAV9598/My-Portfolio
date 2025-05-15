import {useState} from 'react';
import CP from '../../public/cplusplus.svg';
import TS from '../../public/typescript.svg';
import JS from '../../public/javascript.svg';
import HTML from '../../public/html5.svg';
import CSS from '../../public/css3.svg';
import React from '../../public/reactJs.svg';
import Next from '../../public/nextjs.svg';
import Java from '../../public/java.svg';
import Figma from '../../public/figma.svg';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import CountUp from 'react-countup';
import Image from 'next/image';
import Framer from '../../public/framer.svg';
import GSAP from '../../public/gsap.svg';
import Tailwind from '../../public/tailwind.svg';
import SQL from '../../public/sql.svg';
import Git from '../../public/git.svg';
import GitHub from '../../public/github.svg';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <Image key="cpp" src={CP} alt="C++" width={30} height={30} />,
          <Image key="java" src={Java} alt="Java" width={30} height={30} />,
          <Image key="html" src={HTML} alt="HTML" width={30} height={30} />,
          <Image key="css" src={CSS} alt="CSS" width={30} height={30} />,
          <Image key="js" src={JS} alt="Javascript" width={30} height={30} />,
          <Image key="ts" src={TS} alt="Typescript" width={30} height={30} />,
        ],
      },
      {
        title: 'Frontend Development',
        icons: [
          <Image key="react" src={React} alt="React" width={30} height={30} />,
          <Image key="next" src={Next} alt="Next.js" width={30} height={30} />,
          <Image key="framer" src={Framer} alt="Framer" width={30} height={30} />,
          <Image key="gsap" src={GSAP} alt="GSAP" width={30} height={30} />,
          <Image key="tailwind" src={Tailwind} alt="Tailwind" width={30} height={30} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <Image key="figma" src={Figma} alt="Figma" width={25} height={25} />,
        ],
      },
      {
        title: 'Database',
        icons: [
          <Image key="sql" src={SQL} alt="SQL" width={50} height={50} />,
        ],
      },
      {
        title: 'Version Control',
        icons: [
          <Image key="git" src={Git} alt="Git" width={30} height={30} />,
          <Image key="github" src={GitHub} alt="GitHub" width={30} height={30} />,
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B.Tech - Lovely Professional University, Punjab, India',
        stage: '2021 - 2025',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles/>
      <motion.div 
        variants={fadeIn('right',0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar/>
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('right',0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='h2'
          >
            Compelling <span className='text-accent'> narratives </span> drive exceptional design.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right',0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='max-w-[500px] text-xs md:text-[1vw] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Over the past 3 years, I&apos;ve worked as a frontend developer, collaborating remotely with agencies and startups to build user-focused digital products. I&apos;ve had the opportunity to work alongside talented teams, contributing to projects that span both business and consumer applications.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right',0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex xl:gap-x-6 xl:mb-0'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-xl xl:text-2xl font-extrabold text-accent'>
                  <CountUp start={0} end={3} duration={5} /> + 
                </div>
                <div className='relative left-0 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2'>Years of experience</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-xl xl:text-2xl font-extrabold text-accent'>
                  <CountUp start={0} end={25} duration={5} /> + 
                </div>
                <div className='relative left-0 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2'>Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left',0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item,itemIndex)=>{
              return (
                <div 
                  key={itemIndex} 
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
                  onClick={()=>setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item,itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon,itemIndex) => {
                      return (
                        <div key={itemIndex} className='text-2xl text-white'>
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
