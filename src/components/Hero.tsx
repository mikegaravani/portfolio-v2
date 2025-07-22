import React from "react";

const socials = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  // Add more socials as needed
];

const Hero: React.FC = () => {
  return (
    <section className="lg:fixed lg:w-2/5 lg:h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col min-w-[300px] max-w-[800px]">
      <img
        src="https://placehold.co/160"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <div className="">
        <h1 className="text-4xl font-bold mt-2 mb-1">Mike Garavani</h1>
        <p className="text-lg text-gray-500 mb-2">Software Engineer</p>
        <div className="text-base text-gray-700 mb-3">
          📍🇨🇭 Lugano, Switzerland
        </div>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
