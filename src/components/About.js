import React, { useRef } from 'react';
import './About.css';
import { motion, useInView } from 'framer-motion';
import k2 from '../assets/images/v1.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={aboutRef} 
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.div 
          className="about-left anime"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={k2} alt="Venky" />
        </motion.div>
        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 id="about-subtitle">About Me</h1>
          <p id="about-desc text-xl ">
          A highly motivated and skilled Computer Science Engineering student with hands-on experience in Java, Python, SQL, C, C++, and web development. Proficient in leveraging frameworks like React to build scalable and efficient applications. Experienced in the MERN stack (MongoDB, Express.js, React, Node.js) for developing full-stack web applications and well-versed in JDBC and JSP for dynamic web development. Seeking an opportunity to apply my technical expertise in a dynamic environment, contributing to innovative projects while enhancing my skill set and driving meaningful impact.
          </p>
          <h1 className='text-2xl mt-5 text-rose-600'>Education</h1>
          <div className="socialmedia-links">
            <motion.a 
              href="https://github.com/Venkateshthantapureddy" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fa-brands fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/venkateshthantapureddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>

            
          </div>
          <div className="edu-journey">
            <span>2023-2026</span>
            <p>B-tech(CSE)-Raghu Engineering<br/>College</p>
          </div>
          <div className="edu-journey">
            <span>2020-2023</span>
            <p>Diploma(CSE)-Aditya Engineering<br/>College</p>
          </div>
          <div className="edu-journey">
            <span>2010-2020</span>
            <p>Gayatri English Medium School</p>
          </div>
          <motion.div 
            className="outer-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;