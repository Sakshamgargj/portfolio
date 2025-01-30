"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HackerScrollEffects: React.FC = () => {
  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const [matrixRain, setMatrixRain] = useState<string[][]>([]);

  // Generate random characters for matrix rain effect
  useEffect(() => {
    const createMatrixColumns = () => {
      const columns = Array.from({ length: 4 }, () => {
        return Array.from({ length: 20 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        );
      });
      return columns;
    };

    const interval = setInterval(() => {
      setMatrixRain(createMatrixColumns());
    }, 100);

    return () => clearInterval(interval);
  }, [chars]);

  return (
    <div className="absolute w-screen h-screen bg-transparent overflow-hidden">
      {/* Falling Characters */}
      {matrixRain.map((column, colIndex) => (
        <motion.div
          key={colIndex}
          className="absolute top-0 left-0 text-blue-500 font-mono text-lg whitespace-nowrap"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: Math.random() * 10 + 1, // Random speed for falling effect
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ 
            left: `${colIndex * 4}vw`, // Space columns evenly
          }}
        >
          {column.map((char, charIndex) => (
            <span
              key={charIndex}
              className="block"
              style={{
                opacity: (charIndex + 1) / column.length, // Gradual fade-out effect
                textShadow: "0 0 8px rgba(0,255,0,0.8)",
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default HackerScrollEffects;

/*
another--
"use client";

import { useEffect, useState } from "react";

const HackerScrollEffects = () => {
  const delays = [0, 2.3, 3.5, 2.8, 5, 4.3];
  const particleStyles = [
    {
      background: "rgb(255, 222, 81)",
      transform: "translate3d(0px, 0px, 1685px)",
      boxShadow: "rgba(72, 135, 202, 0.8) 0 0 90px 33px",
      delay: 0.3
    },
    {
      background: "rgb(94, 99, 254)",
      transform: "translate3d(38px, 40px, 1400px)",
      delay: 0.8
    },
    {
      background: "rgb(255, 107, 108)",
      transform: "translate3d(-116px, 104px, 723px)",
      delay: 0.5
    },
    {
      background: "white",
      transform: "translate3d(-200px, -100px, 1200px)",
      delay: 0.2
    },
    {
      background: "rgb(77, 170, 87)",
      transform: "translate3d(380px, -344px, 1305px)",
      delay: 1.2
    },
    {
      background: "rgb(229, 240, 85)",
      transform: "translate3d(241px, 125px, 684px)",
      delay: 0.8
    },
    {
      background: "rgb(254, 76, 136)",
      transform: "translate3d(-50px, 400px, 300px)",
      delay: 1.0
    },
    {
      background: "rgb(107, 228, 255)",
      transform: "translate3d(380px, -400px, 2100px)",
      delay: 3.5
    },
    {
      background: "rgb(192, 173, 248)",
      transform: "translate3d(200px, 1000px, 600px)",
      delay: 2.2
    },
    {
      background: "rgb(217, 231, 203)",
      transform: "translate3d(-50px, 400px, 300px)",
      delay: 1.5
    }
  ];

  return (
    <div className="absolute w-full h-screen m-0 p-0 overflow-hidden">
      <div className="w-full h-full relative" style={{ perspective: "800px" }}>
        <div 
          className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: "800px" }}
        >
          {delays.map((delay, groupIndex) => (
            <div
              key={groupIndex}
              className="absolute top-0 left-0 w-[400px] h-[400px]"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                perspective: "600px",
                top: "calc(50% - 25px)",
                transform: groupIndex % 2 === 0 ? "rotate(0deg)" : "rotate(180deg)",
                animation: "colors 3s ",
                "--delay": `${delay}s`
              } as any}
            >
              {particleStyles.map((style, particleIndex) => (
                <div
                  key={particleIndex}
                  className="absolute w-[30px] h-[30px] rounded-full top-[185px] left-[185px]"
                  style={{
                    background: style.background,
                    boxShadow: style.boxShadow,
                    transform: style.transform,
                    animation: "move 3s ",
                    animationDelay: `calc(var(--delay) - ${style.delay}s)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes colors {
          to {
            filter: hue-rotate(360deg);
          }
        }
        @keyframes move {
          100% {
            transform: translate3d(0, 0, -1000px);
          }
        }
      `}</style>
    </div>
  );
};

export default HackerScrollEffects;

*/

/*
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HackerScrollEffects: React.FC = () => {
  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const [matrixRain, setMatrixRain] = useState<string[][]>([]);

  useEffect(() => {
    const createMatrixColumns = () => {
      const columns = Array.from({ length: 10 }, () =>
        Array.from({ length: 20 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        )
      );
      return columns;
    };

    const interval = setInterval(() => {
      setMatrixRain(createMatrixColumns());
    }, 100);

    return () => clearInterval(interval);
  }, [chars]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {matrixRain.map((column, colIndex) => (
        <motion.div
          key={colIndex}
          className="absolute top-0 text-green-500 font-mono text-lg whitespace-nowrap"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: Math.random() * 5 + 5, // Random speed
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${colIndex * 10}vw`,
          }}
        >
          {column.map((char, charIndex) => (
            <span
              key={charIndex}
              className="block"
              style={{
                opacity: (charIndex + 1) / column.length, // Gradual fade-out
                textShadow: "0 0 8px rgba(0,255,0,0.8)",
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default HackerScrollEffects;
*/