"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HackerScrollEffects: React.FC = () => {
  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const [matrixRain, setMatrixRain] = useState<string[][]>([]);

  // Generate random characters for matrix rain effect
  useEffect(() => {
    const createMatrixColumns = () => {
      const columns = Array.from({ length: 10 }, () => {
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
    <div className="absolute w-screen h-full bg-transparent overflow-hidden">
      {/* Falling Characters */}
      {matrixRain.map((column, colIndex) => (
        <motion.div
          key={colIndex}
          className="absolute top-0 left-0 text-green-500 font-mono text-lg whitespace-nowrap"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: Math.random() * 5 + 1, // Random speed for falling effect
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ 
            left: `${colIndex * 3}vw`, // Space columns evenly
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