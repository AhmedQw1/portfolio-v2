import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function EarthPlanet() {
  const planetRef = useRef()
  const textureLoader = new THREE.TextureLoader()
  const moonTexture = textureLoader.load('/Generic_Celestia_asteroid_texture.jpg')

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001
    }
  })

  return (
    <group>
      <mesh ref={planetRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial 
          map={moonTexture}
          roughness={0.5}
          metalness={0.1}
          emissive="#504040"
          emissiveIntensity={0.25}
        />
      </mesh>
      
      {/* Outer glow layer */}
      <mesh>
        <sphereGeometry args={[3.08, 32, 32]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

function BillboardLabel({ position, text, color, onClick }) {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef()
  
  // Billboard effect: always face camera
  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.quaternion.copy(camera.quaternion)
    }
  })
  
  // Rounded rectangle path for label background
  const roundedRectShape = new THREE.Shape()
  const width = 1.6
  const height = 0.6
  const radius = 0.1
  
  roundedRectShape.moveTo(-width/2 + radius, -height/2)
  roundedRectShape.lineTo(width/2 - radius, -height/2)
  roundedRectShape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius)
  roundedRectShape.lineTo(width/2, height/2 - radius)
  roundedRectShape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2)
  roundedRectShape.lineTo(-width/2 + radius, height/2)
  roundedRectShape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius)
  roundedRectShape.lineTo(-width/2, -height/2 + radius)
  roundedRectShape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2)
  
  return (
    <group position={position} ref={groupRef}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <shapeGeometry args={[roundedRectShape]} />
        <meshStandardMaterial
          color={hovered ? "#1a1a2e" : "#0f0f1e"}
          transparent
          opacity={hovered ? 0.5 : 0.3}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.15}
        />
      </mesh>
      
      {/* Border outline */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.ShapeGeometry(roundedRectShape)]} />
        <lineBasicMaterial 
          color={color}
          transparent
          opacity={hovered ? 1 : 0.6}
          linewidth={2}
        />
      </lineSegments>
      
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.24}
        color={hovered ? "#ffffff" : "#e0e0e0"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor={color}
        outlineOpacity={hovered ? 0.8 : 0.4}
        letterSpacing={0.05}
      >
        {text}
      </Text>
      
      {/* Corner accent dots */}
      {[
        [-0.75, 0.25], [0.75, 0.25],
        [-0.75, -0.25], [0.75, -0.25]
      ].map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], 0.02]}>
          <circleGeometry args={[0.03, 8]} />
          <meshBasicMaterial 
            color={color}
            transparent
            opacity={hovered ? 1 : 0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

function SectionLabels() {
  const labelDistance = 4.0
  
  const sections = [
    { 
      name: 'About', 
      id: 'about', 
      position: new THREE.Vector3(labelDistance, 0, 0),
      color: '#ffffff' 
    },
    { 
      name: 'Skills', 
      id: 'skills', 
      position: new THREE.Vector3(0, labelDistance, 0),
      color: '#ffffff' 
    },
    { 
      name: 'Projects', 
      id: 'projects', 
      position: new THREE.Vector3(-labelDistance, 0, 0),
      color: '#ffffff' 
    },
    { 
      name: 'Contact', 
      id: 'contact', 
      position: new THREE.Vector3(0, -labelDistance, 0),
      color: '#ffffff' 
    }
  ]

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {sections.map((section) => (
        <BillboardLabel
          key={section.id}
          position={section.position}
          text={section.name}
          color={section.color}
          onClick={() => handleClick(section.id)}
        />
      ))}
    </>
  )
}

function FixedStars() {
  const starsRef = useRef()
  const count = 600
  const stars = []
  
  // Generate star field avoiding center area
  for (let i = 0; i < count; i++) {
    let x, y, z
    let tooClose = true
    
    while (tooClose) {
      x = (Math.random() - 0.5) * 800
      y = (Math.random() - 0.5) * 800
      z = (Math.random() - 0.5) * 800
      
      const distanceFromCenter = Math.sqrt(x * x + y * y + z * z)
      tooClose = distanceFromCenter < 100
    }
    
    stars.push({
      position: [x, y, z],
      scale: Math.random() * 1.5 + 0.4,
      twinkleSpeed: Math.random() * 2 + 1,
      twinkleOffset: Math.random() * Math.PI * 2
    })
  }

  // Twinkle animation
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.set(0, 0, 0)
      
      starsRef.current.children.forEach((star, index) => {
        const starData = stars[index]
        const twinkle = Math.sin(state.clock.elapsedTime * starData.twinkleSpeed + starData.twinkleOffset) * 0.3 + 0.7
        star.material.opacity = twinkle
      })
    }
  })

  return (
    <group ref={starsRef}>
      {stars.map((star, index) => (
        <mesh key={index} position={star.position} scale={star.scale}>
          <sphereGeometry args={[0.15, 4, 4]} />
          <meshBasicMaterial 
            color="white"
            transparent
            opacity={1}
          />
        </mesh>
      ))}
    </group>
  )
}

function SpaceSkybox() {
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/galactic_plane_hazy_nebulae_1.png')
  
  return (
    <mesh scale={[500, 500, 500]}>
      <sphereGeometry args={[1, 32, 24]} />
      <meshBasicMaterial 
        map={texture}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  )
}

function AnimatedNebulaClouds() {
  const cloudRef1 = useRef()
  const cloudRef2 = useRef()
  
  useFrame((state) => {
    if (cloudRef1.current) {
      cloudRef1.current.rotation.y += 0.01
      cloudRef1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      // Breathing effect
      const pulse1 = Math.sin(state.clock.elapsedTime * 0.3) * 0.03 + 0.09
      cloudRef1.current.material.opacity = pulse1
    }
    if (cloudRef2.current) {
      cloudRef2.current.rotation.y -= 0.008
      cloudRef2.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.15
      const pulse2 = Math.sin(state.clock.elapsedTime * 0.25 + Math.PI) * 0.03 + 0.09
      cloudRef2.current.material.opacity = pulse2
    }
  })
  
  return (
    <group>
      <mesh ref={cloudRef1} scale={[400, 400, 400]} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial 
          color="#4a148c"
          transparent
          opacity={0.09}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={cloudRef2} scale={[350, 350, 350]} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial 
          color="#1a237e"
          transparent
          opacity={0.09}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

function DustParticles() {
  const particlesRef = useRef()
  const particleCount = 15
  const particles = []
  
  // Distribute particles in ring around asteroid
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount
    const radius = 5 + Math.random() * 3
    particles.push({
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius
      ],
      speed: Math.random() * 0.02 + 0.01,
      offset: Math.random() * Math.PI * 2
    })
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, index) => {
        const data = particles[index]
        particle.position.y += Math.sin(state.clock.elapsedTime * data.speed + data.offset) * 0.002
      })
    }
  })
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.03, 4, 4]} />
          <meshBasicMaterial 
            color="#aaaaaa"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

function ShootingStar() {
  const starRef = useRef()
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState([0, 0, 0])
  const [direction, setDirection] = useState([0, 0, 0])
  
  useFrame(() => {
    // Random spawn every ~10-15 seconds
    if (!active && Math.random() < 0.0005) {
      const angle = Math.random() * Math.PI * 2
      const startRadius = 150
      setPosition([
        Math.cos(angle) * startRadius,
        (Math.random() - 0.5) * 100,
        Math.sin(angle) * startRadius
      ])
      setDirection([
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ])
      setActive(true)
      setTimeout(() => setActive(false), 2000)
    }
    
    if (active && starRef.current) {
      starRef.current.position.x += direction[0]
      starRef.current.position.y += direction[1]
      starRef.current.position.z += direction[2]
    }
  })
  
  if (!active) return null
  
  return (
    <group ref={starRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Trail */}
      <mesh position={[-direction[0] * 2, -direction[1] * 2, -direction[2] * 2]}>
        <sphereGeometry args={[0.1, 6, 6]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  )
}

function CameraAnimation({ controlsRef }) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const lastInteraction = useRef(Date.now())
  
  useFrame(({ camera, clock }) => {
    if (!animationComplete) {
      const elapsed = clock.getElapsedTime()
      const duration = 3
      
      if (elapsed < duration) {
        // Ease-out cubic interpolation
        const progress = elapsed / duration
        const eased = 1 - Math.pow(1 - progress, 3)
        
        const startPos = new THREE.Vector3(30, 15, 30)
        const endPos = new THREE.Vector3(8, 3, 8)
        
        camera.position.lerpVectors(startPos, endPos, eased)
        camera.lookAt(0, 0, 0)
      } else {
        if (!animationComplete) {
          setAnimationComplete(true)
          if (controlsRef.current) {
            controlsRef.current.enabled = true
          }
        }
      }
    } else {
      // Subtle drift when idle for 3+ seconds
      const timeSinceInteraction = Date.now() - lastInteraction.current
      if (timeSinceInteraction > 3000) {
        const driftX = Math.sin(clock.elapsedTime * 0.1) * 0.01
        const driftY = Math.cos(clock.elapsedTime * 0.15) * 0.01
        camera.position.x += driftX
        camera.position.y += driftY
        camera.lookAt(0, 0, 0)
      }
    }
  })
  
  // Reset idle timer on user interaction
  if (typeof window !== 'undefined' && animationComplete) {
    window.addEventListener('mousedown', () => {
      lastInteraction.current = Date.now()
    })
    window.addEventListener('wheel', () => {
      lastInteraction.current = Date.now()
    })
    window.addEventListener('touchstart', () => {
      lastInteraction.current = Date.now()
    })
  }
  
  return null
}

export default function Planet3D() {
  const controlsRef = useRef()
  
  return (
    <div className="w-full h-screen bg-black" style={{ background: '#000000' }}>
      <Canvas 
        camera={{ position: [30, 15, 30], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        dpr={[1, 2]}
        flat
        linear
        style={{ background: '#000000', display: 'block' }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#a0b0ff" />
        
        <SpaceSkybox />
        <AnimatedNebulaClouds />
        <FixedStars />
        <ShootingStar />
        <DustParticles />
        <EarthPlanet />
        <SectionLabels />
        <CameraAnimation controlsRef={controlsRef} />
        
        <OrbitControls 
          ref={controlsRef}
          enabled={false}
          enableZoom={true}
          enableRotate={true}
          enablePan={false}
          minDistance={5}
          maxDistance={25}
          autoRotate={false}
          target={[0, 0, 0]}
        />
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm">
        Zoom & orbit around the planet • Stars stay fixed
      </div>
    </div>
  )
}

