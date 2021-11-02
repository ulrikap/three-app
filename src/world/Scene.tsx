import * as THREE from "three";

const Scene = (): THREE.Scene => {
  var scene = new THREE.Scene();
  const color = new THREE.Color(0xfff1f1f1);
  scene.background = new THREE.Color(color);

  return scene;
};

export default Scene;
