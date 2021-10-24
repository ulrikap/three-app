import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Anim } from "../animations/PerlinMeshAnimation/Anim";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./Camera";
import * as TWEEN from "@tweenjs/tween.js";
import particles from "../animations/AirParticles/Animation";

const World = () => {
  const mountRef = useRef(null);

  const { animation: meshAnimation, mesh } = Anim();

  useEffect(() => {
    var scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight();
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const cursor = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / window.innerWidth - 0.5;
      cursor.y = event.clientY / window.innerHeight - 0.5;
    });

    const geometry = new THREE.SphereGeometry(10, 64, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xf1f1f1 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(25, -40, -5);
    cube.castShadow = true;
    scene.add(cube);

    scene.add(cube);
    scene.add(particles);
    /**
     * Debug camera
     */
    // var gui = new dat.GUI();
    // gui.add(cube.position, "z", -100, 100).step(0.02);
    // gui.add(cube.position, "y", -100, 100).step(0.02);
    // gui.add(cube.position, "x", -100, 100).step(0.02);
    // gui.add(camera.position, "z", -10, 10).step(0.02);
    // gui.add(camera.position, "y", -10, 10).step(0.02);
    // gui.add(camera.position, "x", -10, 10).step(0.02);

    // gui.add(camera.rotation, "z", -10, 10).step(0.02);
    // gui.add(camera.rotation, "y", -10, 10).step(0.02);
    // gui.add(camera.rotation, "x", -10, 10).step(0.02);

    var animate = function () {
      // camera.position.x = cursor.x * 0.5;
      // camera.position.y = cursor.y * 0.5;

      requestAnimationFrame(animate);
      meshAnimation();
      TWEEN.update();
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    scene.add(ambientLight);
    scene.add(mesh);
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, [mesh, meshAnimation]);

  return <div ref={mountRef} className={"anim"}></div>;
};

export default World;
