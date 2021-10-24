import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

export const positions = {
  original: {
    rotation: { x: 4.6, y: 0, z: 0 },
    position: { x: 4.6, y: -3.5, z: -3 },
  },
  developer: {
    rotation: { x: 4.9, y: 0.3, z: 0 },
    position: { x: 4.6, y: 0, z: -10 },
  },
  designer: {
    rotation: { x: 4.9, y: -0.3, z: 0 },
    position: { x: 4.6, y: 0, z: -10 },
  },
};

camera.position.z = positions.original.position.z;
camera.position.y = positions.original.position.y;
camera.rotation.x = positions.original.position.x;

export const rotate = (whatScreen) => {
  let first;
  switch (whatScreen) {
    case "developer":
      first = new TWEEN.Tween(camera.position)
        .to({ ...positions.developer.position })
        .onStart(() => {
          new TWEEN.Tween(camera.rotation)
            .to({ ...positions.developer.rotation })
            .easing(TWEEN.Easing.Cubic.InOut)
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
        first = new TWEEN.Tween(camera.position)
          .to({ ...positions.original.position })
          .onStart(() => {
            new TWEEN.Tween(camera.rotation)
              .to({ ...positions.original.rotation })
              .easing(TWEEN.Easing.Cubic.InOut)
              .start();
          })
          .easing(TWEEN.Easing.Quadratic.InOut);
        first.start();
      }

      break;
    case "designer":
      first = new TWEEN.Tween(camera.position)
      .to({ ...positions.designer.position })
      .onStart(() => {
        new TWEEN.Tween(camera.rotation)
          .to({ ...positions.designer.rotation })
          .easing(TWEEN.Easing.Cubic.InOut)
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
