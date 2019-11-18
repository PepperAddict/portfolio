(function () {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);


  camera.position.set(0, 0, 15); //side up/down zoom
  let renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setClearColor("#e5e5e5", 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const coverme = document.getElementById('cover-me')

  coverme.appendChild(renderer.domElement)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    //change aspect ratio too
    camera.aspect = window.innerWidth / window.innerHeight;
    //update project matrix when update 
    camera.updateProjectionMatrix();
  })


  var geometry = new THREE.IcosahedronBufferGeometry(14, 4);

  var material = new THREE.MeshPhysicalMaterial({
    color: 0xFFFFFF,
    roughness: 0.5,
    reflectivity: 0.6,
    clearcoat: 1,
    clearcoatRoughness: 0,
    flatShading: true
  });

  var sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);


  var light = new THREE.DirectionalLight(0xff02d8, 1);
  light.position.set(-50, 30, 15);
  scene.add(light)

  var lighttwo = new THREE.DirectionalLight(0x0090ff, 1);
  lighttwo.position.set(35, 30, 25);
  scene.add(lighttwo)

  var lightthree = new THREE.DirectionalLight(0xffc000, 0.5);
  lightthree.position.set(0, -15, 15);
  scene.add(lightthree)

  let istrue;



  let prevTimestamp = null;
  let rotSpeed = 0.000002;
  let intSpeed = 0.000002;

  var rerender = function (timestamp) {
    //60 frames per second loop

    var elapsedTime;
    if (!prevTimestamp) {
      prevTimestamp = timestamp;
    }
    elapsedTime = timestamp - prevTimestamp;
    prevTimestamp = timestamp;
    sphere.rotation.x += rotSpeed * elapsedTime;

    if (lightthree.intensity <= 0) {
      istrue = false;
    } else if (lightthree.intensity >= 0.5) {
      istrue = true;
    }
    if (istrue) {
      lightthree.intensity -= intSpeed * elapsedTime;
    } else {
      lightthree.intensity += intSpeed * elapsedTime;
    }
    if (lightthree.intensity > 1.0)
      lightthree.intensity = 1.0;
    if (lightthree.intensity < 0.0)
      lightthree.intensity = 0.0;

    //apply scene and camera
    renderer.render(scene, camera);
    requestAnimationFrame(rerender);
  }
  requestAnimationFrame(rerender);

}())