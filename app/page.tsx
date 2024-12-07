"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";
import { Typewriter } from "react-simple-typewriter";
import { LinkPreview } from "@/components/ui/link-preview";
import { PiDiscordLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { color, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import IconCloud from "@/components/ui/icon-cloud";
import HireFreelancer from "@/components/ui/hireme";
import ContactMe from "@/components/ui/hireme";
import { Calendar, ArrowUpRight } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce",
    description: "E-commerce platform for digital products",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    date: "2024",
    image: "/images/uploadify.png",
  },
  {
    title: "Hotel/Resort Application",
    description: "Digital platform for online hotel/resort booking",
    link: "https://car-rental-frontend-swart.vercel.app/",
    date: "2024",
    image: "/images/uploadify.png",
  },
  {
    title: "Car Rental",
    description: "Digital platform for online car booking",
    link: "https://car-rental-frontend-swart.vercel.app/",
    date: "2024",
    image: "/images/uploadify.png",
  }
];

const experience = [
  {
    title: "Full Stack Developer | Intern",
    description: "MysticGrafix",
    date: "Sept 2024 - Present",
    image: "/images/mysticgrafix.jpg",
  }
];

const education = [
  {
    title: "Bachelor of Technology, Computer Science Engineering",
    description: "Avg. SGPA-8.10",
    date: "2022-2026",
    image: "/images/miet.jpg",
  },
  {
    title: "XIIth Board Exam",
    description: "91% Marks in PCM+",
    date: "2022",
    image: "/images/download.jpg",
  },
  {
    title: "Xth Board Exam",
    description: "88% Marks",
    date: "2020",
    image: "/images/download.jpg",
  },
];


const navbar = [
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Experience",
    link: "work",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

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


  return (
    <div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative min-h-screen w-full bg-dark-purple overflow-hidden"
        style={{
          background: `
          radial-gradient(circle, rgba(32, 8, 36, 1) 0%, rgba(16, 4, 20, 1) 100%),
          repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 0, 0.1) 0px,
            rgba(0, 255, 0, 0.1) 2px,
            transparent 2px,
            transparent 5px
          ),
          repeating-linear-gradient(
            to right,
            rgba(0, 255, 0, 0.05) 0px,
            rgba(0, 255, 0, 0.05) 2px,
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

        <div
          className="top-0 left-0 w-full h-full overflow-hidden"
          style={{ animation: "scrolling-text 20s linear infinite" }}
        >
          <div className="font-mono text-neon-green opacity-30">
            <p>// Code snippets scrolling across the screen...</p>
            <p>// Example: console.log(&apos;Hello, world!&apos;)</p>
            <p>// Optimizing algorithms and writing clean code...</p>
          </div>
        </div>

        {/* <motion.div
          animate={isHidden ? 'hidden' : 'visible'}
          whileHover='visible'
          onFocusCapture={() => setIsHidden(false)}
          variants={{
            hidden: {
              y: '-90%'
            },
            visible: {
              y: '0%'
            }
          }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 z-10 md:flex w-full justify-center pt-3 hidden"
        >
          <div className="flex text-white gap-x-4 p-4 items-center rounded-xl">
            {navbar.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className='border bg-white/60 text-green-950 px-4 py-3 rounded-xl font-bold text-center flex
               items-center justify-center
                cursor-pointer hover:bg-white/80'>
                {item.title}
              </ScrollLink>
            ))}

            <Dialog>
              <DialogTrigger className="border bg-white/60 text-green-950 px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-white/80">Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="" />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div> */}


        <motion.div
          initial="visible"
          animate={isHidden ? 'hidden' : 'visible'}
          variants={{
            hidden: { y: '-100%' },
            visible: { y: '0%' }
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 z-50 w-full justify-center pt-3 hidden md:flex"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-2 border border-white/20 shadow-lg"
          >
            <div className="flex items-center px-6 gap-6">
              {navbar.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="relative group px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative z-10 flex items-center gap-1">
                      {item.title}
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </ScrollLink>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <Dialog>
                  <DialogTrigger className="relative group pr-4 py-2 rounded-xl font-medium text-white transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative pl-2 z-10">Contact</div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900/95 border-gray-800">
                    <div className="p-4">
                      <InlineWidget url="" />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Show/Hide Indicator */}
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



        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-20 ">
          <div className="pt-10 justify-end items-center flex underline md:hidden">
            <Dialog>
              <DialogTrigger>Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="https://calendly.com/birdsoftware/15min" />
              </DialogContent>
            </Dialog>
          </div>

          <div className="md:flex md:gap-x-10 items-center md:pt-28">

            <div className="px-4 lg:px-10">
              <h1 className="text-2xl lg:text-5xl text-white text-center font-semibold tracking-wide">Transforming Concepts into Seamless <span style={{ color: "#B6E2CC" }}>User Experiences</span></h1>

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

                <h1 className="text-xl lg:text-4xl text-white font-semibold tracking-wide">
                  <Typewriter
                    words={[
                      "Hello! I'm Saksham Garg, a web developer crafting seamless digital experiences."
                    ]}
                    cursor
                  />
                </h1>
              </div>

              {/* <p className="text-gray-300 text-lg leading-relaxed pb-8">
                An ambitious creator and dedicated problem-solver, fueled by the passion to transform ideas into groundbreaking solutions.
                With a blend of creativity, perseverance, and an unwavering drive for excellence, I strive to leave a meaningful impact on every project.
                Ready to collaborate and bring visionary ideas to life? Let&apos;s make it happen <span className="text-yellow-300">🚀</span>
              </p> */}

            </div>

          </div>
          <Element name="resume" className="mt-10 resume center-on-phone">
            <a
              href="https://drive.google.com/file/d/1ixpSa0ON_YTPXqL4Vuy0o4ZSrGgYusn4/view?usp=drivesdk"
              className="text-xl resumei rounded-xl p-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume
            </a>
          </Element>


          <div className="py-4">
            <Element name="work" className="mt-28 bg-gray-950 rounded-xl py-8 px-4 md:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <h2 className="text-3xl pt-4 text-green-100 font-sans font-bold relative inline-block">
                  Work Experience
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                </h2>

                <motion.div className="mt-6 space-y-4">
                  {experience.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="relative">
                        {/* Gradient border effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/50 via-green-500/25 to-gray-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                        <div className="relative rounded-2xl p-4 bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                          <div className="md:flex justify-between items-center gap-4">
                            <div className="flex items-center gap-x-4">
                              <div className="relative">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={100}
                                  height={100}
                                  className="rounded-md w-30 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-green-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>

                              <div className="flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-100 group-hover:text-green-400 transition-colors mt-4 md:mt-0">
                                  {item.title}
                                </h2>
                                <p className="text-gray-400 py-2">
                                  {item.description}
                                </p>
                              </div>
                            </div>


                          </div>
                          <div className="flex justify-end py-2 items-center gap-2 text-gray-400 mt-4 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -z-10 inset-0">
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-green-500/5 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-green-500/5 to-transparent" />
              </div>
            </Element>
          </div>

          <Element name="projects" className="bg-gray-950 rounded-xl p-8 md:px-6 lg:px-8">
            <h2 className="text-3xl pt-4 text-green-100 font-sans font-bold relative inline-block">
              <span className="text-green-100">A Collection of </span>
              <span style={{ color: "#499561" }}>recent Projects</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
            </h2>


            <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 gap-4 mt-5">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.title}
                  className="group border border-gray-800 hover:border-gray-700 rounded-xl py-8 px-4 bg-gray-900 transition-all duration-300"
                >
                  <div className="md:flex items-center justify-between">
                    <div className="md:flex items-center gap-x-4">
                      <div className="relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={100}
                          height={100}
                          className="rounded-md w-20 h-20 object-cover group-hover:ring-2 ring-green-500/30 transition-all"
                        />
                        <div className="absolute inset-0 bg-green-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="flex flex-col mt-3 md:mt-0">
                        <h2 className="text-xl pt-4 font-semibold text-gray-100 group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-gray-400 py-2 text-md">
                          {project.description}
                        </p>
                      </div>
                    </div>


                  </div>
                  <div className="flex justify-end items-center gap-2 mt-2 pt-2 md:mt-0">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 hover:text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </Element>

          <Element name="skills">
            <h2 className="text-3xl pt-10 text-green-100 font-sans font-bold relative inline-block">
              Technical Expertise
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
            </h2>
          </Element>

          <Element name="skills" className="mt-10 skills center-on-phone">
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
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
                    ${hoveredSkill === skill.name ? 'shadow-lg shadow-green-500/20' : ''}
                  `}
                      style={{
                        background: hoveredSkill === skill.name
                          ? `linear-gradient(135deg, rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.1), rgba(0, 0, 0, 0.8))`
                          : undefined
                      }}
                    >
                      <div className="text-center">
                        <p className="text-gray-200 font-medium mb-2">{skill.name}</p>
                        <div
                          className="h-1 w-16 mx-auto rounded"
                          style={{
                            backgroundColor: hoveredSkill === skill.name ? skill.color : '#374151',
                            transition: 'background-color 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    {/* Glow effect */}
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

          {/* <div className="py-4">
            <Element name="skills" className="mt-10 bg-gray-950 rounded-xl py-8 px-4 md:px-6 lg:px-8 skills center-on-phone">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent opacity-50 blur-3xl" />

                <div className="relative">

                  <h2 className="text-3xl pt-4 font-sans font-bold mb-6">
                    <span className="text-green-100">Skills</span>
                    <span className="absolute -mt-1 ml-1 h-3 w-3 rounded-full bg-green-500/30 blur-sm" />
                  </h2>

                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div
                        key={skill.title}
                        className="group rounded-xl border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 transition-all duration-300 hover:shadow-[0_0_30px_-15px_rgba(34,197,94,0.2)]"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-green-400 transition-colors">
                              {skill.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl opacity-20" />
              </div>
            </Element>
          </div> */}

          <Element name="education" className="bg-gray-950 rounded-xl py-8 mt-10 px-4 md:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <h2 className="text-3xl pt-4 text-green-100 font-sans font-bold relative inline-block">
                Education
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
              </h2>

              <motion.div className="mt-6 space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="relative">
                      {/* Gradient border effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/50 via-green-500/25 to-gray-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                      <div className="relative rounded-2xl p-4 bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                        <div className="md:flex justify-between items-center gap-4">
                          <div className="flex items-center gap-x-4">
                            <div className="relative">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="rounded-md w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-green-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex flex-col">
                              <h2 className="text-lg font-semibold text-gray-100 group-hover:text-green-400 transition-colors mt-4 md:mt-0">
                                {item.title}
                              </h2>
                              <p className="text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>

                        </div>
                        <div className="flex justify-end py-2 items-center gap-2 text-gray-400 mt-4 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-green-500/5 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-green-500/5 to-transparent" />
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
