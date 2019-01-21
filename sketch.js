//
let bird;
let wall = [];

function setup() {
    createCanvas(640,480)
    noStroke();

    bird = new Bird();
    wall.push(new Wall());
   
}


function draw() {
    background("black")
    bird.show();  
    bird.run();       
    //wall.update();    
    
    
    if(frameCount % 100 ==0 ) {
        wall.push(new Wall());
    }
    
    for(let i=wall.length-1; i >= 0 ; i--) {
        wall[i].update();
        
        if(wall[i].hits(bird)) {
            console.log("HIT!!!!")
        }
    
        if(wall[i].x <  30) {
            wall.splice(i,1)
        }
    }
    
}

function keyPressed() {

    if(key == " ") {
        bird.flap(); 
    }

};