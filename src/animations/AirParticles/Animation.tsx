import * as THREE from "three";

const geometry = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 400;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const loader = new THREE.TextureLoader();
const material = new THREE.PointsMaterial({
  size: 0.05,
  map: loader.load(
    "https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"
  ),
  transparent: true,
  // color: 0x44aa88
});
material.sizeAttenuation = true;

const particles = new THREE.Points(geometry, material);

export default particles;
