import Car from "./car.mjs";
import Motorbike from "./motorbike.mjs";
import MotorVehicle from "./motorvehicle.mjs";

const myVehicle = new MotorVehicle("myMake", "myModel", 4, 2000)

console.log(myVehicle)
console.log(myVehicle.speed)
/*
myVehicle.accelerate(10)
console.log(myVehicle.speed)
myVehicle.brake(5)
console.log(myVehicle.speed)
myVehicle.brake(5)
console.log(myVehicle.speed)
*/

const myCar = new Car("BMW", "320dGT", 2000, 5, true)
console.log(myCar)

const myBike = new Motorbike("Kawasaki", "Ninja", 650, "chain")
console.log(myBike)
myCar.accelerate(10)
myBike.accelerate(10)
console.log(`After 10 seconds CAR is doing ${myCar.speed} and BIKE is doing ${myBike.speed}. Therefore ${myCar.speed>myBike.speed ? "CAR" : "BIKE" } wins! `)