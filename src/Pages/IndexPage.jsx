import React from 'react'
import { Canvas } from '@react-three/fiber'
import Sun from '../Components/Sun'
import { Sky, Stars } from '@react-three/drei'
import SkyBox from '../Components/Skybox'
import { Bloom, EffectComposer } from '@react-three/postprocessing'



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


  return (
    <Canvas className='FullScreen' style={{height:dimensions.height,width:dimensions.width}}>
      <Sun />
      <Stars radius={300} depth={10} count={5000} factor={10} saturation={2} fade />
      <EffectComposer>
        <Bloom
         intensity={1.5} 
         blurPass={5} 
         width={dimensions.width}
         height = {dimensions.height}
         kernelSize = {5}
         luminanceThreshold={.4} 
         luminanceSmoothing={.1} 
        >
        </Bloom>
      </EffectComposer>
    </Canvas>
  )
}