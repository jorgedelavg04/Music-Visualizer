var renderer = null, 
scene = null, 
camera = null,
directionalLight = null,
root = null,
group = null,
cube = null;

var animator = null,
duration = 4, // sec
loopAnimation = false;
var sound = null;
var analyser = null;
var dataFrecuency = null;
var data = null;
var spotLight = null;

var movementSpeed = 80;
var totalObjects = 1000;
var objectSize = 10;
var sizeRandomness = 4000;
var colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0x996600, 0xFFFFFF];
/////////////////////////////////
var dirs = [];
var parts = [];


function run() 
{
    renderer.render( scene, camera );
    parts.push(new explodeParticles(0, 0));
    render();

            function render() {
        requestAnimationFrame( render );
         
        var pCount = parts.length;
          while(pCount--) {
            parts[pCount].update();
          }

                renderer.render( scene, camera );

            }


   
    // Update the camera controller
    orbitControls.update();
}

    /*function run() 
    {
        requestAnimationFrame(function() { run(); });

        // Render the scene
        renderer.render( scene, camera );

    /*    
        parts.push(new explodeParticles(0, 0));
        render();


        function render() {
            requestAnimationFrame( render );
             
            var pCount = parts.length;
              while(pCount--) {
                parts[pCount].update();
              }

                    renderer.render( scene, camera );

                }
        //window.addEventListener( 'mousedown', onclick, false );


        if(analyser.getFrequencyData()>100) {
            parts.push(new explodeParticles ((Math.random() * sizeRandomness)-(sizeRandomness/2), (Math.random() * sizeRandomness)-(sizeRandomness/2)));
        }


        dataFrecuency = analyser.getFrequencyData();
        
        var geometryLine = new THREE.Geometry();
            geometryLine.vertices.push(
            new THREE.Vector3( -10, 0, 0 ),
            new THREE.Vector3( 10, 0, 0 )
        );

    */
    /*

        var material = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });

        var line = new THREE.Line( geometryLine, material );
        scene.add( line );


        // Update the animations
        KF.update();

        // Update the camera controller
        orbitControls.update();
    }
/*

function render() {
    renderer.render( scene, camera );
    parts.push(new ExplodeAnimation(0, 0));
    render();

    function render() {
        requestAnimationFrame( render );
         
        var pCount = parts.length;
        while(pCount--) {
        parts[pCount].update();
    }

    renderer.render( scene, camera );

}


*/
/*
function onclick(){
  event.preventDefault();
  parts.push(new explodeParticles ((Math.random() * sizeRandomness)-(sizeRandomness/2), (Math.random() * sizeRandomness)-(sizeRandomness/2)));
}
*/


function audioLoader() {

    // create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

    // create an Audio source
    sound = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
        audioLoader.load( '../sounds/376737_Skullbeatz___Bad_Cat_Maste.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });

    // create an AudioAnalyser, passing in the sound and desired fftSize
    analyser = new THREE.AudioAnalyser( sound, 32 );

    // get the average frequency of the sound
    

}


function createScene(canvas) 
{

    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.set(0, 0, 8);
    scene.add(camera);

    // Add a directional light to show off the object
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1);

    spotLight = new THREE.SpotLight (0xffffff, 0.5);
    spotLight.position.set(2, 2, 5);
    spotLight.target.position.set(2, 0, 4);
    root.add(spotLight);

    // Create a group to hold all the objects
    root = new THREE.Object3D;

    // Create and add all the lights
    directionalLight.position.set(0, 1, 2);
    root.add(directionalLight);

    // Create a group to hold the objects
    group = new THREE.Object3D;

    audioLoader();



    root.add(group);

    // And put some geometry and material together into a mesh
    geometry = new THREE.CubeGeometry(2, 2, 2);
    var color = 0xffffff;
    ambient = 0x888888;
    cube = new THREE.Mesh(geometry, 
            new THREE.MeshPhongMaterial({color:color}));
    cube.rotation.x = Math.PI / 4;

    // Add the mesh to our group
    group.add( cube );


    /*
    var geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(
    new THREE.Vector3( -10, 0, 0 ),
    new THREE.Vector3( 10, 0, 0 )
    );



    var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    var line = new THREE.Line( geometryLine, material );
    group.add( line );
    */

    // Now add the group to our scene


    scene.add( root );
}


function explodeParticles(x,y) {
    
    var geometry = new THREE.Geometry();

    for (i = 0; i < totalObjects; i ++) 
    { 
        var vertex = new THREE.Vector3();
        vertex.x = x;
        vertex.y = y;
        vertex.z = 0;
  
        geometry.vertices.push( vertex );
        dirs.push({x:(Math.random() * movementSpeed)-(movementSpeed/2),y:(Math.random() * movementSpeed)-(movementSpeed/2),z:(Math.random() * movementSpeed)-(movementSpeed/2)});
    }

    var material = new THREE.ParticleBasicMaterial( { size: objectSize,  color: colors[Math.round(Math.random() * colors.length)] });
    var particles = new THREE.ParticleSystem( geometry, material );


    this.object = particles;
    this.status = true;

    this.xDir = (Math.random() * movementSpeed)-(movementSpeed/2);
    this.yDir = (Math.random() * movementSpeed)-(movementSpeed/2);
    this.zDir = (Math.random() * movementSpeed)-(movementSpeed/2);

    scene.add( this.object  ); 

    this.update = function(){
    if (this.status == true){
      var pCount = totalObjects;
      while(pCount--) {
        var particle =  this.object.geometry.vertices[pCount]
        particle.y += dirs[pCount].y;
        particle.x += dirs[pCount].x;
        particle.z += dirs[pCount].z;
      }
      this.object.geometry.verticesNeedUpdate = true;
    }
  }
}

function initAnimations() 
{
    animator = new KF.KeyFrameAnimator;
    animator.init({ 
        interps:
            [
                { 
                    keys:[0, .5, 1], 
                    values:[
                            { y : 1 },
                            { y : Math.PI  },
                            { y : 1 },
                            ],
                    target:group.scale
                },
                { 
                    keys:[0, .5, 1], 
                    values:[
                            { y : 0 },
                            { y : Math.PI * 2  },
                            { y : 0 },
                            ],
                    target:group.rotation
                },
            ],
        loop: loopAnimation,
        duration: duration * 1000,
    });
}

function playAnimations()
{
    animator.start();
}