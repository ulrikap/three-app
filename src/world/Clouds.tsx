import * as THREE from "three";
import asyncLoader from "../helpers/LoaderHelper";

interface ICloudsModelResponse {
  instance: THREE.Group;
}

const Clouds = async (
  scene: THREE.Scene,
  gui: dat.GUI
): Promise<ICloudsModelResponse> => {
  const clouds = await loadModel();
  if (clouds) {
    let cloudPositions: any = [];
    while (clouds.children.length) {
      const cloudModel = clouds.children[0];

      let x;
      let z;

      for (let i = 0; i < cloudPositions.length; i += 3) {
        if (!cloudPositions[i]) {
          x = -3;
          z = -3;
        } else {
          x = cloudPositions[i] + 5;
          z = cloudPositions[i + 2] + 5;
        }
      }

      console.log(x);
      console.log(z);

      cloudModel.position.x = x;
      cloudModel.position.y = 7;
      cloudModel.position.z = z;

      cloudPositions.push(x, 7, z);
      scene.add(cloudModel);
    }

    const directionalLight = new THREE.DirectionalLight();
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight
    );

    directionalLight.position.x = -3.1;
    directionalLight.position.y = 10;
    directionalLight.position.z = -9.8;
    directionalLight.intensity = 1.8;

    scene.add(directionalLight);
    scene.add(directionalLightHelper);

    // gui.add(clouds.position, "x", -50, 50).step(0.05).name("Clouds pos X");
    // gui.add(clouds.position, "y", -50, 50).step(0.05).name("Clouds pos y");
    // gui.add(clouds.position, "z", -50, 50).step(0.05).name("Clouds pos z");
  }

  return {
    instance: clouds,
  };
};

const loadModel = async () => {
  const data = await asyncLoader("./Clouds.glb");
  const clouds = data.scene;
  return clouds;
};

export default Clouds;
