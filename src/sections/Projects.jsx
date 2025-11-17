import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio V2 - Cosmic Edition',
      description: 'An interactive 3D portfolio with space theme featuring a rotating asteroid, holographic navigation labels, twinkling stars, animated nebula clouds, and glassmorphism UI. Built with React, Three.js, and Tailwind CSS.',
      tech: ['React', 'Three.js', 'Tailwind CSS', 'Vite'],
      links: {
        code: 'https://github.com/AhmedQw1/portfolio-v2',
        live: 'https://cv-web.me'
      }
    },
    {
      title: 'Little Lemon Restaurant',
      description: 'A responsive restaurant booking application that allows users to reserve tables and view an updated menu with daily specials.',
      tech: ['React', 'Tailwind CSS', 'API'],
      links: {
        code: 'https://github.com/AhmedQw1/little-lemon-capstone',
        live: 'https://little-lemon-capstone-ochre.vercel.app/'
      }
    },
    {
      title: 'JavaFX Sound Player',
      description: 'A modern JavaFX-based multimedia player supporting both audio and video playback. Built with a clean Material Design interface, adaptive themes, and smooth animations. Designed for speed, usability, and a polished desktop experience.',
      tech: ['Java', 'JavaFX', 'FXML'],
      links: {
        code: 'https://github.com/AhmedQw1/SoundPlayer',
        downloads: [
          { label: 'v1.0', url: 'https://github.com/AhmedQw1/SoundPlayer/releases/download/v1.0.0/SoundPlayerV1-1.0.exe' },
          { label: 'v2.0', url: 'https://github.com/AhmedQw1/SoundPlayer/releases/download/v2.0.0/SoundPlayerV2-2.0.exe' }
        ]
      }
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                )}
                
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-sm text-blue-300 hover:bg-blue-500/30 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}

                {project.links.downloads && (
                  <div className="flex gap-2 w-full">
                    {project.links.downloads.map((download, dlIdx) => (
                      <a
                        key={dlIdx}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500/20 border border-green-400/30 rounded-lg text-xs text-green-300 hover:bg-green-500/30 transition-all"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {download.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
