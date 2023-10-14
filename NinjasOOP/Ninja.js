class Ninja {
  constructor(name, health, speed, strength)
  {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  
  sayName() {
    console.log("I am " + this.name + " of the Hayabusa clan.")
  }
  
  showStats(){
    console.log("Health: " + this.health + " " + "Speed: " + this.speed + " " + "Strength: " + this.strength);
  }
  
  drinkSake(){
    this.health += 10;
    console.log("Health: " + this.health)
  }
  
}


const ninja = new Ninja("Ryu", 100, 3, 3);

ninja.sayName();
ninja.showStats();
ninja.drinkSake();


class Sensei extends Ninja {
  constructor(name) {
    super(name, health, speed, strength);

    this.health = 200;
    this.speed = 10;
    this.strength = 10
  }

  speakWisdom(){
    super.drinkSake();
    console.log("Yeah, the shadows and the leaf are one in the sun.")
  }
  
}

const senseiRyo = new Sensei("Ryoda");

senseiRyo.drinkSake();
senseiRyo.drinkSake();
senseiRyo.drinkSake();
senseiRyo.drinkSake();