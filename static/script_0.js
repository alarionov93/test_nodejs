class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }

  run(speed, ...params) {
  	if (1) {
  		super.run(speed);
  	}
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

class RabbitSuper extends Rabbit {
    constructor(name, gun) {
        super(name);
        this.gun = true;
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