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
        if(bird.x === this.x && bird.y > (height - this.bottom) || bird.x === this.x && bird.y <  this.top)  {
            bird.bang = true;
            clearTimeout(bird.timeout);
            bird.timeout = setTimeout(bird.safe ,500);
        } 
    }
}