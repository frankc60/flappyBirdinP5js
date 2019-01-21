class Bird {
    constructor() {
        this.size = 30;
        this.y = height/2;
        this.x = width/2;
        this.velocity = 0;
        this.gravity = 0.1;
        this.bang = false;
        this.timeout;
    }

    safe() {
        bird.bang = false;
    }

    show() {
        if(this.bang === true) {
            fill(255,0,0)
            this.y += this.velocity*2;
          
        } else { fill(255) }
        ellipse(this.x,this.y,this.size,this.size)
        fill(255)
    }

    run() {
        this.show();
        if(this.y >= height) {
          //  console.log("hit bottom!")
            this.y = height;
        } else if(this.y <= 1) { //hit top
            this.y = 2;
           
        } else {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
    }

    flap() {
        console.log("flap")
        this.y -= 35;  
        this.velocity = 0;      
    }
}

