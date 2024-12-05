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

const videos = [
  {
    title:
      "Build and Deploy Full Stack SaaS Product Hunt Clone + Admin Dashboard: Next js, React, Stripe (2024)",
    url: "https://www.youtube.com/watch?v=LHF_rcA35P8&t=1135s",
    description:
      "Comprehensive video course on building a full stack SaaS product with Next JS, React, Stripe and Tailwind CSS",
    image: "/images/product-hunt.png",
    technologies: [
      {
        title: "Auth Js",
        image: "/images/auth.webp",
      },
      {
        title: "React",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "React",
        image: "/images/react.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Stripe",
        image: "/images/stripe.png",
      },
    ],
  },
  {
    title:
      "Loom Website Clone + Contact Form : Next.js 14, React, TailwindCSS, NodeMailer",
    url: "https://www.youtube.com/watch?v=Rkw9d7Il6X4&t=107s",

    description:
      "Join me in this hands-on journey to replicate the elegance of Loom's design with the latest web technologies",
    image: "/images/loom.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
    ],
  },
  {
    title:
      "Asana Website Clone + Contact Form : Next.js 14, React, Tailwind, Framer Motion",
    url: "https://www.youtube.com/watch?v=1I_mXozC1K4&t=21s",
    description:
      "Create your own Asana-inspired website using the latest web development technologies!",
    image: "/images/asana.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Framer Motion",
        image: "/images/framer-motion.webp",
      },
    ],
  },
  {
    title:
      "Create a Digital Marketing Agency Website: Next JS, TailwindCSS, Stripe (2024)",
    url: "https://www.youtube.com/watch?v=uyi44-SNcEc&t=1s",
    description:
      "Step-by-step guide to building your own Modern Digital Marketing Agency Website using Next JS, TailwindCSS, and Stripe integration",
    image: "/images/digital-marketing-agency.webp",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
    ],
  },
  {
    title: "Notion Landing Page: Next.js, Tailwind CSS, and Framer Motion!",
    url: "https://www.youtube.com/watch?v=azPXfa9aHm8&t=450s",
    description:
      "Dive into the world of web development by building a Fully Responsive Notion Landing Page Website with Next.js, Tailwind CSS, and Framer Motion!",
    image: "/images/notion.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Framer Motion",
        image: "/images/framer-motion.webp",
      },
    ],
  },
];

const projects = [
  {
    title: "Ventes E-Commerce",
    description: "E-commerce platform for digital products",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    date: "2024-2025",
    image: "/images/uploadify.png",
  },
  {
    title: "Car Rental",
    description: "Digital platform for online car booking",
    link: "https://car-rental-frontend-swart.vercel.app/",
    date: "2024-2025",
    image: "/images/uploadify.png",
  },
  {
    title: "Satoshi Farm Telegram Game",
    description: "Telegram Game for CryptoCommerce",
    link: "https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms?startapp=5474783563",
    date: "2024-2025",
    image: "/images/ecomify.png",
  },
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

const skills = [
  {
    title: 'Programming Languages',
    description: "JavaScript, Python, Java, C",
  },
  {
    title: 'Web Technologies',
    description: "React JS, Next JS, React Redux, Node JS, Express JS, Mongoose",
  },
  {
    title: 'Mobile Development',
    description: "React Native, Expo",
  },
  // {
  //   title: 'Cloud & DevOps',
  //   description: "AWS, Google Cloud, Docker, Kubernetes, GitHub",
  // },
  {
    title: 'Databases',
    description: "MongoDB, MySQL",
  },
  {
    title: 'Frontend Frameworks & Libraries',
    description: "Redux, Tailwind CSS, Bootstrap, Material-UI",
  },
  {
    title: 'Backend & Serverless',
    description: "Express Js, Vercel",
  },
  // {
  //   title: 'Data Science & ML',
  //   description: "Jupyter, NumPy, Pandas",
  // },
  {
    title: 'Other Tools & Technologies',
    description: "Git, npm, Yarn, VSCode, Postman, Linux, Windows",
  },
];


const navbar = [
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Work Experience",
    link: "work",
  },
  {
    title: "Education",
    link: "education",
  },
  {
    title: "Skills",
    link: "skills",
  },
];

const icons = [
  // Programming Languages
  'javascript', 'typescript', 'python', 'java', 'cpp', 'c',
  'javascript', 'typescript', 'python', 'java', 'cpp', 'c',

  // Web Technologies
  'react', 'nextdotjs', 'nodejs', 'express',
  // Mobile Development
   'reactnative', 'expo',

  // Cloud & DevOps
  'amazonaws', 'googlecloud', 'docker', 'kubernetes', 'github',

  // Databases
  'mongodb',  'mysql',

  // Frontend Frameworks & Libraries
  'redux', 'tailwindcss', 'bootstrap', 'materialui',

  // Backend & Serverless
  'fastapi', 'firebase', 'vercel',

  // // Data Science & ML
  'tensorflow', 'pytorch', 'numpy', 'pandas',

  // Data Science & ML
  'numpy', 'pandas',

  // Other Tools & Technologies
  'git', 'npm', 'yarn', 'vscode', 'visualstudiocode', 'postman', 'figma', 'adobexd', 'linux', 'macos', 'windows'
]



export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const phoneNumber = 8534982098;

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
            <p>// Example: console.log('Hello, world!')</p>
            <p>// Optimizing algorithms and writing clean code...</p>
          </div>
        </div>

        <motion.div
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
          <div className="flex bg-green-950 text-white gap-x-4 p-4 items-center rounded-xl">
            {navbar.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className='border px-4 py-3 rounded-xl text-center flex
               items-center justify-center
                cursor-pointer hover:bg-green-900'>
                {item.title}
              </ScrollLink>
            ))}

            <Dialog>
              <DialogTrigger className="border px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-green-900">Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="" />
              </DialogContent>
            </Dialog>

          </div>

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
            {/* <Image
              src={"/images/manas.jpg"}
              alt="Manas"
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4 profile"
            /> */}

            <div className="px-4 lg:px-10">
              <h1 className="text-2xl lg:text-6xl text-white text-center font-semibold tracking-wide">Transforming Concepts into Seamless <span style={{ color: "#B6E2CC" }}>User Experiences</span></h1>

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
                {/* Main Heading */}
                <h1 className="text-xl lg:text-4xl text-white font-semibold tracking-wide">
                  <Typewriter
                    words={[
                      "Hello! I'm Saksham Garg, a web developer crafting seamless digital experiences."
                    ]}
                    cursor
                  />
                </h1>

              </div>

              <p className="text-gray-300 text-lg leading-relaxed pb-8">
                An ambitious creator and dedicated problem-solver, fueled by the passion to transform ideas into groundbreaking solutions.
                With a blend of creativity, perseverance, and an unwavering drive for excellence, I strive to leave a meaningful impact on every project.
                Ready to collaborate and bring visionary ideas to life? Let&apos;s make it happen <span className="text-yellow-300">🚀</span>
              </p>

            </div>

          </div>
          <Element name="resume" className="mt-10 resume   center-on-phone">
            <a href="" className="text-xl  resumei rounded-xl p-4  bg-slate-400 pt-15 font-semibold">
              View My Resume
            </a>
          </Element>

          <Element
            name="work"

          >
            <h2 className="text-xl pt-10 text-green-100 font-sans font-bold">Work Experience</h2>
            {experience.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="
               md:flex justify-between 
              cursor-pointer items-center 
              border rounded-2xl p-4
              bg-white
              "
                >
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="
                   rounded-md
                     w-20
                      p-2
              "
                    />

                    <div className="">
                      <h2 className="text-md font-semibold mt-4 md:mt-0">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground ">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                      {" "}
                      {item.date}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Element>

          <Element
            name="projects"

          >
            <h2 className="text-xl pt-10 text-green-100 font-sans font-bold">A Collection of <span style={{ color: "#499561" }}>recent Projects</span></h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.title}
                  className="border rounded-xl p-4 bg-white"
                >
                  <div className="md:flex items-center justify-between">
                    <div className="md:flex items-center gap-x-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="rounded-md w-16 h-16"
                      />

                      <div className="flex flex-col ">
                        <h2 className="text-md font-semibold ">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {project.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Element>

          <Element name="skillheader">
            <h1 className="text-xl pt-10 text-green-100 font-sans font-bold justify-center ">Skill Globe</h1>
          </Element>

          <Element name="skills" className="mt-10 skills  center-on-phone">
            <IconCloud iconSlugs={icons} />
          </Element>

          <h2 className="text-3xl pt-10 text-green-100 font-sans font-bold mb-6">Skills</h2>
          <div className="space-y-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-gray-200 shadow-md p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-gray-700">{skill.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Element
            name="education"
          >
            <h2 className="text-xl pt-10 text-green-100 font-sans font-bold">Education</h2>
            {education.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="
               md:flex justify-between 
              cursor-pointer items-center border rounded-2xl p-4
              bg-white
              
              "
                >
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="
                   rounded-md
                     w-20
                    
              "
                    />

                    <div className="">
                      <h2 className="te  xt-md font-semibold mt-4 md:mt-0">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground ">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                      {" "}
                      {item.date}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Element>
          <Element className="mt-10 hireme" name="hireme">
            <ContactMe />
          </Element>
        </div>
      </motion.div>
    </div>
  );
}
