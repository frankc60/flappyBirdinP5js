class Wall {
    constructor() {
        this.top = floor(random(height/2));
        this.bottom = floor(random(height /2))
        this.x = width;
        this.width = 15;
        this.speed = 1;
    }

    draw() {
        rect(this.x,0                 ,this.width,this.top             ,20)
        rect(this.x,height-this.bottom,this.width,height-this.bottom   ,20)
        
    }

    update() {
        this.x = this.x - this.speed;
        this.draw();
    }

    hits(bird) {
       
        if(bird.x === this.x)  {
            //console.log(this.x, bird.x)   
            //console.log(this.top, this.bottom  ) 
          //  console.log(bird.y)
            //bottom = 22, is nearly at the bottom (1 is bottom)
            //top = 233, top nearly in middle, 1 is the top
            //bird at top is near 1, bird at bottom is 480 (height)

           // if bird at bottom(480) 
             if(bird.y > (height - this.bottom) || bird.y <  this.top) {
              //  console.log(bird.y + " > " , (height-this.bottom)  )
              //  console.log("bird.y:" + bird.y + " < " + this.bottom)
              bird.bang = true;
           
              clearTimeout(bird.timeout);
              bird.timeout = setTimeout(bird.safe ,500);

            } 
           /*    if(bird.y <  this.top) {
              bird.bang = true;
            }
 */
            //if(bird.x == this.x && bird.y <= this.top) {
    
        }  else {
          //  bird.bang = false;
        }
    }

}