import React from "react";
import KatanaCanvas from "./canvas/Katana";
import { Canvas } from "react-three-fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Model = (props) => {
  const { scene } = useGLTF("/katana/scene.gltf");
  return <primitive object={scene} {...props} />;
};

const Gallery = () => {
  return (
    <div>
      <Canvas
        drp={[1, 2]}
        shadows
        camera={{ fov: 1 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={1} />
          </Stage>
        </PresentationControls>
      </Canvas>

      <div>Hello</div>
    </div>
  );
};

export default Gallery;
