'use strict';

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {
    const { maxSpeed, speed, isOn, distance, _price } = car;
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = _price;
    console.log(
      `MaxSpeed:${this.maxSpeed} speed:${this.speed} isOn:${this.isOn} distance:${this.distance} price:${this.price}`,
    );
  }

  get price() {
    return this._price;
  }
  set price(price) {
    return (this._price = price);
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    this.speed + value < this.maxSpeed
      ? (this.speed += value)
      : console.log('To big acceleration');
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    this.speed - value > 0
      ? (this.speed -= value)
      : console.log('To big deceleration');
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
Car.getSpecs(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log('Price:', mustang.price); // 2000
mustang.price = 4000;
console.log('Price:', mustang.price); // 4000
