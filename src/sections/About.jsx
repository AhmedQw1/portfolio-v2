import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Bio Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-white first-letter:mr-1">
            I'm a <span className="text-white font-semibold">Software Engineer</span> with a growing passion for both web and desktop application development. I've built a personal CV-based website using <span className="text-blue-400">React</span>, <span className="text-blue-400">JSX</span>, <span className="text-cyan-400">Tailwind CSS</span>, and <span className="text-orange-400">HTML/CSS</span> to showcase my skills and projects.
          </p>

          <p>
            On the desktop side, I've developed a sound player using <span className="text-purple-400">JavaFX</span>, <span className="text-purple-400">FXML</span>, and <span className="text-purple-400">Scene Builder</span>, working primarily in <span className="text-blue-300">IntelliJ IDEA</span>. I'm comfortable using version control with <span className="text-orange-400">Git</span> and managing my projects on <span className="text-white font-semibold">GitHub</span>.
          </p>

          <p>
            I use both <span className="text-blue-400">VS Code</span> and <span className="text-blue-300">IntelliJ</span> in my workflow, depending on the type of project. I'm constantly learning and expanding my skills by building real-world projects that push me forward.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {['React', 'Tailwind CSS', 'JavaFX', 'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
