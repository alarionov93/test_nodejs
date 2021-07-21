
class Animal {
  speed: number;
  name: string;

  constructor(name: string) {
    this.speed = 0;
    this.name = name;
  }

  run(speed: number) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }

  run(speed: number, ...params: string[]) {
  	if (1) {
  		super.run(speed);
  	}
    for (let p of params) {
      console.log(p);
    }
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

class RabbitSuper extends Rabbit {
    gun: boolean;

    constructor(name: string, gun: boolean) {
        super(name);
        this.gun = gun;
    }
    stop() {
        if (this.gun) {
        	// console.log(super);
            // super.super.stop();
        } else {
        	super.stop();
        }
    }
}


interface HavingString {
  toString: Function
}

function loggingIdentity<Type extends HavingString>(arg: Type): Type {
  console.log(arg.toString())
  return arg
}
type Point = {
  x: number;
  y: number;
}
let point = {x:1, y:4};
loggingIdentity(point);



