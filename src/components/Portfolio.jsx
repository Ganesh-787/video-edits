import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import defaultImg from "../assets/default.jpg";
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
import './Portfolio.css'; // Import CSS

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const videoRefs = useRef({});

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
      videos: [{ src: gameVideo1 }]
    }
  ];

  // Function to get a random frame from the video
  const getThumbnail = (videoSrc) => {
    const videoRef = videoRefs.current[videoSrc];
    if (videoRef) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Wait for video metadata to be loaded (duration, videoWidth, etc.)
      videoRef.onloadedmetadata = () => {
        videoRef.currentTime = Math.random() * videoRef.duration; // Select a random time in the video
      };

      videoRef.onseeked = () => {
        canvas.width = videoRef.videoWidth;
        canvas.height = videoRef.videoHeight;
        context.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL();
        setThumbnails((prev) => ({ ...prev, [videoSrc]: dataUrl })); // Store the thumbnail URL
      };
    }
  };

  useEffect(() => {
    sections.forEach((section) => {
      section.videos.forEach((video) => {
        // Create ref for video
        videoRefs.current[video.src] = document.createElement("video");
        videoRefs.current[video.src].src = video.src;

        // Load and generate thumbnails for each video
        videoRefs.current[video.src].load();
        getThumbnail(video.src);
      });
    });
  }, []);

  return (
    <>
    <div className="break"></div>
      <div id="portfolio" className="portfolio-container">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="sections-container">
          {sections.map((section, index) => (
            <div
              key={index}
              className="section-container"
            >
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
                          src={thumbnails[video.src] || defaultImg}
                          alt="Thumbnail"
                          className="thumbnail-img"
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
              <video src={selectedVideo} controls className="video-player" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
