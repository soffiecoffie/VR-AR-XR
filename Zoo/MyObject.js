
// Тигърчето от домашно 1

function Tiger(size = 1)
{
    var tiger = new THREE.Group();
    
    //краченца
    var r_leg = new THREE.Group();			//дясно краче
    var l_leg = new THREE.Group();   		//ляво краче
    r_leg.position.set(0,-6.9,90);
    l_leg.position.set(-3,-6.9,90);

    var material = new THREE.MeshLambertMaterial({color:'darkorange'});
    var base = new THREE.Mesh( new THREE.BoxGeometry( 2.5, 2, 2.5 ), material) 			//самите краченца
    var base2 = base.clone();															//самите краченца

    var nail1 =  new THREE.Mesh( new THREE.BoxGeometry( 0.35, 0.6, 0.05 ), new THREE.MeshLambertMaterial({color:'black'}) )		//нокътчета		
    var nail2 =  new THREE.Mesh( new THREE.BoxGeometry( 0.35, 0.6, 0.05 ), new THREE.MeshLambertMaterial({color:'black'}) )		//нокътчета
    nail1.position.set(-0.4,-0.7,1.3);
    nail2.position.set(0.4,-0.7,1.3);

    var nail12 =  nail1.clone();
    var nail22 =  nail2.clone();

    //ивички за дясното краченце
    var shortStripes = [];
    var longStripes = [];
    longStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 1.2, 0.25, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));
    shortStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 0.8, 0.25, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));

    //ивички за ляво краченце 
    var l_shortStripes = [];
    var l_longStripes = [];
    l_longStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 1.2, 0.25, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));
    l_shortStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 0.8, 0.25, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));

    for(var i = 0; i < 4; i++){
        shortStripes.push(shortStripes[0].clone());
        longStripes.push(longStripes[0].clone());
        r_leg.add(shortStripes[i], longStripes[i]);

        l_shortStripes.push(l_shortStripes[0].clone());
        l_longStripes.push(l_longStripes[0].clone());
        l_leg.add(l_shortStripes[i], l_longStripes[i]);
    }

    shortStripes[0].position.set(-0.9,0,1.28);
    shortStripes[1].position.set(0.9,0,-1.28);
    longStripes[0].position.set(0.66,0.5,1.3);
    longStripes[1].position.set(-0.66,0.5,-1.3);

    l_shortStripes[0].position.set(0.9,0,1.28);
    l_shortStripes[1].position.set(-0.9,0,-1.28);
    l_longStripes[0].position.set(-0.66,0.5,1.3);
    l_longStripes[1].position.set(0.66,0.5,-1.3);
    for(var i = 2, n = -1; i < 4; i++, n+=2){
        shortStripes[i].rotateY(Math.PI / 2);
        shortStripes[i].position.set(n*1.28,0.5,n*0.95);
        longStripes[i].rotateY(Math.PI / 2);
        longStripes[i].position.set(n*1.3,0,n*(-0.66));

        l_shortStripes[i].rotateY(Math.PI / 2);
        l_shortStripes[i].position.set(n*1.28,0.5,n*(-0.95));
        l_longStripes[i].rotateY(Math.PI / 2);
        l_longStripes[i].position.set(n*1.3,0,n*(0.66));
    }

    r_leg.add(base, nail1, nail2); 
    l_leg.add(base2, nail12, nail22); 
    rb_leg = r_leg.clone(); 									//дясно задно краче
    lb_leg = l_leg.clone(); 									//ляво задно краче

    rb_leg.position.set(0,-6.9,85);
    lb_leg.position.set(-3,-6.9,85);
    tiger.add( l_leg, r_leg, rb_leg, lb_leg );

    //главичка+тяло
    var body = new THREE.Mesh( new THREE.BoxGeometry( 8, 8, 8 ), material );		//тяло
    body.position.set(-1.5,-1.82,87.5);

    var face = new THREE.Group;														//лице

    var mid_sq = new THREE.Mesh( new THREE.BoxGeometry( 3, 3, 0.1), new THREE.MeshLambertMaterial({color:'antiquewhite'}) );
    var l_sq = mid_sq.clone();				l_sq.rotateZ(- Math.PI / 4);			l_sq.position.set(-1.5,-0.6,0);
    var r_sq = mid_sq.clone();				r_sq.rotateZ(Math.PI / 4);				r_sq.position.set(1.5,-0.6,0);

    var bl_sq = l_sq.clone();						bl_sq.position.set(-1.5,-2.4,0);					
    var br_sq = r_sq.clone();						br_sq.position.set(1.5,-2.4,0);
    var bmid_sq = mid_sq.clone();					bmid_sq.position.set(0,-3,0);

    //очички
    var l_eye = new THREE.Mesh( new THREE.BoxGeometry( 0.7, 1.4, 0.1), new THREE.MeshLambertMaterial({color:'limegreen'}) );//forestgreen
    var r_eye = l_eye.clone();
    l_eye.position.set(-1.1, -0.3, 0.001);
    r_eye.position.set(1.1, -0.3, 0.001);
    //зенички
    var l_iris = new THREE.Mesh( new THREE.BoxGeometry( 0.3, 0.55, 0.1), new THREE.MeshLambertMaterial({color:'black'}) );
    var r_iris = l_iris.clone();
    l_iris.position.set(-2.35, -1.1, 91.51);
    r_iris.position.set(-0.6, -1.1, 91.51);
    l_iris.scale.set(0.9,1.3,1);
    r_iris.scale.set(0.9,1.3,1);
    tiger.add(l_iris, r_iris);

    face.add(mid_sq, l_sq, r_sq, bmid_sq, bl_sq, br_sq, l_eye, r_eye);
    face.position.set(-1.5, -0.5, 91.5);
    face.scale.set(0.8,1,1);

    //ушички
    var l_ear = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 0.5 ), material );
    var r_ear = l_ear.clone();
    l_ear.position.set(-4,2.6,91);
    r_ear.position.set(1,2.6,91);
    var l_ear_inside = mid_sq.clone();
    l_ear_inside.scale.set(0.25,0.25,1);
    var r_ear_inside = l_ear_inside.clone();

    l_ear_inside.position.set(-4,2.55,91.3);
    r_ear_inside.position.set(1,2.55,91.3);

    //носленце
    var nose = new THREE.Mesh( new THREE.BoxGeometry( 0.9, 0.9, 0.5 ),  new THREE.MeshLambertMaterial({color:'sienna'}) );
    nose.position.set(-1.5, -2.1, 91.5);

    //устичка
    var top_lip = new THREE.Mesh( new THREE.BoxGeometry( 1.5, 0.6, 0.5 ),  new THREE.MeshLambertMaterial({color:'antiquewhite'}) );
    var bottom_lip = new THREE.Mesh( new THREE.BoxGeometry( 1.1, 0.3, 0.7 ),  new THREE.MeshLambertMaterial({color:'antiquewhite'}) );
    top_lip.position.set(-1.5, -3.2, 91.9);
    bottom_lip.position.set(-1.5, -4, 91.9);

    //група за долната челюст
    var bottom_mouth = new THREE.Group();
    //зъбки
    var bottom_teeth = new THREE.Mesh( new THREE.BoxGeometry( 0.15, 0.6, 0.5 ),  new THREE.MeshLambertMaterial() );
    bottom_teeth.position.set(-1.9, -3.6, 91.8);
    var bottom_teeth2 = bottom_teeth.clone();
    bottom_teeth2.position.set(-1.1, -3.6, 91.8);
    var bottom_teeth3 = bottom_teeth.clone();
    bottom_teeth3.position.set(-1.5, -3.8, 91.8);
    bottom_teeth3.rotateZ(Math.PI / 2);

    var top_teeth = new THREE.Mesh( new THREE.BoxGeometry( 0.15, 0.3, 0.5 ),  new THREE.MeshLambertMaterial() );
    top_teeth.position.set(-2, -3.5, 91.7);
    var top_teeth2 = top_teeth.clone();
    top_teeth2.position.set(-1, -3.5, 91.7);

    //езиче
    var tongue = new THREE.Mesh( new THREE.BoxGeometry( 1.1, 0.25, 0.5 ),  new THREE.MeshLambertMaterial({color:'red'}) );
    tongue.position.set(-1.5, -3.7, 91.7);
    var inside_mouth =  new THREE.Mesh( new THREE.BoxGeometry( 1.2, 0.7, 0.1 ),  new THREE.MeshLambertMaterial({color:'black'}) );
    inside_mouth.position.set(-1.5, -3.6, 91.6);

    bottom_mouth.add(bottom_teeth, bottom_teeth2, bottom_lip, tongue, inside_mouth, bottom_teeth3);

    //ивици на тялото и лицето
    var sStripes = [];
    var lStripes = [];
    for(var i = 0; i < 3; i++){
        sStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 1.4, 0.4, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));
        lStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 2, 0.4, 0.05 ), new THREE.MeshLambertMaterial({color:'black'})));
        tiger.add(sStripes[i], lStripes[i]);
    }
    sStripes[0].position.set(-4.8, -2, 91.5);
    sStripes[1].position.set(1.8, -3.7, 91.5);
    sStripes[2].position.set(1.8, -0.1,  91.5);
    lStripes[0].position.set(1.5, 1.4,  91.5);
    lStripes[1].position.set(-4.5, 1,  91.5);
    lStripes[2].position.set(-4.5, -4.8,  91.5);

    for(var i = 3; i < 8; i++){
        sStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 0.05, 0.4, 3 ), new THREE.MeshLambertMaterial({color:'black'})));
        tiger.add(sStripes[i]);
    }
    for(var i = 3; i < 14; i++){
        lStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 0.05, 0.4, 4 ), new THREE.MeshLambertMaterial({color:'black'})));
        tiger.add(lStripes[i]);
    }
    //странични ивици свързани с лицето
    lStripes[3].position.set(-5.5, -2, 89.5);
    lStripes[4].position.set(2.5, -3.7, 89.5);
    lStripes[5].position.set(2.5, -0.1, 89.5);
    sStripes[3].position.set(2.5, 1.4, 90);
    sStripes[4].position.set(-5.5, 1, 90);
    sStripes[5].position.set(-5.5, -4.8, 90);
    //
    sStripes[6].position.set(2.5, -1.5, 85);
    lStripes[6].position.set(2.5, 1, 85.5);
    lStripes[7].position.set(2.5, -1.5, 850.5);
    lStripes[8].position.set(2.5, -2.8, 87.5);		lStripes[8].scale.set(1,1,1.5);
    lStripes[9].position.set(2.5, -5, 85.5);

    sStripes[7].position.set(-5.5, -0.8, 85);
    lStripes[10].position.set(-5.5, 1.3, 85.5);
    lStripes[11].position.set(-5.5, -1.5, 850.5);
    lStripes[12].position.set(-5.5, -3.5, 87);		lStripes[12].scale.set(1,1,1.5);
    lStripes[13].position.set(-5.5, -5.2, 85.5);

    for(var i = 14; i < 17; i++){
        lStripes.push(new THREE.Mesh( new THREE.BoxGeometry( 0.05, 0.4, 4 ), new THREE.MeshLambertMaterial({color:'black'})));
        lStripes[i].rotateZ(Math.PI / 2);
        lStripes[i].scale.set(1,1,1+(i-14)/2.5);
        tiger.add(lStripes[i]);
    }

    // най-горни ивици
    lStripes[14].position.set(-1, 2.2, 89);
    lStripes[15].position.set(-3.5, 2.2, 86.3);
    lStripes[16].position.set(2, 2.2, 87.1);

    for(var i = 17; i < 20; i++){
        lStripes.push(lStripes[16].clone());
        lStripes[i].scale.set(1,1,1+(i-17)/2.5);
        lStripes[i].rotateY(Math.PI / 2);
        tiger.add(lStripes[i]);
    }
    lStripes[17].position.set(2, 0.2, 83.5);
    lStripes[18].position.set(-3.5, -0.6, 83.5);
    lStripes[19].position.set(0, -2.4, 83.5);

    //опашка
    var tail = new THREE.Object3D();

    var tail_piece = [];
    tail_piece[0] = new THREE.Mesh( new THREE.BoxGeometry( 0.9, 0.9, 0.9 ),  new THREE.MeshLambertMaterial({color:'darkorange'}) );
    tail_piece[0].position.set(0,0,0);
    tail_piece[1] = new THREE.Mesh( new THREE.BoxGeometry( 0.9, 0.9, 0.9 ),  new THREE.MeshLambertMaterial({color:'black'}) );
    tail_piece[1].position.set(0, 0.5, -0.9);

    tail.add(tail_piece[0],tail_piece[1]);
    var tail2 = tail.clone();
    tail2.position.set(0,1,-1.8);
    var tail3 = tail2.clone();
    var tail4 = tail2.clone();
    var tail5 = tail2.clone();

    tail4.add(tail5);
    tail3.add(tail4);
    tail2.add(tail3); 
    tail.add(tail2); 
    tail.position.set(-1.5,0,83.5);

    tiger.add(body, face, l_ear, r_ear, l_ear_inside, r_ear_inside, nose, top_lip, bottom_mouth,
                    top_teeth, top_teeth2, tail);
    tiger.scale.set(size,size,size);
    return tiger;
}

function animateTiger(tiger, frame)
{
    tiger.children[4].position.set(-2.35+0.05*Math.sin(frame/40), -1.1, 91.51);		// зеница	
    tiger.children[5].position.set(-0.6+0.05*Math.sin(frame/40), -1.1, 91.51);		// зеница
    tiger.children[42].position.set(0,-0.3*Math.sin(frame/15),0); 					// устата
    
    //движение на опашката
    tiger.children[45].rotation.set(  Math.sin(frame/20) / 5 - Math.PI/5, 0,0);
    tiger.children[45].children[2].rotation.set(  Math.sin(frame/20) / 5 - Math.PI/5, 0,0);
    tiger.children[45].children[2].children[2].rotation.set( Math.sin(frame/20) / 4 - Math.PI/16,0,0);
    tiger.children[45].children[2].children[2].children[2].rotation.set( Math.sin(frame/20) / 3 + Math.PI/16,0,0);
    tiger.children[45].children[2].children[2].children[2].children[2].rotation.set( Math.sin(frame/20) / 3 + Math.PI/16, 0,0);
}

// ограда подобна на тази от упражненията
function Fence(size){
	var material = new THREE.MeshLambertMaterial({color:'#F9EED8'});
			
    var fence = new THREE.Group();
			
	var rect1 = new THREE.Mesh(new THREE.BoxGeometry( 80, 0.5, 0.2 ), material );
	var rect2 = new THREE.Mesh(new THREE.BoxGeometry( 80, 0.5, 0.2 ), material );
	rect1.position.set(2.5,0,0);
	rect2.position.set(2.5,-1,0);
			
	fence.add(rect1, rect2);

	var panel = new THREE.Group();
	var rect3 = new THREE.Mesh(new THREE.BoxGeometry( 1, 5, 0.2 ), material );
	rect3.position.set(-4,-1.5,0);
	panel.add(rect3);
	
	var geometrySq = new THREE.BoxGeometry( 0.7, 0.7, 0.2 );
	var sq = new THREE.Mesh( geometrySq, material );
	sq.rotation.z = Math.PI / 4;
	sq.position.set(-4,1,0);
	panel.add(sq);
	
	for(i = 0; i < 40; i++) {
		var pan = panel.clone();
		pan.position.set(-32.5+2*i,0,0);
		fence.add(pan);
	}

    fence.scale.set(size,size,size);
	return fence;
}

function Tree()
{
    var tree = new THREE.Group();
    var trunk = new THREE.Mesh(new THREE.CylinderGeometry( 0.5, 0.5, 2, 16 ), new THREE.MeshLambertMaterial({color:'#493203'}));
    
    // текстурата е от https://3dtextures.me/2020/09/08/stylized-leaves-002/
    const texture = new THREE.TextureLoader().load( "leaves.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
		  texture.repeat.set( 4,4 );
    var cone1 = new THREE.Mesh(new THREE.ConeGeometry( 4, 5, 8 ), new THREE.MeshLambertMaterial( {map: texture} ));
    var cone2 = new THREE.Mesh(new THREE.ConeGeometry( 3.5, 4, 8 ), new THREE.MeshLambertMaterial( {map: texture} ));
    var cone3 = new THREE.Mesh(new THREE.ConeGeometry( 2.5, 3, 8 ), new THREE.MeshLambertMaterial( {map: texture} ));
    cone1.position.set(0,3.5,0);
    cone2.position.set(0,4.5,0);
    cone3.position.set(0,5.5,0);

    tree.add(trunk, cone1, cone2, cone3);

    return tree;
}

function glassFence(size = 1)
{
    var fence = new THREE.Group();
    var base = new THREE.Mesh(new THREE.BoxGeometry( 60, 3, 2.5 ), new THREE.MeshLambertMaterial({color:'#ECECEC'}));
    var glassA = new THREE.Mesh(new THREE.BoxGeometry( 60, 10, 1 ), new THREE.MeshPhongMaterial({color:'#91FFFC',side: THREE.BackSide,
    	depthWrite: false,
    	transparent: true,
    	opacity: 0.3,
        shinines: 200
    }));
    var glassB = new THREE.Mesh(new THREE.BoxGeometry( 60, 10, 1 ), new THREE.MeshPhongMaterial({color:'#91FFFC',side: THREE.FrontSide,
    	depthWrite: false,
    	transparent: true,
    	opacity: 0.3,
        shinines: 200
    } ));
    glassA.position.set(0,6,0);
    glassB.position.set(0,6,0);

    fence.add(base, glassA, glassB)
    fence.scale.set(size,size,size);
    return fence;
}

function trashCan(size = 1)
{
    var trashCan = new THREE.Group();
    var base = new THREE.Mesh(new THREE.CylinderGeometry( 0.3, 0.3, 0.05, 16 ), new THREE.MeshLambertMaterial({color:'#F9E342'}));
    var col = new THREE.Mesh(new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 8 ), new THREE.MeshLambertMaterial({color:'#F9E342'}));
    var trashHolder = new THREE.Mesh(new THREE.CylinderGeometry( 0.3, 0.3, 0.8, 16, 1, true ), new THREE.MeshLambertMaterial({color:'#F9E342'}));
    var trashHolder1 = new THREE.Mesh(new THREE.CylinderGeometry( 0.3, 0.3, 0.05, 16), new THREE.MeshLambertMaterial({color:'#F9E342'}));
    trashHolder.material.side = THREE.DoubleSide;

    col.position.set(0,0.1,0);
    base.position.set(0,-0.1,0);
    trashHolder.position.set(0,0.8,0);
    trashHolder1.position.set(0,0.4,0);
    trashCan.add(base, col, trashHolder, trashHolder1);

    trashCan.scale.set(size,size,size);
    return trashCan;
}

function stall(size = 1)
{
    var stall = new THREE.Group();
    var legs = [], cols = [];
    for(var i = 0; i < 4; i++ ) {
        legs[i] = new THREE.Mesh(new THREE.BoxGeometry( 0.3,0.3,0.3 ), new THREE.MeshLambertMaterial({color:'#ED517E'}));
        cols[i] = new THREE.Mesh(new THREE.BoxGeometry( 0.3,4.5,0.3 ), new THREE.MeshLambertMaterial({color:'#F9E842'}));
        stall.add(legs[i], cols[i]);    
    }
    legs[0].position.set(0,0,2.5);
    legs[1].position.set(0,0,1.5);
    legs[2].position.set(8,0,1.5);
    legs[3].position.set(8,0,2.5);
    
    cols[0].position.set(0,6,2.7);
    cols[1].position.set(0,6,1.3);
    cols[2].position.set(5,6,1.3);
    cols[3].position.set(5,6,2.7);
    var top = new THREE.Mesh(new THREE.BoxGeometry( 6,1.5,2 ), new THREE.MeshLambertMaterial({color:'#ED517E'}));
    top.position.set(2.5,8,2);
    var triangles = [];
    for(var i = 0; i < 8; i++ ) {
        triangles[i] = new THREE.Mesh(new THREE.BoxGeometry( 1,1,0.1 ), new THREE.MeshLambertMaterial({color:'#ED517E'}));
        triangles[i].rotateZ(Math.PI / 4);

        stall.add(triangles[i]);    
    }    
    //front
    triangles[0].position.set(0.2,7.2,2.9);
    triangles[1].position.set(1.7,7.2,2.9);
    triangles[2].position.set(3.2,7.2,2.9);
    triangles[3].position.set(4.7,7.2,2.9);
    //back
    triangles[4].position.set(0.2,7.2,1.1);
    triangles[5].position.set(1.7,7.2,1.1);
    triangles[6].position.set(3.2,7.2,1.1);
    triangles[7].position.set(4.7,7.2,1.1);

    var stall1 = new THREE.Mesh(new THREE.BoxGeometry( 6,4,2 ), new THREE.MeshLambertMaterial({color:'#ED517E'}));
    var stall2 = new THREE.Mesh(new THREE.BoxGeometry( 4,2.5,2 ), new THREE.MeshLambertMaterial({color:'#ED517E'}));
    stall1.position.set(2.5,2.1,2); 
    stall2.position.set(7,1.4,2);   

    stall.add(stall2,stall1,top);
    stall.scale.set(size,size,size);
    return stall;
}

function balloon(_color = 'red',size=1)
{
    var balloon = new THREE.Group();
    var spheroid = new THREE.Mesh(new THREE.SphereGeometry( 2,32,16 ), new THREE.MeshPhongMaterial({color: _color}));
    var y = THREE.Math.randFloat(1,1.5);
    spheroid.scale.set(1,y,1);
    var cone = new THREE.Mesh(new THREE.ConeGeometry( 0.2,0.2,8 ), new THREE.MeshPhongMaterial({color: _color}));
    cone.position.set(0,-2*y,0);

    var strand = new THREE.Mesh(new THREE.CylinderGeometry( 0.02, 0.02, 13, 16 ), new THREE.MeshPhongMaterial({color:'#BCD2D3'}));
    strand.position.set(0,-2*y-5,0);
    balloon.add(strand);

    balloon.add(spheroid, cone);
    balloon.scale.set(size,size,size);
    return balloon;
}