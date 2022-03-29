function pointInQuad(){}

function pointInSquare(){}

function pointInTriangle(x0, y0, x1, y1, x2, y2){
	// we must put x1,x2 and y1 y2 at the origin before transformation
	// and put them back afterwards

	let a1 = random(); // nice fades if i put an sqrt here
	let a2 = random();
	if((a1 + a2) >=1 ){ // reflect the points that are outside 1st triangle
		a1 = 1 - a1; // https://blogs.sas.com/content/iml/2020/10/19/random-points-in-triangle.html
		a2 = 1 - a2;
	}
	const px = a1 * (x1-x0) + a2 * (x2-x0) + x0;
	const py = a1 * (y1-y0) + a2 * (y2-y0) + y0;

	return createVector(px, py);
}

function pointInCircle(cx, cy, cr){
	// uniformely generate points in a circle
	// https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly

	const r = cr * sqrt(random()); // if i add a second square root here I get something more intense along the curves
	const theta = random() * 2 * PI;   // if we add an sqrt here it does a neat spiral

	const px = cx + r * cos(theta)
	const py = cy + r * sin(theta)

	return createVector(px, py);
}


function grainCircle(cx,cy,cr,c= color(0), dir=TWO_PI){

	stroke(c);
	strokeWeight(1.1); // so that it is not pixels

	const AREA = PI * cr * cr;

	// LIGHTING SYSTEM
	const v = p5.Vector.fromAngle(dir,cr); // pick random point on edge of sphere
	const light = createVector(cx+v.x, cy+v.y);

	// GENERATE POINTS
	for(let i = 0; i < AREA / 2 ; i++){

		while(true){

			const p = pointInCircle(cx, cy, cr);
			const probability = map(dist(p.x, p.y, light.x, light.y),0,(cr*2),1,0);

			if(random() < probability == 0){          // I DONT UDBNERSTAND WHY I HAVE AN EQL 0 here
				point(p.x,p.y);
				break;
			}
		}
	}
}

function grainTriangle(x0, y0, x1, y1, x2, y2){
	strokeWeight(1.1); // so that it is not pixels

	const AREA = ( x0 * ( y1 - y2 ) + x1 * ( y2 - y0 ) + x2 * (y0 - y1) ) / 2;

	// LIGHTING SYSTEM
	//const v = p5.Vector.fromAngle(dir,cr); // pick random point on edge of sphere
	//const light = createVector(cx+v.x, cy+v.y);

	// GENERATE POINTS
	for(let i = 0; i < AREA / 2 ; i++){

		//while(true){

			//const p = pointInCircle(cx, cy, cr);
			const p = pointInTriangle(x0,y0,x1,y1,x2,y2);
			//const probability = map(dist(p.x, p.y, light.x, light.y),0,(cr*2),1,0);

			//if(random() < probability == 0){          // I DONT UDBNERSTAND WHY I HAVE AN EQL 0 here
				point(p.x,p.y);
				//break;
			//}
		//}
	}
}

///////////////////////////////////////////////




 // DRAW

 // object = mathematical function
 // functions : draw
 // functions : derive
 // functions : integral
 // find solutions
 // intersect with other objects
