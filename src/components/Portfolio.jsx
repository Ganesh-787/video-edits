import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import defaultImg from "../assets/default.jpg";

// Import Videos
import cVideo1 from "../assets/Commercial/video1.mp4";
import cVideo2 from "../assets/Commercial/video2.mp4";
import cVideo3 from "../assets/Commercial/video3.mp4";
import fVideo1 from "../assets/Function/video1.mp4";
import compVideo1 from "../assets/Complex/video1.mp4";
import compVideo2 from "../assets/Complex/video2.mp4";
import compVideo3 from "../assets/Complex/video3.mp4";
import compVideo4 from "../assets/Complex/video4.mp4";
import compVideo5 from "../assets/Complex/video5.mp4";
import gVideo1 from "../assets/Gym/video1.mp4";
import gVideo2 from "../assets/Gym/video2.mp4";
import gVideo3 from "../assets/Gym/video3.mp4";
import gVideo4 from "../assets/Gym/video4.mp4";
import gVideo5 from "../assets/Gym/video5.mp4";
import sVideo1 from "../assets/Simple/video1.mp4";
import sVideo2 from "../assets/Simple/video2.mp4";
import gameVideo1 from "../assets/Game/video1.mp4";

// Import Static Thumbnails
import cThumb1 from "../assets/Commercial/thumb1.png";
import cThumb2 from "../assets/Commercial/thumb2.png";
import cThumb3 from "../assets/Commercial/thumb3.png";
import fThumb1 from "../assets/Function/thumb1.png";
import compThumb1 from "../assets/Complex/thumb1.png";
import compThumb2 from "../assets/Complex/thumb2.png";
import compThumb3 from "../assets/Complex/thumb3.png";
import compThumb4 from "../assets/Complex/thumb4.png";
import compThumb5 from "../assets/Complex/thumb5.png";
import gThumb1 from "../assets/Gym/thumb1.png";
import gThumb2 from "../assets/Gym/thumb2.png";
import gThumb3 from "../assets/Gym/thumb3.png";
import gThumb4 from "../assets/Gym/thumb4.png";
import gThumb5 from "../assets/Gym/thumb5.png";
import sThumb1 from "../assets/Simple/thumb1.png";
import sThumb2 from "../assets/Simple/thumb2.png";
import gameThumb1 from "../assets/Game/thumb1.png";

import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Mapping videos to static thumbnails
  const thumbnailMap = {
    [cVideo1]: cThumb1,
    [cVideo2]: cThumb2,
    [cVideo3]: cThumb3,
    [fVideo1]: fThumb1,
    [compVideo1]: compThumb1,
    [compVideo2]: compThumb2,
    [compVideo3]: compThumb3,
    [compVideo4]: compThumb4,
    [compVideo5]: compThumb5,
    [gVideo1]: gThumb1,
    [gVideo2]: gThumb2,
    [gVideo3]: gThumb3,
    [gVideo4]: gThumb4,
    [gVideo5]: gThumb5,
    [sVideo1]: sThumb1,
    [sVideo2]: sThumb2,
    [gameVideo1]: gameThumb1,
  };

  const sections = [
    {
      title: "Commercials",
      videos: [{ src: cVideo1 }, { src: cVideo2 }, { src: cVideo3 }],
    },
    { title: "Function Edits", videos: [{ src: fVideo1 }] },
    {
      title: "Complex Edits",
      videos: [
        { src: compVideo1 },
        { src: compVideo2 },
        { src: compVideo3 },
        { src: compVideo4 },
        { src: compVideo5 },
      ],
    },
    {
      title: "Gym Edits",
      videos: [
        { src: gVideo1 },
        { src: gVideo2 },
        { src: gVideo3 },
        { src: gVideo4 },
        { src: gVideo5 },
      ],
    },
    {
      title: "Simple Edits",
      videos: [{ src: sVideo1 }, { src: sVideo2 }],
    },
    {
      title: "Game",
      videos: [{ src: gameVideo1 }],
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
                  {section.videos.map((video, idx) => (
                    <div
                      key={idx}
                      className="thumbnail-container"
                      onClick={() => setSelectedVideo(video.src)}
                    >
                      <div className="thumbnail">
                        <img
                          src={thumbnailMap[video.src] || defaultImg}
                          alt="Thumbnail"
                          className="thumbnail-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
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
              <video src={selectedVideo} controls className="video-player" preload="none" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
