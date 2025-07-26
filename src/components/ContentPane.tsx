import React from "react";
// Import SVG icons
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import CIcon from "../assets/icons/c.svg";
import CppIcon from "../assets/icons/cpp.svg";
import JavaIcon from "../assets/icons/java.svg";
import PythonIcon from "../assets/icons/python.svg";
import ReactIcon from "../assets/icons/react.svg";
import NodejsIcon from "../assets/icons/nodejs.svg";
import UniboIcon from "../assets/icons/unibo.svg";

const ContentPane: React.FC = () => {
  return (
    <main className="lg:ml-[40%] w-full lg:w-3/5 lg:min-h-[90vh] min-w-[300px] max-w-[1200px] mx-auto p-4 lg:p-12 lg:pr-[5%]">
      {/* ABOUT ME SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">About Me</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-3">
          I'm a Swiss computer science student currently finishing my Bachelor's
          degree and excited to enter the job market.
        </p>
        <p className="text-base text-gray-300 leading-relaxed mb-3">
          I like building things end to end: my latest project is a full-stack
          web app, packed with small quality of life features that forced me to
          think about architecture, data modeling, and clean, maintainable code.
        </p>
        <p className="text-base text-gray-300 leading-relaxed">
          I try to keep things simple and understandable, for teammates and for
          my future self. It is important for me to be dependable: communicating
          early and documenting choices. I enjoy teams that value curiosity,
          kindness, and steady improvement.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Skills</h2>

        <div className="mb-8">
          <div className="flex flex-wrap mt-4 gap-6">
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={JavaScriptIcon} alt="JavaScript" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={TypeScriptIcon} alt="TypeScript" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={CIcon} alt="C" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">C</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={CppIcon} alt="C++" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">C++</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={PythonIcon} alt="Python" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">Python</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={JavaIcon} alt="Java" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">Java</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={ReactIcon} alt="React" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">React</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-16">
              <img src={NodejsIcon} alt="Node.js" className="w-8 h-8" />
              <span className="text-sm text-gray-400 text-center">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Education</h2>
        <ul className="list-none space-y-6 pl-0">
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={UniboIcon}
                  alt="University of Bologna"
                  className="w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
                  Bachelor of Computer Science
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  University of Bologna, Italy
                </p>
                <p className="text-sm sm:text-base text-gray-400">
                  September 2022 - October 2025 (expected)
                </p>
              </div>
            </div>

            {/* Relevant Coursework - Expandable Section */}
            <details className="mt-4 group">
              <summary className="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors duration-200 list-none">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-open:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Relevant Coursework
                  </span>
                </span>
              </summary>
              <div className="mt-3 ml-6 text-sm text-gray-400 space-y-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <span>• Data Structures & Algorithms [30L/30]</span>
                  <span>• Probability and Statistics [27/30]</span>
                  <span>• Combinatorial Optimization [27/30]</span>
                  <span>• Web Development [28/30]</span>
                  <span>• Object Oriented Programming [25/30]</span>
                </div>
              </div>
            </details>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ContentPane;
