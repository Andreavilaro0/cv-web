import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

function Text3DLine({ text, position, color, size = 1.5 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <Center position={position}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_bold.typeface.json"
        size={size}
        height={0.4}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.3}
        />
      </Text3D>
    </Center>
  )
}

function Hero3DScene() {
  const { mouse } = useThree()
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.1
      groupRef.current.rotation.x = -mouse.y * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />

      <Text3DLine text="ANDREA" position={[0, 0.8, 0]} color="#1a1a1a" size={1.2} />
      <Text3DLine text="AVILA" position={[0, -0.8, 0]} color="#ff4d00" size={1.2} />
    </group>
  )
}

export default function Hero3DText() {
  return (
    <div className="hero-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
