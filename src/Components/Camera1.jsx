import { PerspectiveCamera } from '@react-three/drei';
import { useThree} from '@react-three/fiber';
import React, { useState,useEffect, useRef } from 'react';
import { Vector3 } from 'three';


const PagePos  = []
PagePos.push({
  position :new Vector3(-0.5,1.2,2),
  rotation :new Vector3(90,90,90)
})

PagePos.push({
  position :new Vector3(-0.5*3,1*3.2,2*3),
  rotation :new Vector3(90,90,90)
})

function Camera1(props) {
    const cam = useRef()
    const RefreshTime = 20
    const delta = 0.01

    useThree(({camera}) => {
        cam.current = camera
      });
    useEffect(() => {
        const interval = setInterval(() => {
            let cur = PagePos[props.ScrollPos.current]
            if(cam.current !== undefined){
              cam.current.position.lerp(cur.position,.01)
            }
       }, RefreshTime );
       return () => clearInterval(interval);
     }, []);
    return (
        <PerspectiveCamera focus = {45} aspect={1000} near = {1}>
            {props.children}
        </PerspectiveCamera>
      );
}

export default Camera1;