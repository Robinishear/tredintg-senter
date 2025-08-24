// Footer.jsx
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Fade direction="up" triggerOnce>
      <footer className="bg-gradient-to-br mt-4 from-gray-900 via-black to-gray-800 text-amber-300 py-12 px-6 rounded-t-3xl shadow-inner shadow-amber-500/10 backdrop-blur-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src="https://i.ibb.co/ynzvkkT7/AT-Co0-K9-ER.png"
                alt="Artifacts Logo"
                className="h-12 w-12 rounded-full border-2 border-amber-400 shadow-lg"
              />
              <h1 className="text-3xl font-bold text-amber-400 tracking-wide">Artifacts</h1>
            </div>
            <p className="text-sm text-amber-200 leading-relaxed">
              Unearthing history, one artifact at a time. Your gateway to the past.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline decoration-purple-400 underline-offset-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "All Artifacts", "Add Artifacts", "About Us", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline decoration-purple-400 underline-offset-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-5 text-2xl mb-4">
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-sky-400 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-red-500 transition"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="text-sm">📧 <a href="mailto:info@artifacts.com" className="hover:text-purple-300">info@artifacts.com</a></p>
            <p className="text-sm">📞 +1 (123) 456-7890</p>
          </div>

          {/* Newsletter + Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline decoration-purple-400 underline-offset-4">Stay Connected</h3>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row items-center gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-shadow-amber-300 border w-full sm:w-auto"
              />
             
            </form>

            {/* Opening Hours */}
            <div className="text-sm">
              <p className="font-semibold mb-1">Opening Hours</p>
              <ul className="space-y-1">
                <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                <li>Sat: 10:00 AM - 4:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-amber-400">
          &copy; {currentYear} <span className="font-bold">Historical Artifacts</span>. All rights reserved.
          Designed by <span className="text-purple-400 font-semibold">RN Robin IS Hear</span>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
