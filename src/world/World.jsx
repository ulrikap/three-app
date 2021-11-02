import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./Camera";
import Scene from "./Scene";
import * as TWEEN from "@tweenjs/tween.js";
import SimpleCube from "../components/SimpleCube";

const World = (props) => {
  const mountRef = useRef(null);
  // For debugging purposes
  var gui = useMemo(() => new dat.GUI(), []);

  // Scene
  const scene = Scene();
  const { rotate, mesh: CubeMesh } = SimpleCube();

  useEffect(() => {
    // Renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    /**
     * Debug camera
     */
    // ------ OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // // ------ Position
    // gui.add(camera.position, "z", -10, 10).step(0.02);
    // gui.add(camera.position, "y", -10, 10).step(0.02);
    // gui.add(camera.position, "x", -10, 10).step(0.02);

    // // ------ Rotation
    // gui.add(camera.rotation, "z", -10, 10).step(0.02);
    // gui.add(camera.rotation, "y", -10, 10).step(0.02);
    // gui.add(camera.rotation, "x", -10, 10).step(0.02);

    const clock = new THREE.Clock();

    scene.add(CubeMesh);

    var animate = function () {
      const elapsedTime = clock.getElapsedTime();
      requestAnimationFrame(animate);
      rotate(elapsedTime);
      TWEEN.update();
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    animate();
  }, [scene, CubeMesh, rotate]);

  return <div ref={mountRef} className={"anim"}></div>;
};

export default World;
