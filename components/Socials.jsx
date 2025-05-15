import Link from "next/link";
import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri'
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/anubhavpandya7080/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill/>
      </Link>
      <Link href={'https://github.com/ANUBHAV9598'} className="hover:text-accent transition-all duration-300">
        <RiGithubFill/>
      </Link>
      <Link href={'https://leetcode.com/u/PANDYA_ANUBHAV7080/'} className="hover:text-accent transition-all duration-300">
        <SiLeetcode />
      </Link>
    </div>
  );
};

export default Socials;
