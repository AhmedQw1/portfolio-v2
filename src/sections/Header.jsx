import React from 'react'

const Header = () => {
  const sections = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 w-full bg-black border-b border-white/20 z-50">
      <div className="flex justify-center py-6">
        <nav className="flex gap-8">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
            >
              {section.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
