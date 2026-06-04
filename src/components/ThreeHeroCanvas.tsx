/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dumbbellRef = useRef<THREE.Group | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync scroll height to scale the 3D mesh on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height || window.innerHeight;
      
      // Calculate how far down the Hero we are (0 to 1)
      const visibleAmount = Math.max(0, Math.min(1, -rect.top / elementHeight));
      setScrollProgress(visibleAmount);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Create Scene
    const scene = new THREE.Scene();

    // 2. Setup Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // 3. Setup Renderer (Transparent background for layout integration)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Construct 3D Dumbbell representation
    const dumbbell = new THREE.Group();

    // Materials
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f8c8d, // Brushed silver
      metalness: 0.95,
      roughness: 0.25,
      flatShading: true,
    });

    const ironPlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, // Dark concrete-iron
      metalness: 0.85,
      roughness: 0.45,
      flatShading: true,
    });

    const redAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0392b, // Brand red collar accents
      metalness: 0.9,
      roughness: 0.3,
      flatShading: true,
    });

    // Parts
    // A - Handle Bar (Grip)
    const handleGeom = new THREE.CylinderGeometry(0.12, 0.12, 3.8, 12);
    const handleMesh = new THREE.Mesh(handleGeom, steelMaterial);
    handleMesh.rotation.z = Math.PI / 2; // Position horizontal
    dumbbell.add(handleMesh);

    // B - Collars (to secure the weights)
    const collarGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.15, 12);
    const collarLeft = new THREE.Mesh(collarGeom, redAccentMaterial);
    collarLeft.position.x = -1.4;
    collarLeft.rotation.z = Math.PI / 2;

    const collarRight = collarLeft.clone();
    collarRight.position.x = 1.4;
    dumbbell.add(collarLeft, collarRight);

    // C - Heavy Hex Plates Left Side
    const innerPlateGeom = new THREE.CylinderGeometry(0.9, 0.9, 0.4, 8); // Hexagonal look (8 sides)
    const innerPlateLeft = new THREE.Mesh(innerPlateGeom, ironPlateMaterial);
    innerPlateLeft.position.x = -1.7;
    innerPlateLeft.rotation.z = Math.PI / 2;

    const outerPlateGeom = new THREE.CylinderGeometry(1.2, 1.2, 0.5, 8); // Large outer plate
    const outerPlateLeft = new THREE.Mesh(outerPlateGeom, ironPlateMaterial);
    outerPlateLeft.position.x = -2.15;
    outerPlateLeft.rotation.z = Math.PI / 2;

    dumbbell.add(innerPlateLeft, outerPlateLeft);

    // D - Heavy Hex Plates Right Side
    const innerPlateRight = innerPlateLeft.clone();
    innerPlateRight.position.x = 1.7;
    
    const outerPlateRight = outerPlateLeft.clone();
    outerPlateRight.position.x = 2.15;

    dumbbell.add(innerPlateRight, outerPlateRight);

    // Tilt the dumbbell naturally
    dumbbell.rotation.x = 0.4;
    dumbbell.rotation.y = 0.3;
    dumbbell.rotation.z = 0.25;

    scene.add(dumbbell);
    dumbbellRef.current = dumbbell;

    // 5. Ambient Gym Dust Particles (Chalk particles drifting)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Box range positions
      positions[i * 3] = (Math.random() - 0.5) * 12;      // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;     // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;     // z
      speeds.push(0.002 + Math.random() * 0.006);          // slow vertical scroll speed
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Warm embers & chalk dust texture simulation
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x95a5a6,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particleSystemRef.current = particleSystem;

    // 6. Dual-Lighting Scheme (High Concept Industrial Highlighting)
    // Front silver light (Cold chrome)
    const coldLight = new THREE.DirectionalLight(0xffffff, 4);
    coldLight.position.set(4, 5, 3);
    scene.add(coldLight);

    // Fire Red Accent Light back left (Warm Iron-Red highlight)
    const brandRedLight = new THREE.DirectionalLight(0xc0392b, 8);
    brandRedLight.position.set(-6, -2, 2);
    scene.add(brandRedLight);

    // Subtle blue fill for contrast
    const blueFillLight = new THREE.DirectionalLight(0x1a252f, 1.5);
    blueFillLight.position.set(-2, 4, -3);
    scene.add(blueFillLight);

    // Global ambient
    const ambientLight = new THREE.AmbientLight(0x151515);
    scene.add(ambientLight);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slowly rotate dumbbell
      if (dumbbellRef.current) {
        // Base auto-rotation
        dumbbellRef.current.rotation.y = elapsedTime * 0.22 + scrollProgress * 2.5;
        dumbbellRef.current.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + scrollProgress * 0.8;
        
        // Morph/scale up dramatically on scroll
        const scaleFactor = 1 + scrollProgress * 1.5; // Starts at 1x, grows up to 2.5x
        dumbbellRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Slide dumbbell position slightly on scroll to move it center-stage
        dumbbellRef.current.position.y = -scrollProgress * 1.5;
        dumbbellRef.current.position.x = -scrollProgress * 1.2;
      }

      // Drift particle system upwards
      if (particleSystemRef.current) {
        const pArray = particleSystemRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pArray[i * 3 + 1] += speeds[i]; // Drift up
          pArray[i * 3] += Math.sin(elapsedTime * 0.5 + i) * 0.001; // Gentle sway

          // If drifts past top, recycle to bottom
          if (pArray[i * 3 + 1] > 4) {
            pArray[i * 3 + 1] = -4;
            pArray[i * 3] = (Math.random() - 0.5) * 12;
          }
        }
        particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize Handling
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width: currentWidth, height: currentHeight } = entries[0].contentRect;
      
      camera.aspect = currentWidth / currentHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(currentWidth, currentHeight);
    });

    resizeObserver.observe(containerRef.current);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        resizeObserver.disconnect();
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      steelMaterial.dispose();
      ironPlateMaterial.dispose();
      redAccentMaterial.dispose();
    };
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      <canvas ref={canvasRef} className="w-full h-full opacity-75 sm:opacity-90 transition-opacity duration-1000" />
    </div>
  );
}
