import React from "react";
import { motion } from "framer-motion";
import animeCharacter from "../assets/Isagi.jpg"; // Replace with your actual image
import './AboutMe.css';  // Import the external CSS file

const AboutMe = () => {
  return (
    <>
    <div className="break"></div>
    <div id="aboutme" className="text-gray-200 py-16 px-4 md:px-20 flex items-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="heading-text text-center md:text-left flex-1">
            <h2 className="text-5xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Hi, I'm Ganesh! Are you looking to bring your ideas to life
              through captivating visuals? I specialize in creating stunning
              video content that not only tells your story but also leaves a
              lasting impression. Whether you need promotional videos, social
              media reels, or cinematic storytelling, I'm here to turn your
              vision into reality. Let’s collaborate to create content that
              grabs attention, engages your audience, and drives results.
              Together, we can create videos that stand out and elevate your
              brand!
            </p>
          </div>
          <motion.div className="relative flex items-center justify-center">
            {/* Glowing Effect */}
            <motion.div
              className="glowing-effect"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5, // Slower for smoother effect
                ease: "easeInOut",
              }}
            />

            {/* Image with Floating Animation */}
            <motion.img
              src={animeCharacter}
              alt="Anime Character"
              className="floating-image"
              animate={{
                y: ["0px", "-10px", "0px"],
                // Smoother floating movement
              }}
              transition={{
                duration: 3, // Slower, more fluid movement
                ease: "easeInOut",
                repeat: Infinity, // Infinite floating loop
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
