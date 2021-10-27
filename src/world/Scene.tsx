import * as THREE from "three";

const Scene = (): THREE.Scene => {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf1f1f1);
  const near = 0.1;
  const far = 52;
  const color = new THREE.Color(0xfff2f2f2);
  scene.fog = new THREE.Fog(color, near, far);
  scene.background = new THREE.Color(color);

  return scene;
};

export default Scene;
