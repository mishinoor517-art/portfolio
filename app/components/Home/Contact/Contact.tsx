"use client"

import React from 'react'
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-16">

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="animate-[fadeIn_1s_ease-in-out]">

          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-snug animate-pulse">
            Schedule call with me <br />
            to see if I can help you with your project.
          </h1>

          <p className="mt-5 text-white/70 text-sm sm:text-base animate-[fadeIn_1.5s_ease-in-out]">
            Let’s connect through any of the platforms below. I am available for freelance
            work, collaboration and web development projects.
          </p>

          {/* CONTACT LINKS */}
          <div className="mt-8 space-y-6">

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="flex items-center gap-3 text-white transition-all duration-300 hover:text-green-400 hover:translate-x-2 hover:scale-105"
            >
              <FaWhatsapp className="text-xl sm:text-2xl animate-bounce" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="flex items-center gap-3 text-white transition-all duration-300 hover:text-blue-400 hover:translate-x-2 hover:scale-105"
            >
              <FaLinkedin className="text-xl sm:text-2xl animate-bounce" />
              <span>Visit LinkedIn</span>
            </a>

            <a
              href="mailto:yourname@gmail.com"
              className="flex items-center gap-3 text-white transition-all duration-300 hover:text-red-400 hover:translate-x-2 hover:scale-105"
            >
              <FaEnvelope className="text-xl sm:text-2xl animate-bounce" />
              <span>Send Email</span>
            </a>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="flex items-center gap-3 text-white transition-all duration-300 hover:text-cyan-400 hover:translate-x-2 hover:scale-105"
            >
              <FaMapMarkerAlt className="text-xl sm:text-2xl animate-bounce" />
              <span>View Location</span>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-lg shadow-lg
                        animate-[float_4s_ease-in-out_infinite]">

          <h2 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6 animate-pulse">
            Send Message
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-black/30 text-white outline-none border border-white/10 focus:border-cyan-400 transition-all duration-300 hover:scale-105"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-black/30 text-white outline-none border border-white/10 focus:border-cyan-400 transition-all duration-300 hover:scale-105"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-black/30 text-white outline-none border border-white/10 focus:border-cyan-400 transition-all duration-300 hover:scale-105"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-400/30"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  )
}

export default Contact