import { useThree } from "@react-three/fiber";
import { CubeTexture } from "three";
import react from "react";
import { CubeTextureLoader } from "three";

export default function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "bkg1_front.png",
      "bkg1_left.png",
      "bkg1_bot.png",
      "bkg1_bot.png",
      "bkg1_bot.png",
      "bkg1_bot.png"
    ]);
  
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
  }
