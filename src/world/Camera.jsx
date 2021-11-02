import * as THREE from "three";

const fov = 75;
const near = 0.1;
const far = 100;

var camera = new THREE.PerspectiveCamera(
  fov,
  window.innerWidth / window.innerHeight,
  near,
  far
);

camera.position.x = 5
camera.position.y = 1
camera.position.z = 2

export default camera;
