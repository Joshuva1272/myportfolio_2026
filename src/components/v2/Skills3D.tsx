import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Float } from '@react-three/drei';

const dataNodes = [
  { text: 'Python & Pandas', category: 'skill' },
  { text: 'Deep Learning & CNNs', category: 'skill' },
  { text: 'Apache Airflow', category: 'skill' },
  { text: 'Docker & CI/CD', category: 'skill' },
  { text: 'LLMs (Llama, Gemini)', category: 'skill' },
  { text: 'Data Architecture', category: 'skill' },
  { text: 'MSc Data Science (2026)', category: 'edu' },
  { text: 'BSc Computer Science', category: 'edu' },
  { text: 'Predictive Modelling', category: 'skill' },
  { text: 'Tableau & Power BI', category: 'skill' },
  { text: 'FastAPI', category: 'skill' },
  { text: 'Cloud Analytics', category: 'skill' },
];

function Node({ text, position, category }: { text: string, position: [number, number, number], category: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color={category === 'edu' ? '#ff00ff' : '#00f0ff'} 
          emissive={category === 'edu' ? '#ff00ff' : '#00f0ff'} 
          emissiveIntensity={0.8} 
        />
        <Html distanceFactor={10} center>
          <div style={{ 
            color: 'white', 
            background: 'rgba(10, 10, 10, 0.85)', 
            padding: '6px 12px', 
            borderRadius: '8px', 
            border: `1px solid ${category === 'edu' ? 'rgba(255, 0, 255, 0.4)' : 'rgba(0, 240, 255, 0.4)'}`, 
            whiteSpace: 'nowrap', 
            fontSize: '14px',
            fontWeight: 500,
            backdropFilter: 'blur(4px)',
            pointerEvents: 'none'
          }}>
            {text}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function Constellation() {
  const nodes = useMemo(() => {
    return dataNodes.map((node, i) => {
      // Golden spiral distribution to arrange nodes beautifully in 3D sphere
      const phi = Math.acos(-1 + (2 * i) / dataNodes.length);
      const theta = Math.sqrt(dataNodes.length * Math.PI) * phi;
      const r = 3.5; // radius of the sphere
      return {
        ...node,
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        ] as [number, number, number]
      };
    });
  }, []);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      {nodes.map((node, i) => (
        <Node key={i} {...node} />
      ))}
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.8} 
        enableZoom={false} 
        enablePan={false}
      />
    </group>
  );
}

export default function Skills3D() {
  return (
    <div className="skills-3d-container relative w-full mb-16 rounded-2xl overflow-hidden border border-white/10" style={{ height: '450px', background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%)' }}>
      <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/50 border border-white/10 rounded-full text-xs text-slate-300 backdrop-blur-md">
        Interactive 3D View (Drag to rotate)
      </div>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <Constellation />
      </Canvas>
    </div>
  );
}
