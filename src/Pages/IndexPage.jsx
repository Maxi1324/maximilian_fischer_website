import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useResource } from 'react-three-fiber'
import { useThree } from "react-three-fiber";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import TextBoxen from '../Components/TextBoxen';

export default function IndexPage() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
 
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  })

  const CamPos = useRef(0)
  const textboxen = useRef()

  return (
    <>
      <NavBar CamPos={CamPos} TextBoxen = {textboxen}></NavBar>

      <Canvas style={{ height: dimensions.height, width: dimensions.width }}
        camera={{ fov: 70 }} className='FullScreen'>
        <Stars radius={300} depth={10} count={5000} factor={10} saturation={2} fade />
        <Stage>
          <Camera1 ScrollPos={CamPos} ></Camera1>
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

      <TextBoxen ref={textboxen} />
    </>
  )
}