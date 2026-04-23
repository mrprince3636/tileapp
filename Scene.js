import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { applyRealism } from './NormalMapGenerator';

const Scene = ({ textureUrl, repeat }) => {
  // Load the tile texture
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  const materialProps = useMemo(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat, repeat);
    
    // Apply our realism settings
    return applyRealism(texture, { 
      displacement: 0.02, // Adjusts how deep the grout looks
      roughness: 0.15     // 0.1 is High Gloss, 0.8 is Matte
    });
  }, [texture, repeat]);

  return (
    <group>
      {/* The Main Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Adding a Skirting/Baseboard for context */}
      <mesh position={[0, 0.25, -15]}>
        <boxGeometry args={[30, 0.5, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Shadow Plane to ground the scene */}
      <contactShadows 
        position={[0, 0, 0]} 
        opacity={0.4} 
        scale={30} 
        blur={2} 
        far={4.5} 
      />
    </group>
  );
};

export default Scene;