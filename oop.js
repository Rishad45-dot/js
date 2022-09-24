/**
 * 'class' keyword followed by the name of the class starting with 
 * a capital letter then
 * constructor function which accepts as many parameters as needed
 * constructor function will assign passed in parameters to the
 * future objects properties
 * When a method is coded in a class , keyword like 'function' or 
 * 'constructor' isn't needed
 */


/**
 * Inheritance 
 * Encapsulation
 * Abstraction
 * Polymosphism
 */

 
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo is on!")
    }
}
var newCar = new Car() //'new' keywork to instansiate a Class Object
var newCar1 = Object.create(Car) //'Object.create() to instansiate a Class Object