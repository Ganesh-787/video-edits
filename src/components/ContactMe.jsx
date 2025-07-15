import React, { useState } from "react";
import './ContactPage.css';  // Import the external CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    whatsapp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('whatsapp', formData.whatsapp);
    formDataToSubmit.append('message', formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mvgzrbjl", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formDataToSubmit,
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", whatsapp: "" });
      } else {
        setResponseMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setResponseMessage("There was an error sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="w-full h-[10px] bg-gray-900 mt-12 break"></div>
      <div className="contact-page" id="contact">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <h2>Contact Me</h2>
          <p>
            I’d love to hear from you! Whether you have a question, suggestion, or just want to connect, feel free to reach out.
          </p>
          <form onSubmit={handleSubmit} className="contact-form" method="post">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="whatsapp">Your WhatsApp Number</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="Your WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className="response-message">
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
