import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import defaultImg from "../assets/default.jpg";

// Reels for Coaches, Creators & Brands
import rVideo1 from "../assets/Section 1/video1.mp4";
import rVideo2 from "../assets/Section 1/video2.mp4";
import rVideo3 from "../assets/Section 1/video3.mp4";
import rVideo4 from "../assets/Section 1/video4.mp4";
import rVideo5 from "../assets/Section 1/video5.mp4";
import rVideo6 from "../assets/Section 1/video6.mp4";
import rThumb1 from "../assets/Section 1/thumb1.png";
import rThumb2 from "../assets/Section 1/thumb2.png";
import rThumb3 from "../assets/Section 1/thumb3.png";
import rThumb4 from "../assets/Section 1/thumb4.png";
import rThumb5 from "../assets/Section 1/thumb5.png";
import rThumb6 from "../assets/Section 1/thumb6.png";

// Motion Graphics & Animation
import mVideo1 from "../assets/Section 2/video1.mp4";
import mVideo2 from "../assets/Section 2/video2.mp4";
import mVideo3 from "../assets/Section 2/video3.mp4";
import mVideo4 from "../assets/Section 2/video4.mp4";
import mVideo5 from "../assets/Section 2/video5.mp4";
import mVideo6 from "../assets/Section 2/video6.mp4";
import mVideo7 from "../assets/Section 2/video7.mp4";
import mThumb1 from "../assets/Section 2/thumb1.png";
import mThumb2 from "../assets/Section 2/thumb2.png";
import mThumb3 from "../assets/Section 2/thumb3.png";
import mThumb4 from "../assets/Section 2/thumb4.png";
import mThumb5 from "../assets/Section 2/thumb5.png";
import mThumb6 from "../assets/Section 2/thumb6.png";
import mThumb7 from "../assets/Section 2/thumb7.png";

// Tattoo Cinematics
import cVideo1 from "../assets/Commercial/video1.mp4";
import cVideo2 from "../assets/Commercial/video2.mp4";
import cVideo3 from "../assets/Commercial/video3.mp4";
import cThumb1 from "../assets/Commercial/thumb1.png";
import cThumb2 from "../assets/Commercial/thumb2.png";
import cThumb3 from "../assets/Commercial/thumb3.png";

// Complex Gym Edits
import compVideo1 from "../assets/Complex/video1.mp4";
import compVideo2 from "../assets/Complex/video2.mp4";
import compVideo3 from "../assets/Complex/video3.mp4";
import compVideo4 from "../assets/Complex/video4.mp4";
import compVideo5 from "../assets/Complex/video5.mp4";
import compThumb1 from "../assets/Complex/thumb1.png";
import compThumb2 from "../assets/Complex/thumb2.png";
import compThumb3 from "../assets/Complex/thumb3.png";
import compThumb4 from "../assets/Complex/thumb4.png";
import compThumb5 from "../assets/Complex/thumb5.png";

// Personal Projects
import sVideo1 from "../assets/Simple/video1.mp4";
import sVideo2 from "../assets/Simple/video2.mp4";
import sThumb1 from "../assets/Simple/thumb1.png";
import sThumb2 from "../assets/Simple/thumb2.png";

// Clients
import sage from "../assets/sage.jpg";
import kemo from "../assets/kemo.jpg";
import marathi from "../assets/marathi.jpg";
import aryan from "../assets/aryan.jpg";

import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const thumbnailMap = {
    // Section 1
    [rVideo1]: rThumb1,
    [rVideo2]: rThumb2,
    [rVideo3]: rThumb3,
    [rVideo4]: rThumb4,
    [rVideo5]: rThumb5,
    [rVideo6]: rThumb6,

    // Section 2 - Motion Graphics
    [mVideo1]: mThumb1,
    [mVideo2]: mThumb2,
    [mVideo3]: mThumb3,
    [mVideo4]: mThumb4,
    [mVideo5]: mThumb5,
    [mVideo6]: mThumb6,
    [mVideo7]: mThumb7,

    // Tattoo Cinematics
    [cVideo1]: cThumb1,
    [cVideo2]: cThumb2,
    [cVideo3]: cThumb3,

    // Complex Gym Edits
    [compVideo1]: compThumb1,
    [compVideo2]: compThumb2,
    [compVideo3]: compThumb3,
    [compVideo4]: compThumb4,
    [compVideo5]: compThumb5,

    // Personal Projects
    [sVideo1]: sThumb1,
    [sVideo2]: sThumb2,
  };

  const sections = [
    {
      title: "Reels for Coaches, Creators & Brands",
      videos: [rVideo1, rVideo2, rVideo3, rVideo4, rVideo5, rVideo6],
    },

    {
      title: "Motion Graphics & Animation",
      videos: [mVideo1, mVideo2, mVideo3, mVideo4, mVideo5, mVideo6, mVideo7],
    },
    {
      title: "YouTube & Long-Form Videos",
      type: "youtube",
      embedUrl:
        "https://www.youtube.com/embed/videoseries?list=PLPms_LkqT3OuSJTTwhv6bGeq_xMd57EHa",
    },

    {
      title: "Tattoo Cinematics",
      videos: [cVideo1, cVideo2, cVideo3],
    },
    {
      title: "Gym Edits",
      videos: [compVideo1, compVideo2, compVideo3, compVideo4, compVideo5],
    },
    {
      title: "Personal Projects",
      videos: [sVideo1, sVideo2],
    },
  ];

  const testimonials = [
    {
      name: "Sage Phoenix",
      role: "Fitness Coach (Australia)",
      feedback:
        "Ganesh delivered 16 high-quality reels with fast turnaround. Loved the creative angles & clean cuts!",
      image: sage,
    },
    {
      name: "Kemo",
      role: "BGMI Creator",
      feedback:
        "His editing took my gaming products promo reel to the next level. He knows how to create engaging moments and transitions.",
      image: kemo,
    },
    {
      name: "The Marathi Trader",
      role: "Trading Content Creator",
      feedback:
        "He’s consistent, sharp, and understands what hooks an audience. Very reliable for long-form and short-form content.",
      image: marathi,
    },
    {
      name: "Aryan Agarwal",
      role: "Entertainment Content Creator",
      feedback:
        "Ganesh truly understands pacing, punchlines, and retention for viral-style content. The final edits feel effortless and binge-worthy.",
      image: aryan,
    },
  ];

  return (
    <>
      <div className="break"></div>
      <div id="portfolio" className="portfolio-container">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="sections-container">
          {sections.map((section, index) => (
            <div key={index} className="section-container">
              <div
                className="section-header"
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <span className="section-title">{section.title}</span>
                <FaPlus
                  className={`expand-icon ${
                    activeSection === index ? "rotated" : ""
                  }`}
                />
              </div>
              {activeSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="video-thumbnails"
                >
                  {section.type === "youtube" ? (
                    <div className="youtube-embed-wrapper">
                      <iframe
                        width="100%"
                        height="400"
                        src={section.embedUrl}
                        title={section.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    section.videos.map((src, idx) => (
                      <div
                        key={idx}
                        className="thumbnail-container"
                        onClick={() => setSelectedVideo(src)}
                      >
                        <div className="thumbnail">
                          <img
                            src={thumbnailMap[src] || defaultImg}
                            alt="Thumbnail"
                            className="thumbnail-img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div className="video-modal">
            <div className="video-modal-content">
              <button
                className="close-btn"
                onClick={() => setSelectedVideo(null)}
              >
                <FaTimes size={24} />
              </button>
              <video
                src={selectedVideo}
                controls
                className="video-player"
                preload="none"
              />
            </div>
          </div>
        )}
      </div>
      <div className="break"></div>
      <div className="testimonials-section">
        <h2 className="testimonial-title">What Clients Say</h2>
        <div className="testimonial-carousel-mask">
          <div className="testimonial-carousel-track">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <motion.div
                key={idx}
                className="testimonial-carousel-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-header">
                  <img src={t.image} alt={t.name} className="testimonial-img" />
                  <div className="testimonial-info">
                    <div className="testimonial-text-block">
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-role">{t.role}</p>
                    </div>
                  </div>
                </div>
                <p className="testimonial-feedback">“{t.feedback}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
