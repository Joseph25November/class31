class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.lizard = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y]
    this.lizard.push(position)
    for(var i = 0; i<this.lizard.length; i ++){
      image(this.smoke,this.lizard[i][0],this.lizard[i][1])
    }
  }
}
