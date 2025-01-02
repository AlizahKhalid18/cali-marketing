import React, { useRef, useState } from "react";
import backgroundImage from "../assets/contact-bgimg.jpg";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const formRef = useRef(); 
  const messageSectionRef = useRef(null);

  const handleScroll = () => {
    messageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_50ab77s",   
        "template_qikb89t",          
        formRef.current,    
        "ch-SrRSoIpVj8r5Yi"  
      )
      .then(
        (result) => {
          console.log("Message Sent: ", result.text); 
          setIsSubmitted(true);
          formRef.current.reset(); 
        },
        (error) => {
          console.log("Error: ", error.text); 
        }
      );
  };

  return (
    <div>
 
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            We're here to help your business thrive in the digital world. Reach out to us for innovative IT solutions that meet your needs.
          </p>
          <button
            onClick={handleScroll}
            className="bg-[#ccaa0d] text-white py-2 px-6 rounded-full text-lg font-semibold"
          >
            Let's Connect
          </button>
        </div>
      </section>

      <section
        ref={messageSectionRef}
        className="py-12 px-4 md:px-20 bg-gray-50"
      >
        <h2 className="text-sm uppercase text-[#0d3880] font-bold mb-2">Stay Connected</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          Collaborate with us to power your digital transformation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h4>
            <p className="text-gray-600 mb-4">
              At CALI DIGITAL MARKETING, we specialize in delivering tailored IT solutions for businesses of all sizes. Contact us to learn how we can help you succeed.
            </p>
            <ul>
              <li className="flex items-center mb-4">
                <span className="text-blue-500 text-xl mr-4">📞</span>
                <span>+1 (424) 522-4854</span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-blue-500 text-xl mr-4">📧</span>
                <span>support@youritcompany.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-xl mr-4">📍</span>
                <span>1141 Pomona Road , Corona , Los Angeles
                CA 92882</span>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Message Us</h4>
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={handleSubmit} 
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#0d3880] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-green-500">
                Thank you for your message! We will get back to you soon.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
