/**
 
functions:
 
  Dice(color, spotColor);	

  Box(color);
 
*/

function Dice(color = 'red', spotCol = 'white')
{
	var material = Physijs.createMaterial(new THREE.MeshPhongMaterial({color:color, shininess:150}));
	var spotsMaterial = Physijs.createMaterial(new THREE.MeshPhongMaterial({color:spotCol}));
	var cylGeom = new THREE.CylinderGeometry( 0.5, 0.5, 3, 32);
    var sideGeom = new THREE.BoxGeometry( 3,3,0.5);
	var spotsGeom = new THREE.CylinderGeometry( 0.3, 0.3, 0.3, 32);
    var sphereGeom = new THREE.SphereGeometry( 0.5,32,16);
    var sides = [], spheres = [], cyls = [], spots = [];

	var dice = new Physijs.BoxMesh(  new THREE.BoxGeometry( 3.5,3.5,3.5), 
									 Physijs.createMaterial(new THREE.MeshPhongMaterial({color:'red', shininess:150})));
    for(var i = 0; i < 6; i++)
    {
        sides.push(new Physijs.BoxMesh(  sideGeom, material));
		sides[i].castShadow = true;
        dice.add(sides[i]);
    }

    sides[2].rotateY(Math.PI/2);
	sides[3].rotateY(Math.PI/2);
	sides[4].rotateX(Math.PI/2);
	sides[5].rotateX(Math.PI/2);

    for(var i = 0; i < 8; i++)
    {
        spheres.push(new Physijs.SphereMesh( sphereGeom, material));
		spheres.castShadow = true;
        dice.add(spheres[i]);
    }

    for(var i = 0; i < 12; i++)
    {
        cyls.push(new Physijs.CylinderMesh( cylGeom, material));
		cyls[i].castShadow = true;
        dice.add(cyls[i]);
    }

	for(var i = 0; i < 21; i++)
    {
        spots.push(new Physijs.CylinderMesh( spotsGeom, spotsMaterial));
        dice.add(spots[i]);
    }

	cyls[4].rotateX(Math.PI/2); 	cyls[5].rotateX(Math.PI/2);
	cyls[6].rotateZ(Math.PI/2);		cyls[7].rotateZ(Math.PI/2);
	cyls[8].rotateX(Math.PI/2);		cyls[9].rotateX(Math.PI/2);
	cyls[10].rotateZ(Math.PI/2);	cyls[11].rotateZ(Math.PI/2);

	var n = 1.8;
	cyls[0].position.set(-1.5, 0,   -0.25+n);			cyls[1].position.set(1.5, 0,    -0.25+n);	
	cyls[2].position.set(-1.5, 0,   -3.25+n);			cyls[3].position.set(1.5, 0,    -3.25+n);		
	cyls[4].position.set(-1.5, 1.5, -1.75+n);			cyls[5].position.set(1.5, 1.5,  -1.75+n);	
	cyls[6].position.set(0,    1.5, -0.25+n);			cyls[7].position.set(0,   1.5,  -3.25+n);		
	cyls[8].position.set(-1.5,-1.5, -1.75+n);			cyls[9].position.set(1.5, -1.5, -1.75+n);
	cyls[10].position.set(0,  -1.5, -0.25+n);			cyls[11].position.set(0,  -1.5, -3.25+n);

	sides[0].position.set(0,0,n);/////
	sides[1].position.set(0,0,-3.5+n);		
	sides[2].position.set(-1.75,0,-1.75+n);		sides[3].position.set(1.75,0,-1.75+n);	
	sides[4].position.set(0,1.75,-1.75+n);		sides[5].position.set(0,-1.75,-1.75+n);
			
    spheres[0].position.set(-1.5,1.5,-0.25+n);	    spheres[1].position.set(1.5,1.5,-0.25+n);		
    spheres[2].position.set(-1.5,1.5,-3.25+n);	    spheres[3].position.set(1.5,1.5,-3.25+n);		
	spheres[4].position.set(-1.5,-1.5,-0.25+n);		spheres[5].position.set(1.5,-1.5,-0.25+n);		
	spheres[6].position.set(-1.5,-1.5,-3.25+n);		spheres[7].position.set(1.5,-1.5,-3.25+n);	
	
    for(var i = 0; i < 14; i++)
	{
		spots[i].rotateX(Math.PI/2);
		if(i>=7)
			spots[i].rotateZ(Math.PI/2);

	}
	
	// 1
	spots[0].position.set(0,0,0.11+n);
	// 6
	spots[1].position.set(-0.7,1, -3.61+n);
	spots[2].position.set(-0.7,0, -3.61+n);
	spots[3].position.set(-0.7,-1,-3.61+n);
	spots[4].position.set(0.7,1, -3.61+n);
	spots[5].position.set(0.7,0, -3.61+n);
	spots[6].position.set(0.7,-1, -3.61+n);
	// 5
	spots[7].position.set(-1.86,0,-1.7+n);
	spots[8].position.set(-1.86,1,-2.7+n);
	spots[9].position.set(-1.86,1,-0.7+n);
	spots[10].position.set(-1.86,-1,-0.7+n);
	spots[11].position.set(-1.86,-1,-2.7+n);
	// 2
	spots[12].position.set(1.86,0.8,-2.5+n);
	spots[13].position.set(1.86,-0.8,-1+n);
	// 3
	spots[14].position.set(1,1.86,-0.7+n);
	spots[15].position.set(0,1.86,-1.7+n);
	spots[16].position.set(-1,1.86,-2.7+n);
	// 4 
	spots[17].position.set(1,-1.86,-0.7+n);
	spots[18].position.set(-1,-1.86,-0.7+n);
	spots[19].position.set(1,-1.86,-2.7+n);
	spots[20].position.set(-1,-1.86,-2.7+n);

    return dice;
}

function Box(color = 'white')
{
    var baseGeometry = new THREE.BoxGeometry(  45,1.5,45);
    var sidesGeometry = new THREE.BoxGeometry( 45,3,2);
    var material = Physijs.createMaterial(new THREE.MeshPhongMaterial({color:color, shininess:50}));
	var poles = [];
	var base = new Physijs.BoxMesh(baseGeometry, material, 0);

	base.receiveShadow = true;
	base.castShadow = true;
	
	var sides = [];
    for(var i = 0; i < 4; i++){
		sides.push(new Physijs.BoxMesh( sidesGeometry, material, 0));
		poles.push(new Physijs.BoxMesh( new THREE.BoxGeometry( 2,3,2), material, 0));
		// sides[i].receiveShadow = true;
		sides[i].castShadow = true;
		base.add(sides[i], poles[i]);
	}

	sides[0].position.set(0,4,-21.5);
	sides[1].position.set(0,4, 21.5);
	sides[2].rotateY(Math.PI/2);
	sides[3].rotateY(Math.PI/2);
	sides[2].position.set(-21.5,4,0);
	sides[3].position.set( 21.5,4,0);
	
	poles[0].position.set(-21.5, 2, 21.5);
	poles[1].position.set(-21.5, 2,-21.5);
	poles[2].position.set( 21.5, 2,-21.5);
	poles[3].position.set( 21.5, 2, 21.5);

	return base;
}