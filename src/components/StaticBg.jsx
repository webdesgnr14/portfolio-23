import * as THREE from 'three';
import * as React from 'react';

export const StaticBg = () => {
	const canvasRef = React.useRef(null);
	const scrollYRef = React.useRef(window.scrollY);

	React.useLayoutEffect(() => {
		if (!canvasRef.current) return;
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
			'position',
			new THREE.BufferAttribute(positions, 3)
		);

		const particlesMaterial = new THREE.PointsMaterial({
			color: '#e6e8e6',
			sizeAttenuation: true,
			size: 0.03,
		});

		const particles = new THREE.Points(particlesGeometry, particlesMaterial);

		scene.add(particles);

		//Light
		const directionalLight = new THREE.DirectionalLight('#FFFFFF', 1);
		directionalLight.position.set(1, 1, 0);
		scene.add(directionalLight);

		//Sizes
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		function handleResize() {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();
			renderer.setClearColor(0x2e303a, 1);
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		}
		function handleScroll() {
			scrollYRef.current = window.scrollY;
		}
		//Cursor
		const cursor = { x: 0, y: 0 };
		function handleMouseMove(event) {
			cursor.x = event.clientX / sizes.width - 0.5;
			cursor.y = event.clientY / sizes.height - 0.5;
		}
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

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

		let animationId;
		const tick = () => {
			const elapsedTime = clock.getElapsedTime();
			const deltaTime = elapsedTime - previousTime;
			previousTime = elapsedTime;
			camera.position.y = -(
				(scrollYRef.current / sizes.height) *
				objectsDistance
			);
			const parallaxX = cursor.x * 0.5;
			const parallaxY = -cursor.y * 0.5;
			cameraGroup.position.x +=
				(parallaxX - cameraGroup.position.x) * 5 * deltaTime;
			cameraGroup.position.y +=
				(parallaxY - cameraGroup.position.y) * 5 * deltaTime;
			renderer.render(scene, camera);
			animationId = window.requestAnimationFrame(tick);
		};
		tick();

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationId) window.cancelAnimationFrame(animationId);
			renderer.dispose();
			particlesGeometry.dispose();
			particlesMaterial.dispose();
		};
	}, []);

	return <canvas id="animated-bg" className="webgl" ref={canvasRef} />;
};
