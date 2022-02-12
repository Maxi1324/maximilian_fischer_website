import { DirectionalLightHelper } from 'three'
import React, { Suspense, useRef } from 'react'
import { useHelper } from '@react-three/drei'
function Light() {
    return (<>
        <ambientLight intensity ={0.2}></ambientLight>
        <directionalLight></directionalLight>
    </>
    )
}

export default Light;