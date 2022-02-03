import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useResource } from 'react-three-fiber'
import { useThree } from "react-three-fiber";
import Sun from '../Components/Sun'
import { OrbitControls, Sky, Stage, Stars } from '@react-three/drei'
import SkyBox from '../Components/Skybox'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Camera, PerspectiveCamera } from 'three'
import Camera1 from '../Components/Camera1'
import { Vector3 } from 'three';
import { Scene } from 'three';
import Textbox from '../Components/TextBox';
import NavBar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IndexPage() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  })
  //  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

  return (
    <>
      <NavBar></NavBar>
      <Canvas style={{ height: dimensions.height, width: dimensions.width }}
        camera={{ fov: 70, position: [0, 10000, 1000] }} className='FullScreen'>
        <Stars radius={300} depth={10} count={5000} factor={10} saturation={2} fade />
        <Stage>
          <Camera1></Camera1>
          {/*<OrbitControls></OrbitControls>*/}
          <group dispose={null}>
            <Sun></Sun>
          </group>
        </Stage>
        <EffectComposer>
          <Bloom
            intensity={2.0}
            blurPass={5}
            width={dimensions.width}
            height={dimensions.height}
            kernelSize={5}
            luminanceThreshold={.4}
            luminanceSmoothing={.1}
          >
          </Bloom>
        </EffectComposer>
      </Canvas>
      <Textbox></Textbox>
    </>
  )
}