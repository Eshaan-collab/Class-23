class Box{
constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height,{restitution:0.8});
    World.add(world,this.body);   
 this.height=height;
 this.width=width;     
      

}
display(){
    var opt=this.body.position;
    var angle=this.body.angle;
    push() 
    translate(opt.x,opt.y);
     rotate(angle);
      rectMode(CENTER);
       fill(255);
        rect(0,0, this.width, this.height); 
        pop();   
}




}