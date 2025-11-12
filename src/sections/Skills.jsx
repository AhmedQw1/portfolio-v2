import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', desc: 'Component-based apps, hooks, state management' },
        { name: 'JavaScript', desc: 'ES6+, async/await, DOM manipulation' },
        { name: 'HTML5', desc: 'Semantic markup, accessibility, forms' },
        { name: 'CSS3', desc: 'Flexbox, Grid, animations, responsive design' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling, custom components' }
      ]
    },
    {
      title: 'Backend & Desktop',
      skills: [
        { name: 'Java', desc: 'OOP, Spring Boot, desktop applications' },
        { name: 'JavaFX', desc: 'GUI applications, FXML, Scene Builder' },
        { name: 'MySQL', desc: 'Database design, queries, optimization' },
        { name: 'Spring Boot', desc: 'REST APIs, dependency injection' }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', desc: 'Version control, collaboration, CI/CD' },
        { name: 'VS Code', desc: 'Extensions, debugging, productivity' },
        { name: 'IntelliJ IDEA', desc: 'Java development, refactoring, debugging' },
        { name: 'Figma', desc: 'UI/UX design, prototyping, collaboration' }
      ]
    },
    {
      title: 'Other Technologies',
      skills: [
        { name: 'Firebase', desc: 'Real-time database, authentication' },
        { name: 'Vercel', desc: 'Deployment, hosting, domain management' },
        { name: 'API Integration', desc: 'REST APIs, data fetching, error handling' },
        { name: 'Responsive Design', desc: 'Mobile-first, cross-browser compatibility' }
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
