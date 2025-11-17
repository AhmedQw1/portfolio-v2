import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React 19', desc: 'Component architecture, hooks, state management' },
        { name: 'Three.js', desc: '3D graphics, animations, interactive scenes' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling, glassmorphism, responsive design' },
        { name: 'Vite', desc: 'Fast builds, hot module replacement, optimized bundling' },
        { name: 'JavaScript ES6+', desc: 'Modern syntax, async/await, modules' }
      ]
    },
    {
      title: 'Java & Desktop Development',
      skills: [
        { name: 'Java 21', desc: 'Modern Java, OOP principles, application architecture' },
        { name: 'JavaFX 21', desc: 'Rich UI applications, FXML, media playback' },
        { name: 'Maven', desc: 'Build automation, dependency management, packaging' },
        { name: 'JFoenix', desc: 'Material Design components for JavaFX' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      skills: [
        { name: '@react-three/fiber', desc: 'React renderer for Three.js scenes' },
        { name: '@react-three/drei', desc: 'Three.js helpers and abstractions' },
        { name: 'Formspree', desc: 'Form backend integration, validation' },
        { name: 'Yup', desc: 'Schema validation for forms' },
        { name: 'Vitest', desc: 'Unit testing, component testing' }
      ]
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git & GitHub', desc: 'Version control, repositories, releases' },
        { name: 'Vercel', desc: 'Frontend deployment, CI/CD, domain hosting' },
        { name: 'VS Code', desc: 'Development environment, extensions, debugging' },
        { name: 'IntelliJ IDEA', desc: 'Java IDE, refactoring, debugging' }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Category Header */}
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex items-start gap-3">
                      {/* Dot indicator */}
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0"></div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-lg mb-1 group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
