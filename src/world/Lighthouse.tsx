import * as THREE from "three";
import asyncLoader from "../helpers/LoaderHelper";

interface ILighthouseModelResponse {
  instance: THREE.Group;
}

const Lighthouse = async (
  scene: THREE.Scene,
  gui: dat.GUI
): Promise<ILighthouseModelResponse> => {
  const lighthouse = await loadModel();
  if (lighthouse) {
    scene.add(lighthouse);

    lighthouse.scale.set(2, 2, 2);
    lighthouse.position.x = -7;
    lighthouse.position.z = 4;
    lighthouse.rotation.y = 0.8;
  }

  return {
    instance: lighthouse,
  };
};

const loadModel = async () => {
  const data = await asyncLoader("./lighthouse.glb");
  const lighthouse = data.scene;
  console.log(data);

  return lighthouse;
};

export default Lighthouse;
