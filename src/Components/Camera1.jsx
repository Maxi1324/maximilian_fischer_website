import { PerspectiveCamera } from '@react-three/drei';
import { useThree} from '@react-three/fiber';
import React, { useState,useEffect, useRef } from 'react';
import { Vector3 } from 'three';
function Camera1(props) {
    const cam = useRef(0)
    const RefreshTime = 20
    const delta = 0.01
    useThree(({camera}) => {
        cam.current = camera
      });
    useEffect(() => {
        const interval = setInterval(() => {
            cam.current.position.set(0,0,cam.current.position.z+1*delta)
       }, RefreshTime );
       return () => clearInterval(interval);
     }, []);
    return (
        <PerspectiveCamera focus = {45} aspect={1000} near = {1} >
            {props.children}
        </PerspectiveCamera>
      );
}

export default Camera1;