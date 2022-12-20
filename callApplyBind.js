// Apply, call, and bind in js

let userDetails = {
    name: 'jainuddin',
    age: '21',
    designation: 'software Engineer',
}

let printName = function(add,state){
    console.log(this.name+" "+add+" "+state);
}

let userDetails2 = {
  name: "rehan",
  age: "20",
  designation: "software Engineer",
  
};

printName.call(userDetails,'burhupur','up');
printName.apply(userDetails2,['shahganj','up']);
let res = printName.bind(userDetails,'burhupur','up')
let res2 = printName.bind(userDetails2, "shahganj", "up");
res();
res2();






