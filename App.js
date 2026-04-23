import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Scene from './Scene';
import TilePicker from './TilePicker';

function App() {
  // Global state for our visualizer
  const [selectedTexture, setSelectedTexture] = useState('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000');
  const [repeatCount, setRepeatCount] = useState(8);

  return (
    <div className="relative w-screen h-screen">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 10, 15]} />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />

        <Suspense fallback={null}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} castShadow />
          
          {/* Pass state as props to the 3D Scene */}
          <Scene textureUrl={selectedTexture} repeat={repeatCount} />
        </Suspense>
      </Canvas>

      {/* The UI Overlay */}
      <TilePicker 
        onSelect={setSelectedTexture} 
        currentRepeat={repeatCount} 
        setRepeat={setRepeatCount} 
      />
    </div>
  );
}

export default App;