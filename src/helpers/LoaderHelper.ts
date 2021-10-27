// this utility function allows you to use any three.js

import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// loader with promises and async/await
const gltfLoader = new GLTFLoader();
const modelLoader = (url: string): Promise<GLTF> => {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (data) => resolve(data),
      () => {},
      reject
    );
  });
};

export default modelLoader;
