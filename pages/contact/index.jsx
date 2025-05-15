import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your emailjs service ID,template ID and public key
    const serviceId = 'service_gbilt8m';
    const templateId = 'template_6h87sya';
    const publicKey = 'HRRZOOuARL4QEltzE';

    // Create a new object that contains dynamic template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Anubhav',
      message: message,
    };

    // Send the email using EmailJs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        // Clear status message after 3 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 3000);
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        // Clear status message after 3 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 3000);
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-2 lg:mb-12 text-center"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={handleSubmit}
          >
            {/* group */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex-1 relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  className="input pl-12 focus:border-accent transition-all duration-300" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  className="input pl-12 focus:border-accent transition-all duration-300" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-accent" />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="textarea pl-12 min-h-[150px] focus:border-accent transition-all duration-300" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <button 
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <FiSend className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
              >
                {status.message}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
