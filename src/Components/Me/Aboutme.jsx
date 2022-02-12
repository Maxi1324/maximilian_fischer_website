import { useFBX, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";


function Aboutme() {
    //Ich winke am Anfang einmal
    //Planet auf dem ich drauf stehe mit einer Flagge mit einem Bild von mir drauf. Das ist eine mega idee lol
    let fbx = useFBX('AboutMe.fbx')
    return (
        <primitive object={fbx} dispose={null} />
    );
}

export default Aboutme;