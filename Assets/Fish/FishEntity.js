import * as THREE from 'three';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

class FishEntity {
  constructor(scene) {
    this.scene = scene;
    this.diameter = 1.8; // Diamètre en unités de la scène
    this.angle = 0; // Angle initial
    this.pivotOrigin = new THREE.Vector3(3, 0, 0); // Origine initiale du pivot
    this.clock = new THREE.Clock(); // Horloge pour les animations
    this.loadModel();
  }

  loadModel() {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/OBSEA/Assets/Fish/fish.gltf', (gltf) => {
      // GLTF scene
      this.root = gltf.scene;

      // Create a group to act as the pivot point
      this.pivot = new THREE.Group();
      this.pivot.add(this.root);
      this.scene.add(this.pivot);

      // Position the model relative to the pivot
      this.root.position.set(this.diameter / 2, -19, 0);
      this.root.rotation.y = 0;

      // Set the initial pivot origin
      this.setPivotOrigin(this.pivotOrigin.x, this.pivotOrigin.y, this.pivotOrigin.z);

      // Animation Mixer
      this.mixer = new THREE.AnimationMixer(this.root);

      // Play all animations
      if (gltf.animations && gltf.animations.length) {
        gltf.animations.forEach((clip) => {
          this.mixer.clipAction(clip).play();
        });
      }

      // Start animation
      this.animate();
    });
  }

  setPivotOrigin(x, y, z) {
    this.pivotOrigin.set(x, y, z);
    if (this.pivot) {
      this.pivot.position.copy(this.pivotOrigin);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Update angle
    this.angle += 0.005; // Adjust speed here

    // Calculate new position
    const radius = this.diameter / 2;
    const x = radius * Math.cos(this.angle);
    const z = radius * Math.sin(this.angle);

    // Update position and rotation of the pivot
    if (this.pivot) {
      this.pivot.position.x = this.pivotOrigin.x + x;
      this.pivot.position.y = this.pivotOrigin.y;
      this.pivot.position.z = this.pivotOrigin.z + z;
      this.pivot.rotation.y = -this.angle + Math.PI / 2; // Adjust rotation to match the direction of travel
    }

    // Update the animation mixer
    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }
  }
}

export { FishEntity };

// Example usage
const scene = new THREE.Scene();
const fishEntity = new FishEntity(scene);

// Change the pivot origin after some time
setTimeout(() => {
  fishEntity.setPivotOrigin(10, 0, 5);
}, 2000); // Change origin to (10, 0, 5) after 2 seconds

