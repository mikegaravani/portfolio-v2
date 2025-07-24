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
    <section className="lg:fixed lg:w-2/5 lg:h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col min-w-[300px] max-w-[800px]">
      <img
        src={pfp}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <div className="">
        <h1 className="text-4xl font-bold mt-2 mb-1">Mike Garavani</h1>
        <p className="text-lg text-gray-200 mb-2">Software Engineer</p>
        <div className="text-base text-gray-500 mb-3">
          🇨🇭 Lugano, Switzerland
        </div>
        <div className="flex gap-4 overflow-auto">
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
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {Icon && <Icon size={20} color="currentColor" />}
              </a>
            );
          })}
        </div>
        <div className="flex gap-3 mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-600 text-white font-semibold shadow hover:bg-gray-700 transition-colors focus:outline-none"
          >
            <FileText size={20} className="-ml-1" />
            Resume
          </a>
          <a
            href=""
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-600 text-white font-semibold shadow hover:bg-gray-700 transition-colors focus:outline-none"
          >
            <Mail size={20} className="-ml-1" />
            Get In Touch
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
