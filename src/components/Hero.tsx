import React, { useState } from "react";
import { socials } from "../data/socials";
import pfp from "../assets/pfp.png";
import { FileText, Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import ContactPopup from "./ContactPopup";

const Hero: React.FC = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  const handleCloseContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <section className="lg:fixed lg:w-2/5 lg:h-[calc(100vh-3rem)] lg:top-6 p-4 md:p-8 lg:p-12 flex flex-col lg:justify-start justify-center min-w-[300px] relative lg:overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/5 via-green-500/5 to-green-800/5 rounded-3xl lg:fixed lg:w-2/5 lg:h-[calc(100vh-3rem)] lg:top-6 lg:left-6"></div>

      <div className="relative z-10 lg:my-auto lg:flex-shrink-0">
        <div className="relative mb-8">
          <img
            src={pfp}
            alt="Profile"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-3 leading-tight">
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
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10"
              >
                {Icon && (
                  <Icon
                    size={22}
                    className="relative z-10 group-hover:scale-110 transition-transform duration-200"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileText size={20} className="relative z-10" />
            <span className="relative z-10">View Resume</span>
          </a>
          <button
            onClick={handleContactClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={handleCloseContactPopup}
      />
    </section>
  );
};

export default Hero;
