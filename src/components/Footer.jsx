import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import './Footer.css';  // Import the external CSS file

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Email submitted:", email);
  };

  return (
    <>
      <div className="w-full h-[10px] bg-gray-900 mt-12 break"></div>

      <div className="footer" id="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-12 md:flex md:flex-col">
          {/* Social Icons Section */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ganesh_.creates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/917741945536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="mailto:ganeshganjave12@gmail.com"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* About Us Section */}
          <div className="about-us">
            <h4>About Us</h4>
            <p>
              Ganesh Creates is a creative portfolio showcasing unique designs, ideas, and digital solutions. Get in touch for collaborations, projects, or to share your thoughts!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>© 2025 Ganesh Creates. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
