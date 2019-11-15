(function () {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
  camera.position.set(0, 0, 15); //side up/down zoom
  let renderer = new THREE.WebGLRenderer({antialias: true});

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

  var material = new THREE.MeshPhysicalMaterial( {color: 0xFFFFFF, specular: 0xad3a8d, roughness: 0.5, shininess: 5, reflectivity: 0.6, clearcoat: 1, clearcoatRoughness: 0, flatShading: true} );
  var sphere = new THREE.Mesh( geometry, material );

  scene.add( sphere );


    var light = new THREE.DirectionalLight( 0xff02d8, 1 );
    light.position.set(-50, 30, 15);
    scene.add(light)
  
    var lighttwo = new THREE.DirectionalLight( 0x0090ff, 1 );
    lighttwo.position.set(35, 30, 25);
    scene.add(lighttwo)
  
    var lightthree = new THREE.DirectionalLight( 0xffc000, 0.5 );
    lightthree.position.set(0, -15, 15);
    scene.add(lightthree)

let istrue;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
console.log(isFirefox)
  var rerender = function () {
    //60 frames per second loop
    requestAnimationFrame(rerender);
    if (isFirefox) {
        sphere.rotation.x += .0002;
    } else {
      sphere.rotation.x += .00002;
    }


 
    if (lightthree.intensity <= 0) {
      istrue = false;
    } else if (lightthree.intensity >= 0.5) {
      istrue = true;
    }
    if (istrue) {
      lightthree.intensity -= .001
    } else {
      lightthree.intensity += .001
    }

    //apply scene and camera
    renderer.render(scene, camera)
  }
  rerender();

}())