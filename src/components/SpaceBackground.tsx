'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import NebulaShader from './shaders/Nebula';

function NebulaPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        args={[NebulaShader]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={100}
          depth={80}
          count={5000}
          factor={3}
          saturation={0}
          fade
          speed={1}
        />
        <NebulaPlane />
      </Canvas>
    </div>
  );
}
