import * as THREE from "three";

const SimpleCube = () => {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  material.color = new THREE.Color(0xffe3e3e3);

  const mesh = new THREE.Mesh(geometry, material);

  const rotate = (elapsedTime: number) => {
    mesh.rotation.y = elapsedTime;
    mesh.rotation.z = elapsedTime;
  };
  return { mesh, rotate };
};

export default SimpleCube;
