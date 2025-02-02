import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Get the element that represents the homepage
    const homeElement = document.getElementById("home");

    if (homeElement) {
      // Scroll to the home section if it exists
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Run only once on page load

  return (
    <>
      <Navbar />
      <Homepage id="home"/>
      <Portfolio/>
      <AboutMe/>
      <ContactPage/>
      <Footer/>
    </>
  );
};

export default App;