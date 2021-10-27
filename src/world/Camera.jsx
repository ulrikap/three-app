import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

const fov = 75;
const near = 0.1;
const far = 500;

var camera = new THREE.PerspectiveCamera(
  fov,
  window.innerWidth / window.innerHeight,
  near,
  far
);

export const positions = {
  original: {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: -2.46, y: 1.88, z: 0 },
  },
  developer: {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 4.6, y: 0, z: 0 },
  },
  designer: {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 4.6, y: 0, z: 0 },
  },
};

camera.position.set(
  positions.original.position.x,
  positions.original.position.y,
  positions.original.position.z
);
camera.rotation.set(
  positions.original.rotation.x,
  positions.original.rotation.y,
  positions.original.rotation.z
);

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
