import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import c from "../assets/images/c.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import react from "../assets/images/react.png";
import java from "../assets/images/java.png";
import nodejs from "../assets/images/nodejs.png";
import mern from "../assets/images/mern.jpeg";
import cpp from "../assets/images/cpp.svg";
import sql from "../assets/images/sql.png";
import jsp from "../assets/images/jsp.jpeg"; 

import "./SecondarySection.css";

const SecondarySection = () => {
  const courses = [
    { img: c, title: "C Programming", desc: "Learned C for system programming and foundational coding concepts.", bgColor: "bg-gray-400" },
    { img: cpp, title: "CPP", desc: "Learned C++ programming for efficient programming and software development.", bgColor: "bg-pink-400" },
    { img: java, title: "Java", desc: "Learned Java for building robust, scalable applications, including web, and mobile.", bgColor: "" },
    { img: react, title: "React", desc: "Learned React for building dynamic and efficient user interfaces with components.", bgColor: "bg-indigo-400" },
    { img: html, title: "HTML", desc: "Learned HTML for structuring web content and creating responsive layouts.", bgColor: "bg-red-400" },
    { img: css, title: "CSS", desc: "Learned CSS for styling web pages, layouts, animations, and responsiveness.", bgColor: "bg-green-400" },
    { img: js, title: "JavaScript", desc: "Learned JavaScript for dynamic web development, interactivity, and event handling.", bgColor: "bg-yellow-400" },
    { img: py, title: "Python", desc: "Learned Python for versatile programming, automation, web development, and scripting.", bgColor: "bg-purple-400" },
    { img: mern, title: "MERN", desc: "Learned MERN Stack for full-stack web development, building dynamic applications.", bgColor: "bg-orange-400" },
    { img: nodejs, title: "Node.js", desc: "Learned Node.js for building fast, server-side applications using javascript.", bgColor: "bg-teal-400" },
    { img: sql, title: "Database", desc: "Learned databases for storing, managing, and retrieving structured data efficiently.", bgColor: "bg-lime-400" },
    { img: jsp, title: "JSP", desc: "Learned JSP for building dynamic web pages and integrating Java with HTML seamlessly.", bgColor: "bg-fuchsia-400" },
  ];

  return (
    <>
      <h1 className="mt-20 mx-auto text-center p-1 rounded-lg bg-gray-300 text-xl text-black font-bold w-1/2 shadow-md shadow-gray-500">
        My Skill Set
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
        {courses.map((course, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Tilt
              className="Tilt"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={400}
            >
              <motion.div 
                className={`Tilt-inner ${course.bgColor} bg-opacity-50 backdrop-blur-md rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl text-center shadow-lg shadow-gray-700 w-64 p-4`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-4 rounded-t-lg flex justify-center">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-16 h-16 object-contain rounded-b-full border-1 shadow-xl shadow-yellow-500 bounce-in"
                  />
                </div>
                <div className="p-4 text-gray-100">
                  <h2 className="text-md font-semibold">{course.title}</h2>
                  <p className="text-xs text-gray-100 mt-1">{course.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default SecondarySection;
