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

const ContentPane: React.FC = () => {
  return (
    <main className="lg:ml-[40%] w-full lg:w-3/5 lg:min-h-[90vh] min-w-[300px] max-w-[1200px] mx-auto p-8 lg:p-12 lg:pr-[5%]">
      {/* ABOUT ME SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
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
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>

        {/* Languages */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-200">
            Languages/Frameworks
          </h3>
          <div className="flex flex-wrap gap-6">
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
    </main>
  );
};

export default ContentPane;
