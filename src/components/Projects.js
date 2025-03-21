import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import froast from "../assets/images/froast.png";
import home from "../assets/images/home.jpeg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      url: froast,
      desc: "Froasty Treats is a full-stack MERN application that is highly responsive and reliable.",
      projectname: "Froasty Treats",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-yellow-500" },
      ],
      liveDemo: "https://froasty-treats.onrender.com/",
      codeLink: "https://github.com/Venkateshthantapureddy/froasty-treats",
    },
    {
      url: home,
      desc: "Students Reserved Bank is a full-stack MERN application that is highly responsive and reliable.",
      projectname: "Students Reserved Bank",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-yellow-500" },
      ],
      liveDemo: "https://students-reserved-bank-aes2.onrender.com",
      codeLink: "https://github.com/Venkateshthantapureddy/bank-app",
    },
    {
      url: "https://ichef.bbci.co.uk/news/1024/branded_news/1766/production/_99709950_english.jpg",
      desc: "A Netflix clone that allows users to stream movies and TV shows, featuring user accounts, watchlists, and playback functionality.",
      projectname: "Netflix Clone",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
      liveDemo: "https://netflix-clone-demo.com/",
      codeLink: "https://github.com/your-repo/netflix-clone",
    },
    {
      url: "https://img.freepik.com/free-photo/3d-illustration-computer-monitor-login-screen_107791-16390.jpg?ga=GA1.1.186094321.1741544070&semt=ais_hybrid",
      desc: "Password Strength Checker is a web app that evaluates the strength of passwords and provides suggestions for improvement.",
      projectname: "Password Strength Checker",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
      liveDemo: "https://password-checker-online.netlify.app/",
      codeLink: "https://github.com/Venkateshthantapureddy/VirtuNexa-project-3",
    },
    {
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/21593.jpg",
      desc: "A car promotions website that showcases the latest models and offers from Corso-Car.",
      projectname: "Corso-Car promotions",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
      liveDemo: "https://corso-brand-new-cars.netlify.app/",
      codeLink: "https://github.com/Venkateshthantapureddy/Cars-Page",
    },
    {
      url: "https://t4.ftcdn.net/jpg/11/53/88/39/240_F_1153883910_IzvqrtyCWAH4rHGklLDYfx3onC5k3uMx.jpg",
      desc: "A job portal that connects job seekers with employers, featuring job listings, applications, and user accounts.",
      projectname: "Job Portal",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
      liveDemo: "https://venkatesh-job-portal.netlify.app/",
      codeLink: "https://github.com/Venkateshthantapureddy/VirtuNexa",
    },
  ];

  return (
    <>
      <h1 className="mt-10 text-center p-1 rounded-lg bg-gray-300 text-2xl text-black font-bold w-1/2 mx-auto shadow-md shadow-gray-500">
        My Projects
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-black text-white">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center space-x-6 bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Tilt className="w-full md:w-1/3">
              <img
                src={project.url}
                alt={project.projectname || "Project Image"}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </Tilt>
            <div className="w-full md:w-2/3 text-left">
              <h2 className="text-2xl text-yellow-300 font-bold mt-2 mb-2">
                {project.projectname || "Project"}
              </h2>
              <p className="text-gray-200 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className={`${tech.color} hover:text-white transition-colors duration-300`}>
                      {tech.icon}
                    </span>
                    <span className="text-gray-200 hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Projects;
