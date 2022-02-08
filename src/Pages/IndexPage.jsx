import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useResource } from 'react-three-fiber'
import { useThree } from "react-three-fiber";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, OrbitControls, Sky, Stage, Stars } from '@react-three/drei'
import SkyBox from '../Components/Skybox'
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import Camera1 from '../Components/Camera1'
import { Vector3 } from 'three';
import { Scene } from 'three';
import Textbox from '../Components/TextBox';
import NavBar from '../Components/Navbar';
import TextBoxen from '../Components/TextBoxen';
import CamMovement from '../Components/CamMovement';
import Sun from '../Components/Me/Sun';
import Planet from '../Components/Skills/Planet';

export default function IndexPage() {
  const CamPos = useRef(0)
  const textboxen = useRef()
  const selected = useRef()
  const lightRef = useRef()
  const lightRef2 = useRef()
  const lightRef3 = useRef()


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

  return (
    <>
      <CamMovement CamPos={CamPos} TextBoxen={textboxen}>
        <NavBar CamPos={CamPos} TextBoxen={textboxen}></NavBar>
        <Canvas style={{ height: dimensions.height, width: dimensions.width }}
          camera={{ fov: 70 }} className='FullScreen'
        >
          <ambientLight intensity={0.5} ref={lightRef} />
          <ambientLight intensity={0.5} ref={lightRef2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} ref={lightRef3} />
          <pointLight position={[-10, -10, -10]} ref={selected} />
          <Box ref={selected}></Box>
          <Stars radius={300} depth={10} count={5000} factor={10} saturation={2} fade />
              <Camera1 ScrollPos={CamPos} ></Camera1>
            <EffectComposer autoClear={false}>
              <SelectiveBloom
                selection={[selected.current]}
                intensity={2.0}
                luminanceThreshold={0.01}
                luminanceSmoothing={0.025}
                lights={[lightRef, lightRef2, lightRef3]}
              />
            </EffectComposer>


          <Planet></Planet>
        </Canvas>
  
    {console.log(selected.current)}
      </CamMovement>
    </>
  )
}