import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.20, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Responsive font size state
  const [fontSize, setFontSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSize = "5rem"; // Default font size

      if (screenWidth >= 1200) {
        newSize = "5rem"; // Large screens
      } else if (screenWidth >= 768) {
        newSize = "3rem"; // Medium screens
      } else {
        newSize = "2rem"; // Small screens
      }

      setFontSize(newSize);
    };

    // Add an event listener for window resize (client-side only)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Call handleResize initially
      handleResize();
    }

    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "inline-flex",
        fontSize: fontSize || "5rem", // Use default or calculated font size
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
