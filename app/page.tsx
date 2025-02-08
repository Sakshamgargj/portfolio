"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import ContactMe from "@/components/ui/hireme";
import { Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';
import HackerScrollEffects from "@/components/ui/HackerScrollEffects";

const projects = [
  {
    title: "E-Commerce",
    description: "E-Commerce a fully responsive, high-performance, scalable platform using modern web technologies, provides a seamless shopping experience for users to browse, book, and manage categories of products effortlessly. Focused highly on efficient e-commerce platform that increased the clients online sales and enhanced user engagement.",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    techUsed: "Next JS, Redux, Tailwind CSS, Node.js, Express.js,Multer, MongoDB, Mongoose",
    github: "https://github.com/Sakshamgargj/ventesinfotech",
    date: "2024",
    video: "/video/eCommerce.mp4",
  },
  {
    title: "Resort Application",
    description: "A comprehensive digital platform designed to revolutionize the Hotel/Resort booking experience. This application enables users to browse, search, and book accommodations seamlessly, providing an intuitive interface and smooth user experience.  It also features a responsive design, ensuring accessibility across all devices, including desktops, tablets, and smartphones.",
    link: "",
    techUsed: "Next Js, Redux,Tailwind CSS, Javascript",
    github: "https://github.com/Sakshamgargj/hotel_mangement",
    date: "2024",
    video: "/video/hotelSystem.mp4",
  },
  {
    title: "Car Rental",
    description: "Car Rental a fully responsive, user-friendly website using modern web technologies, enabling users to browse, book, and manage car rentals effortlessly. Focused on intuitive design and fast load times to enhance user satisfaction and retention.",
    link: "https://car-rental-frontend-swart.vercel.app/",
    techUsed: "React, React Redux,HTML5, CSS, JavaScript, Bootstrap,Node.js, Express.js,MongoDB,Mongoose",
    github: "https://github.com/Sakshamgargj/CarRental",
    date: "2024",
    video: "/video/carRental.mp4",
  }
];

const experience = [
  {
    title: "Full Stack Developer | Paid Internship",
    description: "MYSTICGRAFIX",
    date: "Sept 2024 - Present",
    image: "/images/mysticgrafix.jpg",
    learning: "Next Js, TailwindCSS, Vercel Deployment, Git & Github, Payment System Integration, User Authentication, Building Features, Interactive UI, Handling Error, Handling Multiple Projects"
  }
];

const education = [
  {
    title: "Bachelor of Technology, Computer Science & Engineering",
    description: "Avg. SGPA-8.10",
    date: "2022-2026",
    image: "/images/miet.jpg",
  },
  {
    title: "XIIth Board Exam",
    description: "91% Marks in PCM+",
    date: "2022",
    image: "/images/Cbse.png",
  },
  {
    title: "Xth Board Exam",
    description: "88% Marks",
    date: "2020",
    image: "/images/Cbse.png",
  },
];


const navbar = [
  {
    title: "Experience",
    link: "work",
  },
  {
    title: "Projects",
    link: "projects",
  },

  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Education",
    link: "education",
  },
];


export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [hoveredSkill, setHoveredSkill] = useState("");
  const [hoveredItem, setHoveredItem] = useState("");

  const expertise = [
    { name: 'React Js', color: '#F7DF1E' },
    { name: 'Next Js', color: '#F05032' },
    { name: 'React Redux', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'React Native', color: '#3776AB' },
    { name: 'Expo', color: '#F7DF1E' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Mongoose', color: '#F05032' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Express Js', color: '#764ABC' },
    { name: 'Bootstrap', color: '#000000' },
    { name: 'Tailwind', color: '#339933' },
    { name: 'Material UI', color: '#06B6D4' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Java', color: '#F7DF1E' },
    { name: 'C', color: '#F05032' },
  ];


  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })

  const handleSubmit = (email: string) => {
    // Handle the email submission, e.g., send it to a backend API
    console.log('Submitted email:', email);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative min-h-screen w-full bg-dark-purple overflow-hidden"
        style={{
          userSelect: "none",
          background: `
          radial-gradient(circle, rgba(1, 1,90, 1) 0%, rgba(1, 1, 100, 8) 100%),
          repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0px,
            rgba(0, 0, 0, 1) 2px,
            transparent 2px,
            transparent 5px
          ),
          repeating-linear-gradient(
            to right,
            rgba(0, 0, 0, 5) 0px,
            rgba(0, 0, 0, 5) 2px,
            transparent 2px,
            transparent 5px
          )
        `,
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 0%, transparent 50%, rgba(0, 255, 0, 0.1) 100%)
          `,
            animation: "hacking-glow 5s infinite alternate",
          }}
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative min-h-screen w-full bg-dark-purple overflow-hidden"
        >
           {/*
          <HackerScrollEffects />
          rest of your content */}
          <div
            className="top-0 left-0 w-full h-full overflow-hidden"
            style={{ animation: "scrolling-text 20s linear infinite" }}
          >
            <div className="font-mono text-white/80 opacity-30">
              <p>// Code snippets scrolling across the screen...</p>
              <p>// Example: console.log(&apos;Hello, world!&apos;)</p>
              <p>// Optimizing algorithms and writing clean code...</p>
            </div>
          </div>

          <motion.div
            initial="visible"
            animate={isHidden ? 'hidden' : 'visible'}
            variants={{
              hidden: { y: '-700%' },
              visible: { y: '0%' }
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 z-50 w-full justify-center pt-3 hidden md:flex"
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="fixed top-6 -translate-x-1/2 z-50"
            >
              <motion.div
                className="relative backdrop-blur-xl bg-blue-950/30 border border-blue-800/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,255,0.1)]"
                whileHover={{
                  boxShadow: "0 8px 32px 0 rgba(0,0,255,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-2xl opacity-50"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(4,0,187,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(4,0,187,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(4,0,87,0.1) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="relative px-3 py-3 flex items-center gap-2">
                  {navbar.map((item, index) => (
                    <motion.div
                      key={item.title}
                      onHoverStart={() => setHoveredItem(item.title)}
                      onHoverEnd={() => setHoveredItem("")}
                      className="relative"
                    >
                      <ScrollLink
                        to={item.link}
                        smooth={true}
                        duration={700}
                        className="relative block px-4 py-2 text-blue-100/90 hover:text-white font-medium"
                      >
                        <AnimatePresence>
                          {hoveredItem === item.title && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-emerald-800/30 to-blue-800/40 rounded-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30
                              }}
                            />
                          )}
                        </AnimatePresence>
                        <motion.span
                          className="relative z-10 flex items-center gap-2"
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.title}
                          {hoveredItem === item.title && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              {/* <Sparkles size={14} className="text-emerald-400" /> */}
                            </motion.div>
                          )}
                        </motion.span>
                        <motion.div
                          className="absolute bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: hoveredItem === item.title ? 1 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent" /> */}

                      </ScrollLink>
                    </motion.div>
                  ))}

                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button
                        className="relative px-5 py-2 text-blue-100/90 font-medium rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-700/50 to-blue-700/50 rounded-xl"
                          whileHover={{
                            opacity: [0.5, 0.7, 0.5],
                            transition: { duration: 2, repeat: Infinity }
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(4,120,87,0.3),transparent_60%)]"
                          style={{ mixBlendMode: "plus-lighter" }}
                        />
                        <span className="relative z-10">Contact</span>
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="text-white mt-4 bg-blue-950/95 border-blue-900">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-emerald-50">Contact Me</h2>
                        <InlineWidget url="" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHidden ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-2 left-1/2 -translate-x-1/2 z-50 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsHidden(false)}
              className="p-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-white/20 text-white/80 shadow-lg"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="md:w-3/5 mx-auto px-6 md:px-0 ">
            {/* <div className="pt-10 justify-end items-center flex underline md:hidden">
              <Dialog>
                <DialogTrigger>Contact</DialogTrigger>
                <DialogContent>
                  <InlineWidget url="https://calendly.com/birdsoftware/15min" />
                </DialogContent>
              </Dialog>
            </div> */}

            <div className="md:flex md:gap-x-10 -mt-12 items-center md:pt-28">

              <div className="px-4 lg:px-10">
                <h1 className="text-3xl lg:text-5xl text-white text-center font-semibold tracking-wide">Transforming Concepts into Seamless {" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #84C1FF, #2059DD)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                     User Experiences
                  </span>
                </h1>

                <div className="flex gap-4 py-8">
                  <motion.div
                    style={{
                      display: "inline-block",
                    }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="text-4xl my-4"
                    aria-label="Code emoji animation"
                  >
                    💻
                  </motion.div>

                  <h1 className="text-lg lg:text-4xl text-white font-semibold tracking-wide">
                    <Typewriter
                      words={[
                        "Hello! I'm Saksham Garg, a web developer crafting seamless digital experiences."
                      ]}
                      cursor
                    />
                  </h1>
                </div>

              </div>

            </div>


            <Element name="resume" className=" lg:px-80  resume center-on-phone">
              <a
                href="https://drive.google.com/file/d/1ixpSa0ON_YTPXqL4Vuy0o4ZSrGgYusn4/view?usp=drivesdk"
                className="text-xl resumei rounded-xl flex justify-center p-4 bg-blue-950 text-white/70 font-semibold shadow-lg hover:shadow-xl hover:scale-110 hover:bg-blue-900/80  transform transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Resume
              </a>
            </Element>

            <div className="flex gap-6 justify-center md:mt-36">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Sakshamgargj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-500 relative group"
              >
                <Github className="w-7 h-8" />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-gray-800 text-gray-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/saksham-garg-aa5932313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400/90 hover:text-blue-400 relative group"
              >
                <Linkedin className="w-7 h-8" />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-gray-800 text-blue-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:gargsaksham092@gmail.com"
                className="text-blue-400/80 hover:text-blue-300/50 relative group"
              >
                <Mail className="w-7 h-8" />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-gray-800 text-blue-400/40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </motion.a>
            </div>

          </div>
        </motion.div>

        <div className="md:w-4/6 mx-auto px-6 md:px-0 pb-20 ">
          <div className="py-4">
            <Element name="work" className=" border-gray-800 bg-gray-950/70 rounded-xl py-12 px-6 md:px-8 lg:px-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {/* Header */}
                <h2 className="text-4xl font-bold text-blue-100 relative inline-block">
                  Work Experience
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                </h2>

                {/* Experience Cards */}
                <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
                  {experience.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group relative border border-gray-800 rounded-2xl bg-gray-900/30 p-6 transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-300/60 hover:border-blue-700 hover:shadow-blue-700"
                    >
                      {/* Gradient Effect */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-gray-900/5 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>

                      {/* Card Content */}
                      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Image */}
                        <div className="relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover w-30 h-20 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3 text-white">
                        <span className="group-hover:text-blue-500">My Learnings: </span>
                        {item.learning.split(',').map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-800 text-gray-400 hover:scale-110 transition-all px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="mt-4 flex items-center text-gray-400 text-sm">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{item.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Background Effects */}
              <div className="absolute -z-10 inset-0">
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent" />
              </div>
            </Element>

          </div>

          <Element name="projects" className="bg-gray-950/70 rounded-xl p-8 md:px-6 lg:px-8">
            <h2 className="text-3xl pt-4 text-blue-100 font-sans font-bold relative inline-block">
              <span className="text-blue-100">A Collection of </span>
              <span style={{ color: "rgba(32, 89, 161, 1)" }}>recent Projects</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-5">
              {projects.map((project) => (
                <a href={project.link} target="_blank"
                  key={project.title}
                  className="group border md:flex gap-6 border-gray-800 shadow-md hover:shadow-lg shadow-blue-300/60 hover:border-blue-700 hover:shadow-blue-500/60 rounded-lg p-4 bg-gray-900/30 transition-all duration-300"
                >
                  {/* Video Section */}
                  <div className="relative mb-4">
                    <video
                      src={project.video}
                      loop
                      autoPlay
                      muted
                      playsInline
                      className=" lg:max-w-xl  rounded-md object-cover group-hover:ring-2 hover:scale-105 ring-blue-500/30 transition-all"
                    />
                  </div>

                  <div>
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mt-1 p-2 text-xs">{project.date}</p>
                  </div>

                  <p className="text-gray-400 mt-2 font-sans font-extralight text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techUsed.split(',').map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-400 hover:scale-110 transition-all px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-6 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:scale-110 transition-all"
                    >
                      🌐 Website
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex  text-blue-400 hover:scale-110 transition-all"
                    >
                      <Github className="w-4 h-8 text-white" />
                      <p className="px-1 py-2"> GitHub</p>
                    </a>
                  </div>
                  </div>
                </a>
              ))}
            </div>
          </Element>


          <Element name="skills">
            <h2 className="text-3xl pt-10 skills text-blue-100 font-sans font-bold relative inline-block">
              Technical Expertise
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </h2>
          </Element>

          <Element name="skillss" className="mt-10 skills center-on-phone ">
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:gap-8"
              >
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    className="relative"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill("")}
                  >
                    <div
                      className={`
                    h-24 rounded-lg p-4 flex items-center justify-center
                    bg-gray-900 border border-gray-800
                    transition-all duration-300
                    ${hoveredSkill === skill.name ? '' : 'shadow-lg shadow-blue-500/20'}
                  `}
                      style={{
                        background: hoveredSkill === skill.name
                          ? undefined
                          : `linear-gradient(135deg, rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.1), rgba(0, 0, 0, 0.8))`
                      }}
                    >
                      <div className="text-center">
                        <p className="text-gray-200 font-medium mb-2">{skill.name}</p>
                        <div
                          className="h-1 w-16 mx-auto rounded"
                          style={{
                            backgroundColor: hoveredSkill === skill.name ? '#374151' : skill.color,
                            transition: 'background-color 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className={`
                    absolute inset-0 rounded-lg transition-opacity duration-300
                    ${hoveredSkill === skill.name ? 'opacity-20' : 'opacity-0'}
                  `}
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}55 0%, transparent 70%)`
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Element>

          <Element name="education" className="bg-gray-950/70 rounded-xl py-12 mt-10 px-6 md:px-8 lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Header */}
              <h2 className="text-4xl font-bold text-blue-100 relative inline-block">
                Education
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              </h2>

              {/* Education Cards */}
              <motion.div className="mt-8 grid grid-cols-1 gap-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group relative border border-gray-800 hover:border-blue-700 hover:shadow-blue-700 rounded-2xl bg-gray-900/30 p-6 transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-300/60"
                  >
                    {/* Gradient Effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-gray-900/5 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>

                    {/* Card Content */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Image */}
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className=" text-lg md:text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center text-gray-400 text-sm">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{item.date}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Background Effects */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent" />
            </div>
          </Element>


          <Element className="mt-10 hireme" name="hireme">
            <ContactMe />
          </Element>
        </div>
      </motion.div>

    </div>
  );
}
