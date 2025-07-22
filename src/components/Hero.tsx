import React from 'react'

const socials = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  // Add more socials as needed
]

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 mb-8 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://placehold.co/120x120"
          alt="Profile"
          className="w-30 h-30 rounded-full object-cover mb-4 border-4 border-gray-200"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-2 mb-1">Your Name</h1>
          <p className="text-lg text-gray-500 mb-2">Web Developer & Designer</p>
          <div className="text-base text-gray-700 mb-3">📍 Your City, Country</div>
          <div className="flex gap-4 justify-center">
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
      </div>
    </section>
  )
}

export default Hero 