import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 1.5;
camera.position.y = -7;
camera.rotation.x = 1.8;

export const rotationPositions = {
  developer: {
    z: 1.5,
  },
  designer: { z: -1.5 },
  original: { z: 0 },
};

export const rotate = (whatScreen) => {
  switch (whatScreen) {
    case "developer":
      new TWEEN.Tween(camera.rotation)
        .to({ z: rotationPositions.developer.z })
        .easing(TWEEN.Easing.Exponential.Out)
        .start();
      break;
    case "original":
      new TWEEN.Tween(camera.rotation)
        .to({ z: rotationPositions.original.z })
        .easing(TWEEN.Easing.Exponential.Out)
        .start();
      break;
    case "designer":
      new TWEEN.Tween(camera.rotation)
        .to({ z: rotationPositions.designer.z })
        .easing(TWEEN.Easing.Exponential.Out)
        .start();
      break;

    default:
      break;
  }
};

export default camera;
