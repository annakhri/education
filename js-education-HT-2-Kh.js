//Task#1

//create a constructor

var Car = function(num_of_wheels, speed) {

	this.num_of_wheels = num_of_wheels || "";
	this.speed = speed || "";

	return(speed);
}

//create method

Car.prototype.drive = function() {
  console.log('Driving on ' + this.speed + 'kms per hour');
};


var car = new Car();

// car.drive(160); -> method is working

var Truck = function(num_of_wheels, speed) {
    Car.call(this, 6, speed);
 }

Truck.prototype = Object.create(Car.prototype);

var truck = new Truck();

var Bycicle = function(num_of_wheels, speed) {
    Car.call(this, 2, 20);
 }

Bycicle.prototype = Object.create(Car.prototype);

var bycicle = new Bycicle();



//Task#2

var Car = function(num_of_wheels, speed) {
	
	var wheels = num_of_wheels || '';

	this.speed = speed || 80;


	this.getWheels = function() {
        return wheels;
    }
}

var car = new Car(5, 120);

