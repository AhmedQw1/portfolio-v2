# Portfolio V2 - Cosmic Edition 🌌

A modern portfolio website with an interactive 3D space theme. Built with React, Three.js, and Tailwind CSS.

## What's This?

This is the second version of my portfolio, completely redesigned from scratch. I switched from a retro pixel-art style to a cosmic minimalist theme with 3D elements and glassmorphism UI.

### Why the Change?

The old version had a fun Web 2.0/retro vibe, but I wanted something more polished and professional while still being creative. This version feels more like a modern web app with some cool space vibes.

## Features

### Interactive 3D Hero
- Rotating asteroid/moon with realistic texture
- Clickable holographic navigation labels that float around it
- Twinkling stars in the background
- Animated nebula clouds (purple and blue)
- Shooting stars/meteors that occasionally streak across
- Smooth camera intro animation
- Idle drift effect when you're not interacting

![3D Planet Hero](public/3DPlanetShowCase.gif)

### Clean Sections
- **About**: Intro with color-coded tech mentions
- **Skills**: Categorized into Frontend, Backend, Tools, etc.
- **Projects**: Grid of project cards with live demos and GitHub links
- **Contact**: Form powered by Formspree (with email validation)

![Sections Showcase](public/sectionsShowCase.gif)

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for Three.js
- **Tailwind CSS** - Styling
- **Formspree** - Contact form backend

## Design Philosophy

- **Minimalist**: Black background, clean layout, lots of breathing room
- **Glassmorphism**: Frosted glass effect on UI elements
- **Cosmic**: Space theme without being over the top
- **Professional**: Looks serious but creative
- **Interactive**: 3D elements you can actually play with

## Getting Started

```bash
# Clone the repo
git clone https://github.com/AhmedQw1/portfolio-v2.git

# Install dependencies
npm install

# Add your Formspree endpoint to .env
# Copy .env.example to .env and add your keys

# Run dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   └── Planet3D.jsx       # Main 3D scene with asteroid
├── sections/
│   ├── Header.jsx         # Navigation bar
│   ├── Hero.jsx           # 3D hero wrapper
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills grid
│   ├── Projects.jsx       # Project cards
│   └── Contact.jsx        # Contact form
└── App.jsx                # Main app component
```

## Performance

- Optimized geometry (reduced polygon count)
- No heavy textures
- Efficient animations
- Mobile-friendly
- Fast load times

## License

MIT - feel free to use this as inspiration for your own portfolio!

---

**From pixel art to cosmos**  Built with caffeine and Three.js
