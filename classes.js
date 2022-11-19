const moment = require("moment");

/** Base Class for All Vehicles */

class Vehicle {
  vehicleName = "";
  vehicleAge = 0;

  constructor(vehicleName, vehicleAge = 0) {
    this.vehicleName = vehicleName;
    this.vehicleAge = vehicleAge;
  }

  printVehicleName() {
    console.log("Name : ", this.vehicleName);
  }

  printVehicleAge(value = this.vehicleAge) {
    console.log("Age: ", value);
  }
}

/** Car Class Extends Base Class Vehicle  */
class Car extends Vehicle {
  carName = "";
  constructor(carName) {
    super(carName);
    this.carName = carName;
  }

  /** Only Accessible By Car Class  */
  getCarOnlyDetails() {
    console.log(`${this.carName} - Some car only details`);
  }

  /** Accessing Parent Class Functions  */
  accessParentClassFunc() {
    this.printVehicleAge(45); // Inherited Method
    super.printVehicleAge(45) // Calling directly inside super class
  }
}

const car = new Car("BMW");
const airplane = new Vehicle('Boeing')

/** Car Object */
car.printVehicleName();
car.printVehicleAge();
car.getCarOnlyDetails();
car.accessParentClassFunc();

/** Airplane Object */
airplane.printVehicleName();
airplane.printVehicleAge();



/** Extending Build-In Date Class  */

class MyCustomDate extends Date {
  constructor(date) {
    super(date); // Passing Date to Super Class - Date 
  }

  getMonthName() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[this.getMonth()];
  }

  /** Over ride  getSeconds() method inside date class */
  getSeconds(){
    return `I'm overridden method ${super.getSeconds()}`
  }
}


// Custom Date Object 
const date = new MyCustomDate(1668856781000);

console.log(date.getMonthName());

// Get Over Ridden Method
console.log(date.getSeconds())


// Third Party Library -  Moment JS 

class MyCustomMoment  {
    format = '';   /** Default Format  */
    constructor(format){
      this.format = format
    }

    getEpochTimeStamp(){
      return moment().valueOf()
    }

    /** Print Current Date in Given Format */
    printDate() {
      return moment().format(this.format)
    }
}

const myMoment = new MyCustomMoment('DD/MM/YYYY');

/** Get Customized Date Strings From Moment.JS */
console.log(myMoment.getEpochTimeStamp())
console.log(myMoment.printDate())