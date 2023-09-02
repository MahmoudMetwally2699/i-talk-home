import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/mahmoud.glb");
  const modelRef = useRef();

  // Add animations or transformations here
  // Example: Rotate the model
  const rotationSpeed = 0.001;

  useFrame(() => {
    modelRef.current.rotation.x += rotationSpeed;
    modelRef.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} scale={0.1} />
    </group>
  );
};

export default function Home() {
  return (
    <div>
      <div className="globe">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50, near: 0.1, far: 100 }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[0, 1, 0]} intensity={1} castShadow />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
