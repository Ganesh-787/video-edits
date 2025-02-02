import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css"; // Import external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}>
      {/* Mobile Navbar */}
      <div className="mobile-nav">
        <div className="logo">GC</div>
        <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
          {isOpen ? (
            <FaTimes className="menu-icon close-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className={`mobile-menu ${isOpen ? "open" : ""}`}
      >
        {["Home", "Portfolio", "About Me", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "")}`}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => {
              setIsOpen(false);
              setActive(item);
            }}
          >
            {item}
          </a>
        ))}
        <div className="social-icons">
          <a href="https://www.instagram.com/ganesh_.creates" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/917741945536" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaWhatsapp className="icon" />
          </a>
          <a href="mailto:ganeshganjave12@gmail.com" className="icon-wrapper">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <a href="#contact" className="edit-btn">Let's Edit</a>
      </motion.div>

      {/* Desktop Navbar */}
      <div className="desktop-nav">
        <div className="social-icons">
          <a href="https://www.instagram.com/ganesh_.creates" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/917741945536" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaWhatsapp className="icon" />
          </a>
          <a href="mailto:ganeshganjave12@gmail.com" className="icon-wrapper">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <div className="brand">Ganesh Creates</div>
        <a href="#contact" className="edit-btn">Let's Edit</a>
      </div>

      <div className="desktop-menu">
        {["Home", "Portfolio", "About Me", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "")}`}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
