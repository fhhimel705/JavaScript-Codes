const car = {
name: "fiat",
model: 500,
weight: "850 kg",
color: "white",
/*object method given below which is also object function*/
start: function(){
    this.drive();/* Called drive function by (this) keyword*/
console.log("car has started");
},
drive: function(){
console.log("car is driving");
}, 
};

// Literal syntax given below:
const person = { firstName :"fh", lastName :"himel", age : 22, eyeColor :"brown"};
console.log(car.weight);  /*object output system*/
console.log(car['model']);  /*object output also works like array*/
car.start(); /*called start function*/

 let b =9; /*literal syntax*/
//  let b = new Number(9);
// console.log(b);
console.log(typeof b);
