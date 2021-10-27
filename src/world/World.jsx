import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { Anim } from "../animations/PerlinMeshAnimation/Anim";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./Camera";
import Boat from "./Boat";
import Scene from "./Scene";
import Lighthouse from "./Lighthouse";
import BoatController from "./BoatController";
import * as TWEEN from "@tweenjs/tween.js";
import { Material } from "three";

const World = () => {
  const mountRef = useRef(null);
  var gui = useMemo(() => new dat.GUI(), []);

  const scene = Scene();
  const { animation: meshAnimation, mesh } = Anim();
  let lightHouse;
  let boat;

  Lighthouse(scene, gui).then((value) => (lightHouse = value));
  Boat(scene, gui).then((value) => {
    boat = value;
    BoatController(boat.instance);
  });

  useEffect(() => {
    var ambientLight = new THREE.AmbientLight();
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const pointLight = new THREE.DirectionalLight(0x989898, 0.5, 100);
    pointLight.position.set(-5.8, 5, -2.6);
    pointLight.rotation.set(-0.086, 1.9, 0);

    scene.add(pointLight);

    const pointLightHelper = new THREE.DirectionalLightHelper(pointLight);
    scene.add(pointLightHelper);
    window.requestAnimationFrame(() => {
      pointLightHelper.update();
    });

    /**
     * Debug camera
     */
    // ------ OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // // ------ Position
    // gui.add(camera.position, "z", -10, 10).step(0.02);
    // gui.add(camera.position, "y", -10, 10).step(0.02);
    // gui.add(camera.position, "x", -10, 10).step(0.02);

    // // ------ Rotation
    // gui.add(camera.rotation, "z", -10, 10).step(0.02);
    // gui.add(camera.rotation, "y", -10, 10).step(0.02);
    // gui.add(camera.rotation, "x", -10, 10).step(0.02);

    const clock = new THREE.Clock();

    var animate = function () {
      const elapsedTime = clock.getElapsedTime();
      if (boat) {
        boat.rock(Math.sin(elapsedTime) / 3);
      }
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
  }, []);

  return <div ref={mountRef} className={"anim"}></div>;
};

export default World;
