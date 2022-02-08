import { MeshStandardMaterial } from "three";
import { SphereGeometry } from "three";

function Planet() {
    return (  
        <>
        <mesh scale={1} position= {[-5,0,0]}>
          <sphereGeometry />
          <meshStandardMaterial emissiveIntensity={-100}/>
        </mesh>
        </>
    );
}

export default Planet;