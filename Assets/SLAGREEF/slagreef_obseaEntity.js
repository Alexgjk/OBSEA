import * as THREE from 'three';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

class slagreef_obseaEntity {
  constructor(scene){
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/OBSEA/Assets/SLAGREEF/slagreef_obsea.glb', (gltf) => {
      // GLTF scene
      const root = gltf.scene;
      // Fix frustrum culling
      //root.children[0].children[1].frustumCulled = false;

      // Positioning
      root.translateY(-19.4);
      root.translateX(3);
      root.translateZ(0);
      root.rotation.y = 5 * Math.PI / 180;

      scene.add(root);
    });
  }
}

export { slagreef_obseaEntity }