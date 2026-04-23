import * as THREE from 'three';

// This function takes a standard tile texture and creates a "Bump" effect
export const applyRealism = (texture, settings = { displacement: 0.05, roughness: 0.2 }) => {
  texture.anisotropy = 16;
  
  // We return a set of material properties
  return {
    map: texture,
    // Using the same texture as a 'bumpMap' simulates depth in the grout lines
    bumpMap: texture, 
    bumpScale: settings.displacement,
    roughness: settings.roughness,
    metalness: 0.1, // Gives that slight ceramic/vitrified sheen
  };
};