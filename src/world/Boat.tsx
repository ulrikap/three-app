import * as THREE from "three";
import asyncLoader from "../helpers/LoaderHelper";

interface IBoatModelResponse {
  instance: THREE.Group;
  rock: (z: number) => void;
}

const Boat = async (
  scene: THREE.Scene,
  gui: dat.GUI
): Promise<IBoatModelResponse> => {
  const boat = await loadModel();
  if (boat) {
    scene.add(boat);

    boat.scale.set(0.08, 0.08, 0.08);
    boat.position.x = 0.36;
    boat.position.z = 4;
    boat.rotation.y = 0.3;
  }

  return {
    instance: boat,
    rock: (z) => {
      boat.rotation.z = z;
    },
  };
};

const loadModel = async () => {
  const data = await asyncLoader("./boat.glb");
  const boat = data.scene;
  return boat;
};

export default Boat;
