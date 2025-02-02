import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Homepage.css";
import videoBg from "../assets/BG-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const homepageRef = useRef(null);

  useEffect(() => {
    gsap.to(homepageRef.current, {
      backgroundColor: "black",
      ease: "power1.out",
      scrollTrigger: {
        trigger: homepageRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={homepageRef} className="homepage-container" id="home">
      {/* Hero Section */}
      <section className="hero-sec">
        <video className="hero-video" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Ganesh creations
          </motion.h1>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Elevate your business with professional editing. Unlock custom designs, quick turnaround, and unique visual content to boost your brand.
          </motion.p>
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <a href="#footer">Get Started</a>
          </motion.button>
        </div>
      </section>
      
    </div>
  );
};

export default Homepage;
