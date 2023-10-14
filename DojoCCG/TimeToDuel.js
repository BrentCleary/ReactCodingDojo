class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilence) {
    super(name, cost);
    this.power = power;
    this.resilence = resilence;
  }

  attack(target) {
    target.resilence -= this.power;
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost)
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if(target instanceof Unit)
    {
      if(this.stat == "resilience")
      {
        target.resilence += this.magnitude;
      }
      else if( this.stat == "power")
      {
        target.power += this.magnitude;
      }
    }
    else
    {
      throw new Error("Target must be a unit.")
    }
  }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4); 
const BlackBeltNinja = new Unit("Red Belt Ninja", 4, 5, 4);
const HardAlgo = new Effect("Hard Algo", 2, "Increase this Unit's power by 3.", "power", 3); 

console.log("Red Belt Ninja's power is " + RedBeltNinja.power)
HardAlgo.play(RedBeltNinja);
console.log("Red Belt Ninja's power is " + RedBeltNinja.power)
