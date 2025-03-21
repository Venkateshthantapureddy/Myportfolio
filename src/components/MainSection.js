import React, { useEffect, useRef } from 'react';
import './MainSection.css';
import Typed from 'typed.js';
import { motion, useInView } from 'framer-motion';
import k1 from '../assets/images/v2.jpg';
import resume from '../assets/images/resume.pdf';  

const MainSection = () => {
  const typedElement = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Java Developer", "Student At RAGHU"],
      typeSpeed: 50,
    };
    const typed = new Typed(typedElement.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <main ref={sectionRef}>
      <div className="firstsection">
        <motion.div 
          className="leftsection anime"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Hi, My Name is <span className="gold">Venkatesh Thantapureddy</span>
          <div>and I am a passionate</div>
          <span className="gold z-0" id="element" ref={typedElement}></span>
          <div className="buttons">
            <a href={resume} download="VenkateshThantapureddy-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn">Download Resume</button>
            </a>
            <a href="https://github.com/Venkateshthantapureddy" target="_blank" rel="noopener noreferrer">
              <button className="btn">Visit Github</button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="rightsection"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <img className='rounded-lg' src={k1} alt="Venky" />
        </motion.div>
      </div>
    </main>
  );
};

export default MainSection;
