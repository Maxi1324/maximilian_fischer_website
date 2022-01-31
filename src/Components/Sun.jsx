import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Sun() {
    const texture = useLoader(TextureLoader, "SunTexture.png")
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += 0.003))

    return (
        <mesh scale={1} ref = {ref} >
          <sphereGeometry />ss
          <meshStandardMaterial emissive="#ffed4d"  emissiveIntensity={1.2} emissiveMap={texture} shininess={2}  />
        </mesh>
    );
}



export default Sun;