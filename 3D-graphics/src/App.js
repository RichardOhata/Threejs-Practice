
import './App.css';
// import Content from './components/Content';
import { Canvas } from 'react-three-fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';


function Model(props) {
  const { scene } = useGLTF("/katana/scene.gltf");
  return <primitive object={scene} {...props}/>
}

function App() {
  return (
    // <div className="App">
    //  <Content/>
    // </div>
    <Canvas drp={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={1}/>
          </Stage>
        </PresentationControls>
    </Canvas>
  );
}

export default App;
