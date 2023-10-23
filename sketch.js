dogblack = true;
carlocation = 0;
carmovingright = true;

let img;
let img2;
function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/DogBiscuit-1.png');
}

function setup() {
  createCanvas(1400, 700);
  angleMode(DEGREES);
}

function drawglasses() {
  let glasswith = 60;
  fill("black");
  rect(0, 0, glasswith, height);
  rect(0, 0, width, glasswith);
  rect(0, height-glasswith, width, glasswith);
  rect(width-glasswith, 0, glasswith, height);
  fill("black");
}

function drawtheveryleftdog() {
  fill(105, 105, 96);
  rect(190, 450, 30, 205); //leg
  fill(168, 168, 162);
  rect(150, 450, 30, 205); //leg
  rect(50, 260, 195, 195, 20); //body

  //ear
  fill(97, 97, 91);
  triangle(136, 113, 165, 44, 186, 100);
  triangle(201, 100, 228, 49, 247, 122);
  //face
  fill("grey");
  ellipse(186, 190, 190, 180);

  //eye
  fill("white");
  ellipse(150, 170, 25, 25); //left
  ellipse(220, 170, 25, 25); //right

  let angleOfEye0 = atan2(mouseY - 170, mouseX - 150);
  let angleOfEye1 = atan2(mouseY - 170, mouseX - 220);

  //eyeball
  fill("black");

  // left eyeball
  push();
  translate(150, 170);
  rotate(angleOfEye0);
  ellipse(7, 0, 10, 10);
  pop();

  // right eyeball
  push();
  translate(220, 170);
  rotate(angleOfEye0);
  ellipse(7, 0, 10, 10);
  pop();

  fill(178, 178, 171);
  triangle(160, 199, 216, 199, 189, 235); //nose
  fill("black");
  ellipse(198, 210, 7, 5); //noseholeleft
  ellipse(178, 210, 7, 5); //noseholeright
  line(189, 199, 189, 235);
  //mouse
  line(162, 247, 200, 247);
}

function drawcar() {
  push();
  translate(carlocation, 0);
  circle(20, 100, 23);
  circle(70, 100, 23);
  square(8, 145, 75);
  line(45, 100, 45, 145);
  drawclock();
  pop();
  fill("black");
  strokeWeight(3);
  let spacing = 10;
  for (x = 0; x < 3000; x += spacing) {
    line(x, 99, x + 5, 99);
  }
}

function drawmiddledog() {
  strokeWeight("3");
  stroke("black");
  if (dogblack == true) {
    fill(28, 12, 2);
  } else {
    fill("white");
  }

  ellipse(720, 360, 140, 200); //body

  //ear
  fill(71, 44, 28);
  triangle(656, 139, 673, 55, 714, 105);
  triangle(731, 105, 751, 53, 776, 131);
  strokeWeight("3");
  if (dogblack == true) {
    fill(48, 44, 42);
  } else {
    fill("white");
  }
  ellipse(717, 210, 170, 210); //middle dog head

  rect(669, 214, 100, 100, 40); //mouse
  line(710, 286, 733, 286); // mouseline
  strokeWeight(3);
  fill(112, 87, 73);
  ellipse(720, 255, 40, 40); //nouse
  fill("black");
  ellipse(710, 254, 6, 6); //nouseholeleft
  ellipse(730, 254, 6, 6); //nouseholeright
  line(720, 244, 720, 264);

  fill("white");
  ellipse(681, 190, 25, 25); //left
  ellipse(748, 190, 25, 25); //right

  let angleOfEye0 = atan2(mouseY - 190, mouseX - 681);
  let angleOfEye1 = atan2(mouseY - 190, mouseX - 748);

  //eyeball
  fill("black");

  // left eyeball
  push();
  translate(681, 190);
  rotate(angleOfEye0);
  ellipse(4, 0, 10, 10);
  pop();

  // right eyeball
  push();
  translate(748, 190);
  rotate(angleOfEye0);
  ellipse(4, 0, 10, 10);
  pop();
  if (dogblack == true) {
    fill(28, 12, 2);
  } else {
    fill("white");
  }
  rect(730, 445, 11, 110); //leg
  rect(758, 427, 16, 150); //leg
  rect(700, 445, 11, 110); //leg
  rect(670, 427, 16, 150);
}

function drawforthdog() {
  //ear
  fill(230, 122, 13);
  triangle(920, 188, 939, 119, 974, 187);
  triangle(995, 186, 1039, 139, 1038, 199);
  rect(942, 333, 103, 120); //body
  rect(988, 453, 18, 90); //leg
  rect(942, 453, 18, 125); //leg
  rect(1031, 453, 14, 90); //leg
  rect(999, 453, 18, 125); //leg

  //mouseshape
  push();
  fill(235, 105, 30);
  translate(920, 180);
  rotate(0.04);
  rect(0, 0, 120, 155); //head
  pop();
  fill(156, 68, 17);
  rect(920, 280, 100, 70); //mouse

  strokeWeight("2");
  fill("white");
  ellipse(955, 216, 10, 10); //left
  ellipse(1005, 216, 12, 12); //right

  let angleOfEye0 = atan2(mouseY - 216, mouseX - 955);
  let angleOfEye1 = atan2(mouseY - 216, mouseX - 1005);

  //eyeball
  fill("black");

  // left eyeball
  push();
  translate(955, 216);
  rotate(angleOfEye0);
  ellipse(3, 0, 5, 5);
  pop();

  // right eyeball
  push();
  translate(1005, 216);
  rotate(angleOfEye0);
  ellipse(3, 0, 5, 5);
  pop();

  fill(201, 83, 16);
  triangle(939, 304, 984, 302, 962, 336);
  line(960, 304, 961, 335); // noseline
  //nosehole
  fill("black");
  circle(953, 312, 7);
  circle(969, 312, 7);
}

function draw2dog() {
  //ear
  fill(202, 202, 92);
  triangle(312, 266, 303, 302, 331, 302);
  triangle(351, 274, 342, 302, 368, 302);
  rect(260, 370, 103, 100); //body
  rect(260, 470, 12, 70); //leg
  rect(290, 470, 14, 90); //leg
  rect(325, 470, 12, 70); //leg
  rect(349, 470, 14, 83); //leg

  fill(230, 230, 14);
  rect(300, 302, 69, 80); //head
  rect(295, 340, 79, 59, 39); //mouse
  strokeWeight("2");

  fill("white");
  ellipse(316, 327, 11, 11); //left
  ellipse(352, 327, 11, 11); //right

  let angleOfEye0 = atan2(mouseY - 327, mouseX - 316);
  let angleOfEye1 = atan2(mouseY - 327, mouseX - 352);

  //eyeball
  fill("black");

  // left eyeball
  push();
  translate(316, 327);
  rotate(angleOfEye0);
  ellipse(2, 0, 4, 4);
  pop();

  // right eyeball
  push();
  translate(352, 327);
  rotate(angleOfEye0);
  ellipse(2, 0, 4, 4);
  pop();

  fill("white");
  triangle(315, 362, 348, 362, 332, 387);
  line(332, 363, 332, 387); // noseline
  //nosehole
  fill("black");
  circle(327, 370, 5);
  circle(337, 370, 5);
}

function drawtheveryrightdog() {
  strokeWeight("3");
  stroke("black");
  fill(238, 196, 30);
  rect(1096, 320, 230, 370, 200, 150, 50, 50); //body
  rect(1096, 120, 230, 260); //head
  circle(1200, 330, 230); //facemouse

  fill("white");
  ellipse(1150, 190, 22, 22); //left
  ellipse(1270, 190, 22, 22); //right

  let angleOfEye0 = atan2(mouseY - 190, mouseX - 1150);
  let angleOfEye1 = atan2(mouseY - 190, mouseX - 1270);

  //eyeball
  fill("black");

  // left eyeball
  push();
  translate(1150, 190);
  rotate(angleOfEye0);
  ellipse(2, 0, 13, 13);
  pop();

  // right eyeball
  push();
  translate(1270, 190);
  rotate(angleOfEye0);
  ellipse(2, 0, 13, 13);
  pop();

  //ear
  fill(154, 125, 12);
  triangle(1098, 120, 1138, 23, 1185, 120);
  triangle(1253, 120, 1275, 23, 1324, 120);

  //mouseshape
  fill(65, 33, 5);
  triangle(1150, 295, 1248, 295, 1200, 384);
  line(1240, 420, 1200, 420); // mouseline
  //nosehole
  fill("black");
  circle(1183, 326, 13);
  circle(1218, 326, 13);
  line(1200, 310, 1200, 360); //noseline
}

function drawclock() {
  strokeWeight(2);
  fill(68, 92, 2); //body cicle clock
  ellipse(46, 183, 65, 65);

  strokeWeight(2);
  fill("pink"); //inside cicle clock
  ellipse(46, 183, 10, 10);

  // Calculate the current time
  let hr = hour();
  let min = minute();
  let sec = second();

  push();
  translate(47, 183); // Move the origin to the center
  noFill();
  stroke("black");
  strokeWeight(4);

  // Hour hand
  strokeWeight(4);
  stroke(60, 135, 252);
  let hrAngle = map(hr % 12, 0, 12, 0, 360) + map(min, 0, 60, 0, 30); // Calculate hour hand angle
  rotate(hrAngle);
  line(0, 0, 24, 0);
  rotate(-hrAngle);

  // Minute hand
  strokeWeight(2);
  let minAngle = map(min, 0, 60, 0, 360); // Calculate minute hand angle
  rotate(minAngle);
  line(0, 0, 30, 0);
  rotate(-minAngle);

  // Second hand
  stroke("black");
  stroke(255, 0, 0); // Red color for the second hand
  strokeWeight(2);
  let secAngle = map(sec, 0, 60, 0, 360); // Calculate second hand angle
  rotate(secAngle);
  line(0, 0, 28, 0);
  pop();
}

function draw() {
  
  image(img, 50, 50, width-100, height-100)
  if (carmovingright == true) {
    carlocation++;
  } else {
    carlocation--;
  }
  if (carlocation > width) {
    carmovingright = false;
  }
  if (carlocation < 0) {
    carmovingright = true;
  }
  drawcar();

  drawmiddledog();
  drawforthdog();
  drawtheveryrightdog();
  drawtheveryleftdog();
  draw2dog();
  drawglasses();

  stroke("black");
  fill("white");

  let imgCursorWidth = img2.width/2;
  let imgCursorHeight = img2.height/2;
  image(img2, mouseX - imgCursorWidth/2, mouseY - imgCursorHeight/2, imgCursorWidth, imgCursorHeight);
  // text(`${mouseX}, ${mouseY}`, mouseX, mouseY);
}

function mousePressed() {
  if (dogblack == false) {
    dogblack = true;
  } else {
    dogblack = false;
  }
  console.log(dogblack);
}
