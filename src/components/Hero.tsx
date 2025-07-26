import React, { useState } from "react";
import { socials } from "../data/socials";
import pfp from "../assets/pfp.png";
import { FileText, Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import PopupMenu from "./PopupMenu";

const Hero: React.FC = () => {
  const [resumePopupOpen, setResumePopupOpen] = useState(false);
  const handleOpenResume = () => {
    window.open("/resume.pdf", "_blank");
    setResumePopupOpen(false);
  };
  return (
    <section className="lg:fixed lg:w-2/5 lg:h-[calc(100vh-3rem)] lg:top-6 p-4 md:p-8 lg:p-12 flex flex-col lg:justify-start justify-center min-w-[300px] relative lg:overflow-y-auto">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl lg:fixed lg:w-2/5 lg:h-[calc(100vh-3rem)] lg:top-6 lg:left-6"></div>

      <div className="relative z-10 lg:my-auto lg:flex-shrink-0">
        {/* Profile image with modern styling */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 scale-110"></div>
          <img
            src={pfp}
            alt="Profile"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>

        {/* Name and title with enhanced typography */}
        <div className="mb-8">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3 leading-tight">
            Mike Garavani
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xl text-gray-300 font-medium">
              Software Engineer
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <span className="text-base">🇨🇭 Lugano, Switzerland</span>
          </div>
        </div>

        {/* Social links with enhanced styling */}
        <div className="flex gap-4 mb-8 overflow-auto">
          {socials.map((social) => {
            let Icon = null;
            if (social.icon === "Github") Icon = SiGithub;
            else if (social.icon === "Linkedin") Icon = FaLinkedin;
            else if (social.icon === "Twitter") Icon = SiX;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {Icon && <Icon size={22} className="relative z-10" />}
              </a>
            );
          })}
        </div>

        {/* Action buttons with modern design */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileText size={20} className="relative z-10" />
            <span className="relative z-10">View Resume</span>
          </a>
          <a
            href=""
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
      <PopupMenu
        open={resumePopupOpen}
        onClose={() => setResumePopupOpen(false)}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="text-lg font-medium text-center">
            Would you like to view my professional resume?
          </div>
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleOpenResume}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors focus:outline-none"
            >
              Open Resume
            </button>
            <button
              onClick={() => setResumePopupOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </PopupMenu>
    </section>
  );
};

export default Hero;
