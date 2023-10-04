import React, { useRef, useEffect,useState } from 'react';
import * as THREE from 'three';

const WaveParticleComponent = () => {
     const containerRef = useRef();
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Configuración básica de la escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#212932'); // Color de fondo de la escena

   // Crea una cámara con perspectiva
const camera = new THREE.PerspectiveCamera(
    75,                        // (1) Campo de visión (FOV) en grados
    window.innerWidth / window.innerHeight, // (2) Relación de aspecto (ancho de la ventana / alto de la ventana)
    0.1,                        // (3) Plano cercano de recorte (near plane)
    1000                        // (4) Plano lejano de recorte (far plane)
  );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Parámetros de las partículas
    const particleSpacing = 5; // Espacio entre partículas en píxeles
    const lineWidth = 0.25; // Ancho de las líneas (partículas más pequeñas)
    const lineCountX = Math.floor(window.innerWidth / particleSpacing /4);
    const lineCountY = Math.floor(1300 / particleSpacing /4); //cambio esto 

    console.log("window.innerHeight",window.innerHeight)
    // Material de las partículas (negras)
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xFF434E });

    // Arreglo para almacenar las partículas
    const particles = [];

    // Crea las partículas y las añade a la escena
    for (let x = 0; x < lineCountX; x++) {
      for (let y = 0; y < lineCountY; y++) {
        const particle = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), particleMaterial);
        particle.position.x = x * particleSpacing;
        particle.position.y = y * particleSpacing;
        particles.push(particle);
        scene.add(particle);
      }
    }

    // Configura la cámara para centrar las partículas en la vista
    camera.position.set(lineCountX * particleSpacing / 2, lineCountY * particleSpacing / 2, 100);

    // Agrega ejes cartesianos
    //const axesHelper = new THREE.AxesHelper(10); // Longitud de los ejes
    //axesHelper.position.set(lineCountX * particleSpacing / 2, lineCountY * particleSpacing / 2, 0); // Ajusta la posición al centro
    //scene.add(axesHelper);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Calcula una posición Z sinusoidal en función del tiempo
      const time = performance.now() * 0.001; // Convierte el tiempo en segundos
      const amplitude = 10; // Amplitud de la onda
      const frequency = 1; // Frecuencia de la onda
      particles.forEach((particle, index) => {
        const offset = index * 0.1; // Ajuste de fase para que no todas las partículas se muevan al mismo tiempo
        const displacement = Math.sin(frequency * time + offset) * amplitude;
        particle.position.z = displacement;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Maneja el redimensionamiento de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

        // Limpia la escena al desmontar el componente
    return () => {
      scene.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default WaveParticleComponent;