import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Scene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currenMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      currenMount.clientWidth / currenMount.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 4;
    scene.add(camera);

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currenMount.clientWidth, currenMount.clientHeight);
    currenMount.appendChild(renderer.domElement);

    // constrols
    const constrols = new OrbitControls(camera, renderer.domElement);
    constrols.enableDamping = true;
    //cubo
    const cube = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial({
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(cube);

    // renderizar la escena
    const animate = () => {
      constrols.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // limpiar la escena
    return () => {
      currenMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="Contenedor3D"
      style={{ width: '100%', height: '100Vh' }}
    ></div>
  );
}
