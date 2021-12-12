const cvs = document.getElementById("myCanvas");
const ctx= cvs.getContext('2d');

const sprite = new Image();
sprite.src="SPRITES.png";

const skyColor="#70c5ce";

const bg={
    sX : 0,
    sY : 0,
    x:0,
    y:0,
    w:143,
    h:255,
    draw: function(){
        ctx.drawImage(sprite,this.sX, this.sY,this.w, this.h, this.x, this.y, this.w*2, this.h*2);
        ctx.drawImage(sprite,this.sX, this.sY,this.w, this.h, this.x+this.w*2, this.y, this.w*2, this.h*2);
        ctx.drawImage(sprite,this.sX, this.sY,this.w, this.h, this.x+this.w*4, this.y, this.w*2, this.h*2);

        this.x--;

        if ((this.x + this.w*2) <=0){
            this.x=0;
        }
    }
}


const bird={
    x : 50,
    y : 150,
    h : 25,
    w : 25,
    gravity:0.1,
    jumping: false, 
    frameCount :0,


    draw: function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w,this.h);
    },

    update: function(){
        this.y=this.y+this.gravity;

        if (this.y > cvs.height-this.w-20){
            this.y= cvs.height -this.w -20;
        }

        this.frameCount+= 0.3;

        if (this.frameCount > 360) this.frameCount=0;

        this.y+= Math.sin(this.frameCount)*3;

    } ,

}

function update(){

    bird.update();

}

function draw(){
    
    ctx.clearRect(0,0,cvs.width, cvs.height);
    bg.draw();
    bird.draw();

}

function loop(){

    update();
    draw();
    requestAnimationFrame(loop);

}

loop();