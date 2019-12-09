/*

Final Project


*/

var renderer = null, 
scene = null, 
camera = null,
directionalLight = null,
root = null,
group = null,
cube = null,
groupG = null,
mesh = null, 
meshfront = null,
materialFront = null;
var mapUrl = "../images/ash_uvgrid01.jpg";

var colorFront = null;
//var THREE = require( 'three' );
//var MeshLine = require( 'three.meshline' );

var spotLight = null, spotLight2 = null, spotLight3 = null, spotLight4 = null;

var animator = null,
duration = 4, // sec
loopAnimation = false;
var sound = null;
var analyser = null;
var dataFrecuency = null;
var data = null;

var movementSpeed = 80;
var totalObjects = 500;
var objectSize = 10;
var sizeRandomness = 1000;
var colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0xDE7697, 0xFFFFFF];
/////////////////////////////////
var dirs = [];
var parts = [];
var MAX_POINTS = 100;
var height = 0;
var star;
var path;
var oHeight = 0;
var delta = 0;
var geometry3;



var mesh1, geometry1, line1;
var mesh2, geometry2, line2;
var mesh3, geometry3, line3;
var mesh4, geometry4, line4;
var mesh5, geometry5, line5;
var mesh6, geometry6, line6;
var mesh7, geometry7, line7;
var mesh8, geometry8, line8;


function run() 
{
    renderer.render( scene, camera );
    parts.push(new explodeParticles(0, 0));
    spotLight.intensity = 0;
    spotLight2.intensity = 0;    

    mesh1.updateMatrix(); 
    mesh1.geometry.applyMatrix( mesh1.matrix );
    mesh1.matrix.identity();
    mesh1.position.set(0,50,0);
    mesh1.geometry.verticesNeedUpdate = true;

    mesh2.updateMatrix(); 
    mesh2.geometry.applyMatrix( mesh2.matrix );
    mesh2.matrix.identity();
    mesh2.position.set(0,50,0);
    mesh2.geometry.verticesNeedUpdate = true;

    mesh3.updateMatrix(); 
    mesh3.geometry.applyMatrix( mesh3.matrix );
    mesh3.matrix.identity();
    mesh3.position.set(0,50,0);
    mesh3.geometry.verticesNeedUpdate = true;

    mesh4.updateMatrix(); 
    mesh4.geometry.applyMatrix( mesh4.matrix );
    mesh4.matrix.identity();
    mesh4.position.set(0,50,0);
    mesh4.geometry.verticesNeedUpdate = true;

    mesh5.updateMatrix(); 
    mesh5.geometry.applyMatrix( mesh5.matrix );
    mesh5.matrix.identity();
    mesh5.position.set(0,50,0);
    mesh5.geometry.verticesNeedUpdate = true;

    var counter = 0;

    render();

        function render() {

        requestAnimationFrame( render );

        var pCount = parts.length;
            while(pCount--) {
                parts[pCount].update();
            }

                renderer.render( scene, camera );

    
                KF.update();

                dataFrecuency = analyser.getAverageFrequency() / 256;
                console.log(dataFrecuency);

                if(dataFrecuency > 0.40 && dataFrecuency < 0.41 || dataFrecuency > 0.60 && dataFrecuency < 0.61 ) {
                    parts.push(new explodeParticles ((Math.random() * sizeRandomness)-(sizeRandomness/2), (Math.random() * sizeRandomness)-(sizeRandomness/2)));

                    mesh6.position.set(0,100,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,100,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,100,0);
                    mesh8.geometry.verticesNeedUpdate = true;
                    



                }else if(dataFrecuency > 0.50 && dataFrecuency < 0.51) {
                    parts.push(new explodeParticles ((Math.random() * sizeRandomness)-(sizeRandomness/2), (Math.random() * sizeRandomness)-(sizeRandomness/2)));
                    
                    mesh6.position.set(0,100,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,100,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,100,0);
                    mesh8.geometry.verticesNeedUpdate = true;
                    playAnimations();
                }
                else if(dataFrecuency > 0.30 && dataFrecuency < 0.31) {
                    parts.push(new explodeParticles ((Math.random() * sizeRandomness)-(sizeRandomness/2), (Math.random() * sizeRandomness)-(sizeRandomness/2)));

                    mesh6.position.set(0,100,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,100,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,100,0);
                    mesh8.geometry.verticesNeedUpdate = true;

                } 

                //Light
                else if(dataFrecuency >= 0.30 && dataFrecuency < 0.35){
                    spotLight2.intensity = 5;

                    mesh1.position.set(0,120,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,-10,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,150,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,-10,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,120,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;

                    
                }

                else if(dataFrecuency >= 0.35 && dataFrecuency < 0.40 ){
                    spotLight.intensity = 15;
                    spotLight2.intensity = 11;
                    spotLight3.intensity = 10;

                    spotLight.color.setHex( 0x4897D8 );
                    spotLight2.color.setHex( 0x4897D8  );
                    spotLight3.color.setHex( 0x4897D8 );




                    mesh1.position.set(0,50,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,30,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,100,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,30,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,50,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;


                }
                 else if(dataFrecuency >= 0.40 && dataFrecuency < 0.45){
                    spotLight.intensity = 20;
                    spotLight2.intensity = 14;
                    spotLight3.intensity = 11;

                    spotLight.color.setHex( 0xFFDB5C);
                    spotLight2.color.setHex( 0xFFDB5C );
                    spotLight3.color.setHex( 0xFFDB5C);


                   	mesh1.position.set(0,50,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,30,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,100,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,30,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,50,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    


                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;

            
                }
                else if(dataFrecuency >= 0.45 && dataFrecuency < 0.49){
                    spotLight.intensity = 20;
                    spotLight2.intensity = 14;
                    spotLight3.intensity = 11;

                    spotLight.color.setHex( 0xFA6E59 );
                    spotLight2.color.setHex( 0xFA6E59  );
                    spotLight3.color.setHex( 0xFA6E59 );

                    mesh1.position.set(0,50,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,-10,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,100,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,-10,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,50,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    


                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;

            
                }
                else if(dataFrecuency >= 0.50 && dataFrecuency < 0.55){
                    spotLight.intensity = 30;
                    spotLight2.intensity = 26;
                    spotLight3.intensity = 21;

                    spotLight.color.setHex( 0xF8A055 );
                    spotLight2.color.setHex( 0xF8A055  );
                    spotLight3.color.setHex( 0xF8A055 );

                    mesh1.position.set(0,150,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,30,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,-10,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,30,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,150,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;
                   
                }
                 else if(dataFrecuency >= 0.60 && dataFrecuency < 0.65){
                    spotLight.intensity = 20;
                    spotLight2.intensity = 33;
                    spotLight3.intensity = 16;
                    

                    spotLight.color.setHex( 0x739F3D);
                    spotLight2.color.setHex( 0x739F3D);
                    spotLight3.color.setHex( 0x739F3D);


                    mesh1.position.set(0,70,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,-10,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,100,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,-10,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,70,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    /// 6 7 8
                    mesh6.position.set(0,80,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,90,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,100,0);
                    mesh8.geometry.verticesNeedUpdate = true;

                    
                } else if(dataFrecuency == 0){
                    spotLight.intensity = 10;
                    spotLight2.intensity = 10;
                    spotLight3.intensity = 10;
                    

                    spotLight.color.setHex( 0x808080);
                    spotLight2.color.setHex( 0x808080 );
                    spotLight3.color.setHex( 0x808080);


                    mesh1.position.set(0,50,0);
                    mesh1.geometry.verticesNeedUpdate = true;

                    mesh2.position.set(0,50,0);
                    mesh2.geometry.verticesNeedUpdate = true;

                    mesh3.position.set(0,50,0);
                    mesh3.geometry.verticesNeedUpdate = true;

                    mesh4.position.set(0,50,0);
                    mesh4.geometry.verticesNeedUpdate = true;
                    
                    mesh5.position.set(0,50,0);
                    mesh5.geometry.verticesNeedUpdate = true;

                    /// 6 7 8
                    mesh6.position.set(0,50,0);
                    mesh6.geometry.verticesNeedUpdate = true;

                    mesh7.position.set(0,50,0);
                    mesh7.geometry.verticesNeedUpdate = true;

                    mesh8.position.set(0,50,0);
                    mesh8.geometry.verticesNeedUpdate = true;

                    
                }

            }


    // Update the camera controller
    orbitControls.update();
}


function audioLoader() {
 
    var audioListener = new THREE.AudioListener();

    // add the listener to the camera
    camera.add( audioListener );

    // instantiate audio object
    var oceanAmbientSound = new THREE.Audio( audioListener );

    // add the audio object to the scene
    scene.add( oceanAmbientSound );

    // instantiate a loader
    var loader = new THREE.AudioLoader();

    // load a resource
    loader.load(
        // resource URL
        '../sounds/358232_j_s_song.mp3',
        //'../sounds/376737_Skullbeatz___Bad_Cat_Maste.mp3',
        
        // onLoad callback
        function ( audioBuffer ) {
            // set the audio object buffer to the loaded object
            oceanAmbientSound.setBuffer( audioBuffer );

            // play the audio
            oceanAmbientSound.play();
        },
        // onProgress callback
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },

        // onError callback
        function ( err ) {
            console.log( 'An error happened' );
        }
    );


    analyser = new THREE.AudioAnalyser( oceanAmbientSound, 32 );
}


function createScene(canvas) 
{

    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();
    //scene.background = new THREE.Color( 0xff0000 );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(10, 50, 560);
    //camera.position.z = 1;
    //camera.rotation.x = Math.PI/2;


    var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.45 );
    light.position.set( 0.5, 1, 0.75 );
    scene.add( light );



    scene.add(camera);

    // Add a directional light to show off the object
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1);

    // Create a group to hold all the objects
    root = new THREE.Object3D;

    // Create and add all the lights
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);


    audioLoader();
     // Create a group to hold the objects
    group = new THREE.Object3D;
    group.position.set(0,0,0);

    spotLight = new THREE.SpotLight( 0x00FFFF3);
    spotLight.intensity = 0;
    spotLight.position.set( 10,10,500);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);
    //scene.add( spotLight );

    var material = new THREE.MeshPhongMaterial( { color: 0x808080, dithering: true } );
    var geometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, - 1, 0 );
    mesh.rotation.x = - Math.PI * 0.5;
    mesh.receiveShadow = true;
    
    scene.add(mesh);

    materialFront = new THREE.MeshPhongMaterial( { color: 0x00FFFF3, dithering: true } );
    var geometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
    meshfront = new THREE.Mesh( geometry, material );
    meshfront.position.set( -30, - 1, -180 );
    meshfront.rotation.x = - Math.PI * 2;
    meshfront.receiveShadow = true;
    
    //scene.add(meshfront);
    //scene.add( mesh );

    
    spotLight2 = new THREE.SpotLight( 0x00FFFF3);
    spotLight2.intensity = 0;
    spotLight2.position.set( -500,10,150);

    spotLight2.castShadow = true;

    spotLight2.shadow.mapSize.width = 1024;
    spotLight2.shadow.mapSize.height = 1024;

    spotLight2.shadow.camera.near = 500;
    spotLight2.shadow.camera.far = 4000;
    spotLight2.shadow.camera.fov = 30;

    scene.add(spotLight2);
    //scene.add( spotLight2 );



    spotLight3 = new THREE.SpotLight( 0x00FFFF3);
    spotLight3.intensity = 0;
    spotLight3.position.set( 500,10,150);

    spotLight3.castShadow = true;

    spotLight3.shadow.mapSize.width = 1024;
    spotLight3.shadow.mapSize.height = 1024;

    spotLight3.shadow.camera.near = 500;
    spotLight3.shadow.camera.far = 4000;
    spotLight3.shadow.camera.fov = 30;

    scene.add(spotLight3);
    //scene.add( spotLight3 );

    spotLight4 = new THREE.SpotLight( 0x00FFFF3);
    spotLight4.intensity = 0;
    spotLight4.position.set( -30,-1, -180);

    spotLight4.castShadow = true;

    spotLight4.shadow.mapSize.width = 1024;
    spotLight4.shadow.mapSize.height = 1024;

    spotLight4.shadow.camera.near = 500;
    spotLight4.shadow.camera.far = 4000;
    spotLight4.shadow.camera.fov = 30;

    //scene.add(spotLight4);

//https://www.vantajs.com/?effect=clouds

///////////// Lines /////////////////

    geometry1 = new THREE.Geometry();
    geometry1.vertices.push(
        new THREE.Vector3( -350, 10, 200 ),
        new THREE.Vector3( -250, 10, 200 ),
    );
    geometry1.verticesNeedUpdate = true;
    geometry1.dynamic = true;
    line1 = new MeshLine();
    line1.setGeometry( geometry1);
    var material = new MeshLineMaterial({lineWidth: 12, color:0xF9DC24});
    mesh1= new THREE.Mesh( line1.geometry, material );
    //groupMesh.add(mesh1);
    root.add(mesh1);
    //scene.add(mesh1);


/////////
    geometry2 = new THREE.Geometry();
    geometry2.vertices.push(
        new THREE.Vector3( -150, 10, 150 ),
        new THREE.Vector3( -50, 10, 150 ),
    );
    geometry2.verticesNeedUpdate = true;
    geometry2.dynamic = true;
    line2 = new MeshLine();
    line2.setGeometry( geometry2);
    var material = new MeshLineMaterial({lineWidth: 10, color:0xF9DC24});
    mesh2= new THREE.Mesh( line2.geometry, material );
    root.add(mesh2);
    //scene.add(mesh2);


///////
    geometry3 = new THREE.Geometry();
    geometry3.vertices.push(
        new THREE.Vector3( -50, 10, 200 ),
        new THREE.Vector3(  50, 10, 200 ),
    );
    geometry3.verticesNeedUpdate = true;
    geometry3.dynamic = true;
    line3 = new MeshLine();
    line3.setGeometry( geometry3);
    var material = new MeshLineMaterial({lineWidth: 12, color:0xF9DC24});
    mesh3 = new THREE.Mesh( line3.geometry, material );
    root.add(mesh3);
    //scene.add(mesh3);

/////////
    geometry4 = new THREE.Geometry();
    geometry4.vertices.push(
        new THREE.Vector3( 50, 10, 150 ),
        new THREE.Vector3( 150, 10, 150),
    );
    geometry4.verticesNeedUpdate = true;
    geometry4.dynamic = true;
    line4 = new MeshLine();
    line4.setGeometry( geometry4);
    var material = new MeshLineMaterial({lineWidth: 10, color:0xF9DC24});
    mesh4 = new THREE.Mesh( line4.geometry, material );
    root.add(mesh4);
    //scene.add(mesh4);
//////////
    geometry5 = new THREE.Geometry();
    geometry5.vertices.push(
        new THREE.Vector3( 250, 10, 200 ),
        new THREE.Vector3( 350, 10, 200 ),
    );
    geometry5.verticesNeedUpdate = true;
    geometry5.dynamic = true;
    line5 = new MeshLine();
    line5.setGeometry( geometry5);
    var material = new MeshLineMaterial({lineWidth: 12, color:0xF9DC24});
    mesh5= new THREE.Mesh( line5.geometry, material );
    root.add(mesh5);
    //scene.add(mesh5);

//////////
    geometry6 = new THREE.Geometry();
    geometry6.vertices.push(
        new THREE.Vector3( -250, 10, 100 ),
        new THREE.Vector3(  -150, 10, 100 ),
    );
    geometry6.verticesNeedUpdate = true;
    geometry6.dynamic = true;
    line6 = new MeshLine();
    line6.setGeometry( geometry6);
    var material = new MeshLineMaterial({lineWidth: 10, color:0xF9DC24});
    mesh6= new THREE.Mesh( line6.geometry, material );
    root.add(mesh6);
    //scene.add(mesh6);

//////////
    geometry7 = new THREE.Geometry();
    geometry7.vertices.push(
        new THREE.Vector3( -50, 10, 100 ),
        new THREE.Vector3(  50, 10, 100 ),
    );
    geometry7.verticesNeedUpdate = true;
    geometry7.dynamic = true;
    line7 = new MeshLine();
    line7.setGeometry( geometry7);
    var material = new MeshLineMaterial({lineWidth: 12, color:0xF9DC24});
    mesh7= new THREE.Mesh( line7.geometry, material );
    //scene.add(mesh7);
    root.add(mesh7);

//////////
    geometry8 = new THREE.Geometry();
    geometry8.vertices.push(
        new THREE.Vector3( 150, 10, 100 ),
        new THREE.Vector3( 250, 10, 100 ),
    );
    geometry8.verticesNeedUpdate = true;
    geometry8.dynamic = true;
    line8 = new MeshLine();
    line8.setGeometry( geometry8);
    var material = new MeshLineMaterial({lineWidth: 10, color:0xF9DC24});
    mesh8= new THREE.Mesh( line8.geometry, material );
    root.add(mesh8);
    //scene.add(mesh8);


    
    //root.add(group);    
    //scene.add( root );

    groupG = new THREE.Object3D;
    root.add(group);  


    groupG.add(root);  
    scene.add( groupG);

    raycaster = new THREE.Raycaster();
    

    
    
    //initAnimations();
}




/////// Sistema de particulas ///////////

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

    var material = new THREE.PointsMaterial( { size: objectSize,  color: colors[Math.round(Math.random() * colors.length)] });
    var particles = new THREE.Points( geometry, material );


    this.object = particles;
    this.status = true;


    this.xDir = (Math.random() * movementSpeed)-(movementSpeed/2);
    this.yDir = (Math.random() * movementSpeed)-(movementSpeed/2);
    this.zDir = (Math.random() * movementSpeed)-(movementSpeed/2);
    group.position.set(0,0,0);
    group.add( this.object  ); 

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
                    keys:[0, .25, 0.5, 0.75, 1], 
                    values:[
                            { y : 0 },
                            { y : Math.PI  },
                            { y : Math.PI },
                            { y : Math.PI},
                            { y : 0 },


                            ],
                    target:root.rotation
                },
                { 
                    keys:[0, .5, 1], 
                    values:[
                            { y : 0 },
                            { y : Math.PI * 2  },
                            { y : 0 },
                            ],
                    target:mesh1.rotation
                },

                { 
                    keys:[0, .5, 1], 
                    values:[
                            { y : 0 },
                            { y : -Math.PI * 2  },
                            { y : 0 },
                            ],
                    target:mesh5.rotation
                },
                { 
                    keys:[0, .5, 1], 
                    values:[
                            { y : 0 },
                            { y : 10 },
                            { y : 0 },
                            ],
                    target:mesh3.rotation
                },
            ],
        loop: loopAnimation,
        duration:duration * 1000,
    });
}

function playAnimations()
{
    animator.start();
}