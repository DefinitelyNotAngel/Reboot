"use client"

import { useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { PerspectiveCamera, Environment, Float } from "@react-three/drei"

// Update the Computer component to ensure it's visible and properly positioned
function Computer({ position, rotation, scale = 2, color = "purple" }) {
  // This is a simplified computer model using basic shapes
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <group rotation={rotation} scale={[scale, scale, scale]}>
        {/* Monitor */}
        <mesh castShadow>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.8, 1, 0.01]} />
          <meshStandardMaterial color="black" emissive="#300030" emissiveIntensity={0.8} />
        </mesh>

        {/* Stand */}
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[0.2, 0.4, 0.1]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Base */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[0.6, 0.1, 0.4]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* PC Case */}
        <mesh position={[1.5, -0.5, 0]} castShadow>
          <boxGeometry args={[1, 1.5, 0.8]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* PC Case Details */}
        <mesh position={[1.5, 0, 0.41]}>
          <boxGeometry args={[0.8, 0.5, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* RGB Lights - Make them brighter */}
        <pointLight position={[1.5, -0.5, 0.5]} color="#ff00ff" intensity={1.5} distance={8} />
      </group>
    </Float>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 14)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 5, 10]} intensity={1} angle={0.6} penumbra={0.5} castShadow />

      <Computer position={[-7, 0, -2]} rotation={[0, Math.PI / 6, 0]} color="#9333ea" />

      <Computer position={[7, 0, -2]} rotation={[0, -Math.PI / 6, 0]} color="#a855f7" />

      {/* Add a subtle purple glow in the center */}
      <pointLight position={[0, 0, 5]} color="#9333ea" intensity={0.8} distance={15} />

      <Environment preset="night" />
    </>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas shadows>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 14]} />
        <Scene />
      </Canvas>
    </div>
  )
}
