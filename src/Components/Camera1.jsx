import { PerspectiveCamera } from '@react-three/drei';
import { useThree} from '@react-three/fiber';
import React, { useState,useEffect, useRef } from 'react';
import { Euler } from 'three';
import { Vector3,Quaternion } from 'three';


const PagePos  = []
//initSun
PagePos.push({
  position :new Vector3(-0.5,1.2,2),
  rotation :new Euler(0,0,0)
})

PagePos.push({
  position :new Vector3(-0.5*3,1*3.2,2*3),
  rotation :new Euler(0,45,0)
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
              cam.current.quaternion.slerp( new Quaternion().setFromEuler(cur.rotation), 0.01 );
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

const deg2rad = degrees => degrees * (Math.PI / 180);
