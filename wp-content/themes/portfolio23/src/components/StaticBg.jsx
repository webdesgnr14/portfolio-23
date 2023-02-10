import * as THREE from "three";
import React, {
  useLayoutEffect,
  useRef,
  createElement,
  forwardRef,
} from "react";

export const StaticBg = () => {
  const canvasRef = useRef(null);

  const Canvas = forwardRef(({}, ref) => {
    const canvas = createElement("canvas", {
      id: "animated-bg",
      className: "webgl",
      ref: ref,
    });

    return canvas;
  });

  useLayoutEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const objectsDistance = 4;
      const bodyH = document.documentElement.scrollHeight;

      scene.background = new THREE.Color(0x2e303a);

      //Particles
      //Geometry
      const particlesCount = bodyH * 16;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * bodyH;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        color: "#e6e8e6",
        sizeAttenuation: true,
        size: 0.03,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);

      scene.add(particles);

      //Light
      const directionalLight = new THREE.DirectionalLight("#FFFFFF", 1);
      directionalLight.position.set(1, 1, 0);
      scene.add(directionalLight);

      //Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      window.addEventListener("resize", () => {
        //update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        //update renderer
        renderer.setClearColor(0x2e303a, 1);
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      //Scroll
      let scrollY = window.scrollY;

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
      });

      //Cursor
      const cursor = {};
      cursor.x = 0;
      cursor.y = 0;

      window.addEventListener("mousemove", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
      });

      //Camera Group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      //Base Camera
      const camera = new THREE.PerspectiveCamera(
        35,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 6;
      cameraGroup.add(camera);

      //Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
      });

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      //Animate - Clock
      const clock = new THREE.Clock();
      let previousTime = 0;

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        //Animate Camera
        camera.position.y = -((scrollY / sizes.height) * objectsDistance);

        const parallaxX = cursor.x * 0.5;
        const parallaxY = -cursor.y * 0.5;

        cameraGroup.position.x +=
          (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
        cameraGroup.position.y +=
          (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

        //Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(tick);
      };

      tick();
    }
  }, [canvasRef.current]);

  return <Canvas ref={canvasRef} />;
};
