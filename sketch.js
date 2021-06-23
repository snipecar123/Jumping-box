var canvas;
 var music;
  var box,surface1,surface2,surface3,surface4;
   var boxImg,surface1Img,surface2Img,surface3Img,surface4Img;
    var edges;
     function preload(){ music = loadSound("music.mp3");
      boxImg=loadImage("box.jpg"); 
      surface1Img=loadImage("red.png");
       surface2Img=loadImage("green.png");
       surface3Img=loadImage("grey.png"); 
       surface4Img=loadImage("blue.png");
     } function setup(){
          canvas = createCanvas(800,800); 
        //create 4 different surfaces 
       surface1=createSprite(100,790,200,20);
         surface1.shapeColor="red"; 
         surface2=createSprite(320,790,200,20); 
         surface2.shapeColor="green";
          surface3=createSprite(540,790,200,20) 
          surface3.shapeColor="blue" 
          surface4=createSprite(760,790,200,20 ;
          surface4.shapeColor="grey";
           //create box sprite and give velocity 
           box=createSprite(random(20,750),200,30,30) 
           box.velocityX=2; box.velocityY=2; 
           box.shapeColor="white"; 
        } function draw() { background(0);
             //create edgeSprite 
             edges=createEdgeSprites() 
             box.bounceOff(edges); 
             //add condition to check if box touching surface and make it box 
             if(surface1.isTouching(box)&& box.bounceOff(surface1)){ 
                 box.shapeColor="red"; music.play(); 
                } 
                if(surface2.isTouching(box)&& box.bounceOff(surface2))
                { box.shapeColor="green"; 
                box.velocityX=0;
                 box.velocityY=0; 
                 music.stop(); } 
                 if(surface3.isTouching(box)&& box.bounceOff(surface3)){
                      box.shapeColor="blue"; 
                      music.play(); } 
                      if(surface4.isTouching(box)&& box.bounceOff(surface4)){ 
                          box.shapeColor="grey"; music.play(); } drawSprites(); }
