import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrbitControls, Stars } from '@react-three/drei'
import Camera1 from '../Components/Camera1'
import NavBar from '../Components/Navbar';
import CamMovement from '../Components/CamMovement';
import Planet from '../Components/Skills/Planet';
import Aboutme from '../Components/Me/Aboutme';
import Light from '../Components/Light';

export default function IndexPage() {
  const CamPos = useRef(0)
  const textboxen = useRef()
  const selected = useRef()

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
      <CamMovement CamPos={CamPos} TextBoxen={textboxen} >
        <NavBar CamPos={CamPos} TextBoxen={textboxen}></NavBar>
        <Canvas style={{ height: dimensions.height, width: dimensions.width }}
          camera={{ fov: 70 }} className='FullScreen'
        >
          <Light></Light>
          <Aboutme></Aboutme>
          <Stars radius={300} depth={10} count={1000} factor={30} saturation={2} fade />
          <OrbitControls></OrbitControls>
        </Canvas>

      </CamMovement>
    </>
  )
}