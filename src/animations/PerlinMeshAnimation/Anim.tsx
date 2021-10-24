import { useMemo } from "react";
import * as THREE from "three";
import type { Euler } from "three";
import noise, { perlin3 } from "./noise";

const MeshAnim = ({
  position,
  rotation,
  grid: { width, height, separation },
  zOfXYT,
  anim: { init, update },
}: {
  position: [number, number, number];
  rotation: Euler | undefined;
  grid: { width: number; height: number; separation: number };
  zOfXYT: any;
  anim: {
    init: any;
    update: any;
  };
}) => {
  //animation
  let t = init;

  // vertex buffer
  let { positions, colors, normals } = useMemo(() => {
    let positions = [],
      colors = [],
      normals = [];

    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        let x = separation * (xi - (width - 1) / 2);
        let y = separation * (yi - (width - 1) / 2);
        let z = zOfXYT(x, y, t);
        positions.push(x, y, z);

        colors.push(255, 255, 255);
        normals.push(0, 0, 1);
      }
    }
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [width, height, separation, zOfXYT, t]);

  let indices = useMemo(() => {
    let indices = [];
    let i = 0;
    for (let yi = 0; yi < height - 1; yi++) {
      for (let xi = 0; xi < width - 1; xi++) {
        indices.push(i, i + 1, i + width + 1);
        indices.push(i + width + 1, i + width, i);
        i++;
      }
      i++;
    }
    return new Uint16Array(indices);
  }, [width, height]);

  const geometry = new THREE.BufferGeometry();
  const positionAttr = new THREE.BufferAttribute(positions, 3);
  const colorAttr = new THREE.BufferAttribute(colors, 3);
  const normalsAttr = new THREE.BufferAttribute(normals, 3);
  const indexAttr = new THREE.BufferAttribute(indices, 3);

  geometry.setAttribute("position", positionAttr);
  geometry.setAttribute("color", colorAttr);
  geometry.setAttribute("normal", normalsAttr);
  geometry.setIndex(indexAttr);

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    wireframe: true,
  });

  const animation = () => {
    t = update(t);

    let i = 0;
    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        positions[i + 2] = zOfXYT(positions[i], positions[i + 1], t);
        i += 3;
      }
    }

    positionAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  };

  const mesh = new THREE.Mesh(geometry, material);

  return { mesh, animation };
};

export const Anim = () => {
  const seed = Math.floor(Math.random() * 2 ** 16);
  noise.seed(seed);

  const sampleNoise = (x: any, y: any, z: any) => {
    let scale = 1 / 12;
    let octaves = 50;
    let persistence = 0.5;
    let lacunarity = 2;

    let amp = 1;
    let freq = 1;
    let value = 0;
    for (let i = 0; i < octaves; i++) {
      value += amp * perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistence;
      freq *= lacunarity;
    }
    return value;
  };
  const zOfXYT = (x: any, y: any, t: any) => sampleNoise(x, y, t);

  return MeshAnim({
    position: [0, 0, 0],
    rotation: new THREE.Euler(-Math.PI / 2, 0, 0),
    grid: {
      width: 50,
      height: 50,
      separation: 2,
    },
    zOfXYT,
    anim: {
      init: 0,
      update: (t: any) => t + 0.002,
    },
  });
};
