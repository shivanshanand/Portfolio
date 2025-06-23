/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleExplosion = ({ onComplete, setMouse }) => {
  const points = useRef();
  const velocities = useRef([]);
  const totalParticles = 400;
  const positions = new Float32Array(totalParticles * 3);
  const colors = new Float32Array(totalParticles * 3);

  const colorOptions = [
    new THREE.Color("#ff4c4c"),
    new THREE.Color("#ffdd57"),
    new THREE.Color("#4cf5ff"),
    new THREE.Color("#a04cff"),
    new THREE.Color("#00ffae"),
  ];

  useEffect(() => {
    for (let i = 0; i < totalParticles; i++) {
      const i3 = i * 3;
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      velocities.current[i] = velocity;

      const color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useFrame(() => {
    for (let i = 0; i < totalParticles; i++) {
      const i3 = i * 3;
      const velocity = velocities.current[i];

      if (!velocity) continue; // 🔒 Skip uninitialized

      positions[i3] += velocity.x * 0.3;
      positions[i3 + 1] += velocity.y * 0.3;
      positions[i3 + 2] += velocity.z * 0.3;
    }

    if (points.current?.geometry?.attributes?.position)
      points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.25}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const EntryBlast = ({ onComplete }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black z-50">
        <Canvas camera={{ position: [0, 0, 20], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <ParticleExplosion onComplete={onComplete} />
        </Canvas>
      </div>
    </>
  );
};

export default EntryBlast;
