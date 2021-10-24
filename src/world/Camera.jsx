import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = -3;
camera.position.y = -3.5;
camera.rotation.x = 4.6;

export const positions = {
  original: {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: -7, z: -3 },
  },
  developer: {
    rotation: { x: 5.1, y: 0, z: 1.5 },
    position: { x: 0, y: 0, z: -10 },
  },
  designer: {
    rotation: { x: 0, y: 0, z: -1.5 },
    position: { x: 0, y: 0, z: -10 },
  },
};

export const rotate = (whatScreen) => {
  let first;
  let second;
  switch (whatScreen) {
    case "developer":
      first = new TWEEN.Tween(camera.position)
        .to({ z: positions.developer.position.z })
        .onStart(() => {
          new TWEEN.Tween(camera.rotation)
            .to({ z: positions.developer.rotation.z })
            .easing(TWEEN.Easing.Cubic.InOut)
            .duration(500)
            .start();
        })
        .easing(TWEEN.Easing.Quadratic.InOut);

      first.start();
      break;
    case "original":
      if (
        camera.position.x !== positions.original.position.x ||
        camera.position.z !== positions.original.position.z ||
        camera.position.y !== positions.original.position.y
      ) {
        console.log("im animating!");
        second = new TWEEN.Tween(camera.position)
          .to({ z: positions.original.position.z })
          .easing(TWEEN.Easing.Quadratic.InOut);
        first = new TWEEN.Tween(camera.rotation)
          .to({ z: positions.original.rotation.z })
          .easing(TWEEN.Easing.Cubic.InOut)
          .duration(500);
        first.chain(second).start();
      }

      break;
    case "designer":
      first = new TWEEN.Tween(camera.position)
        .to({ z: positions.designer.position.z })
        .onStart(() => {
          new TWEEN.Tween(camera.rotation)
            .to({ z: positions.designer.rotation.z })
            .easing(TWEEN.Easing.Cubic.InOut)
            .duration(500)
            .start();
        })
        .easing(TWEEN.Easing.Quadratic.InOut);
      first.start();
      break;

    default:
      break;
  }
};

export const pan = () => {};

export default camera;
