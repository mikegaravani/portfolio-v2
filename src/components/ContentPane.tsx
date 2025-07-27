import React, { useState } from "react";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import CIcon from "../assets/icons/c.svg";
import CppIcon from "../assets/icons/cpp.svg";
import JavaIcon from "../assets/icons/java.svg";
import PythonIcon from "../assets/icons/python.svg";
import ReactIcon from "../assets/icons/react.svg";
import NodejsIcon from "../assets/icons/nodejs.svg";
import UniboIcon from "../assets/icons/unibo.svg";
import Lilu2Icon from "../assets/icons/lilu2.png";
import PvmIcon from "../assets/icons/pvm.png";
import MongodbIcon from "../assets/icons/mongodb.svg"; // Assuming you have a MongoDB icon

interface Skill {
  id: string;
  name: string;
  icon: string;
  hoverColors: {
    background: string;
    border: string;
    text: string;
  };
}

const ContentPane: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: "javascript",
      name: "JavaScript",
      icon: JavaScriptIcon,
      hoverColors: {
        background: "hover:from-yellow-500/20 hover:to-yellow-600/20",
        border: "hover:border-yellow-500/50",
        text: "group-hover:text-yellow-300",
      },
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: TypeScriptIcon,
      hoverColors: {
        background: "hover:from-blue-500/20 hover:to-blue-600/20",
        border: "hover:border-blue-500/50",
        text: "group-hover:text-blue-300",
      },
    },
    {
      id: "c",
      name: "C",
      icon: CIcon,
      hoverColors: {
        background: "hover:from-blue-500/20 hover:to-blue-600/20",
        border: "hover:border-blue-500/50",
        text: "group-hover:text-blue-300",
      },
    },
    {
      id: "cpp",
      name: "C++",
      icon: CppIcon,
      hoverColors: {
        background: "hover:from-blue-500/20 hover:to-blue-600/20",
        border: "hover:border-blue-500/50",
        text: "group-hover:text-blue-300",
      },
    },
    {
      id: "python",
      name: "Python",
      icon: PythonIcon,
      hoverColors: {
        background: "hover:from-yellow-500/20 hover:to-yellow-600/20",
        border: "hover:border-yellow-500/50",
        text: "group-hover:text-yellow-300",
      },
    },
    {
      id: "java",
      name: "Java",
      icon: JavaIcon,
      hoverColors: {
        background: "hover:from-orange-500/20 hover:to-orange-600/20",
        border: "hover:border-orange-500/50",
        text: "group-hover:text-orange-300",
      },
    },
    {
      id: "react",
      name: "React",
      icon: ReactIcon,
      hoverColors: {
        background: "hover:from-cyan-500/20 hover:to-cyan-600/20",
        border: "hover:border-cyan-500/50",
        text: "group-hover:text-cyan-300",
      },
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: NodejsIcon,
      hoverColors: {
        background: "hover:from-green-500/20 hover:to-green-600/20",
        border: "hover:border-green-500/50",
        text: "group-hover:text-green-300",
      },
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, skillId: string) => {
    setDraggedItem(skillId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, skillId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverItem(skillId);
  };

  const handleDragLeave = () => {
    setDragOverItem(null);
  };

  const handleDrop = (e: React.DragEvent, dropTargetId: string) => {
    e.preventDefault();

    if (!draggedItem || draggedItem === dropTargetId) {
      setDraggedItem(null);
      setDragOverItem(null);
      return;
    }

    const draggedIndex = skills.findIndex((skill) => skill.id === draggedItem);
    const targetIndex = skills.findIndex((skill) => skill.id === dropTargetId);

    const newSkills = [...skills];
    const [draggedSkill] = newSkills.splice(draggedIndex, 1);
    newSkills.splice(targetIndex, 0, draggedSkill);

    setSkills(newSkills);
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverItem(null);
  };
  return (
    <main className="lg:ml-[40%] w-full lg:w-3/5 lg:min-h-[90vh] min-w-[300px] mt-5 lg:mt-0 max-w-[1200px] mx-auto p-4 lg:p-12 lg:pt-4 lg:pr-[5%]">
      {/* ABOUT ME SECTION */}
      <section className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">About Me</h2>

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
      <section className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              draggable
              onDragStart={(e) => handleDragStart(e, skill.id)}
              onDragOver={(e) => handleDragOver(e, skill.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, skill.id)}
              onDragEnd={handleDragEnd}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 ${
                skill.hoverColors.background
              } border border-gray-700 ${
                skill.hoverColors.border
              } rounded-xl p-4 transition-all duration-300 hover:scale-105 cursor-grab active:cursor-grabbing select-none ${
                draggedItem === skill.id ? "opacity-50 scale-95" : ""
              } ${
                dragOverItem === skill.id && draggedItem !== skill.id
                  ? "ring-2 ring-blue-400 ring-opacity-50"
                  : ""
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 pointer-events-none"
                />
                <span
                  className={`text-sm font-semibold text-gray-200 ${skill.hoverColors.text} transition-colors duration-300`}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-5">Education</h2>

        <ul className="list-none space-y-6 pl-0">
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={UniboIcon}
                  alt="University of Bologna"
                  className="scale-120"
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

        {/* Previous Education */}
        <details className="mt-6 group">
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
              <span className="text-base font-medium">Previous Education</span>
            </span>
          </summary>
          <div className="mt-4">
            <ul className="list-none space-y-4 pl-0">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
                <div className="flex items-center mb-2">
                  <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={Lilu2Icon}
                      alt="Liceo Lugano 2"
                      className="scale-130"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
                      Swiss Matura [Physics and Mathematics]
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300">
                      Liceo Lugano 2, Switzerland
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      September 2019 - June 2021
                    </p>
                  </div>
                </div>
              </li>

              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
                <div className="flex items-center mb-2">
                  <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={PvmIcon}
                      alt="Paul V Moore High School"
                      className="scale-80"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
                      US High School Diploma
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300">
                      Paul V Moore High School, New York, USA
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      September 2018 - June 2019
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mt-12">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-5">Projects</h2>

        <ul className="list-none space-y-8 pl-0">
          {/* PROJECT 1 */}
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
                mCal - Full Stack Productivity
              </h3>
              <div className="text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                <p>
                  • Built a comprehensive task management application with
                  advanced event scheduling
                </p>
                <p>
                  • Implemented secure user authentication and admin features
                </p>
                <p>
                  • Designed RESTful APIs with proper error handling and input
                  validation
                </p>
                <p>
                  • Created responsive UI components with smooth animations and
                  transitions
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <img src={ReactIcon} alt="React" className="w-4 h-4" />
                  React
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <img
                    src={TypeScriptIcon}
                    alt="TypeScript"
                    className="w-4 h-4"
                  />
                  TypeScript
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <div className="bg-white rounded-full p-1 flex items-center justify-center">
                    <img src={NodejsIcon} alt="Node.js" className="w-4 h-4" />
                  </div>
                  Node.js
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <img src={MongodbIcon} alt="Mongodb" className="w-4 h-4" />
                  Mongodb
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mikegaravani/mCal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 hover:scale-105 px-4 py-2 rounded-lg text-sm text-gray-200 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
                <a
                  href="https://site242535.tw.cs.unibo.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 bg-gradient-to-r from-green-700 to-blue-700 hover:scale-105 px-4 py-2 rounded-lg text-sm text-white transition-all duration-300 shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span className="relative z-10">Live Demo</span>
                </a>
              </div>
            </div>
          </li>

          {/* PROJECT 2 */}
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
                Connect X AI
              </h3>
              <div className="text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                <p>
                  • Developed an algorithm able to play the best move in a game
                  of Connect X (Connect Four with variable board size and win
                  condition)
                </p>
                <p>• Implemented principles of game theory</p>
                <p>• Found clever optimizations to reduce the search time</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <img src={JavaIcon} alt="Java" className="w-4 h-4" />
                  Java
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                  Object Oriented Programming
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                  Game Theory
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mikegaravani/connect-X-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 hover:scale-105 px-4 py-2 rounded-lg text-sm text-gray-200 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </li>

          {/* PROJECT 3 */}
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
                Risk - Dice Roll Odds
              </h3>
              <div className="text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                <p>
                  • Created an algorithm to calculate the odds of winning an
                  attack in the game Risk
                </p>
                <p>
                  • Implemented mathematical calculations to predict outcomes
                  and their likelihoods
                </p>
                <p>
                  • Built a simple UI to calculate the desired configuration and
                  visualize the results
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <img
                    src={JavaScriptIcon}
                    alt="JavaScript"
                    className="w-4 h-4"
                  />
                  JavaScript
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                  Probability
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mikegaravani/risk-odds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 hover:scale-105 px-4 py-2 rounded-lg text-sm text-gray-200 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ContentPane;
