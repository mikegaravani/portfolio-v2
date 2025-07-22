import React from 'react'

const ContentPane: React.FC = () => {
  return (
    <main className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 mb-8">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          I am a passionate developer with experience in building modern web applications. I love working with React, TypeScript, and design systems.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 leading-relaxed">
          <li>Frontend Developer at Company A (2021 - Present)</li>
          <li>UI/UX Designer at Company B (2019 - 2021)</li>
        </ul>
      </section>
    </main>
  )
}

export default ContentPane 