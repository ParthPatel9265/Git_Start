/*
let person={
name:"parth",
age:21

};

console.log(person);
*/

/*
const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log('draw')
    }
}

console.log(circle.location.x);
*/

/*
//factory function 

function create(radius){
    return {radius,
    draw: function() {
        console.log('draw');
    }
   };
}

const circle = create(3);
console.log(circle.radius);

//constructor 

function create(radius){
    console.log(this);
    this.radius=radius;
    this.draw = function() {
        console.log('draw')
    }
}

const att = new create(3);
console.log(att);

*/

/*

// Stopwatch 


function Stopwatch(){

    let startTime,endTime,running,reset,duration=0;
    this.start = function(){
        if(running)
         throw new Error("stopwatch has already started");
        running = true;
        startTime = new Date();
    };
    this.stop = function(){
        if(!running) 
           throw new Error("stopwatch is not started");
        running = false;
        endTime = new Date(); 
        const seconds = (endTime.getTime() -  startTime.getTime())/1000;
        duration += seconds;
    };
    this.reset= function(){
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
    };
    Object.defineProperty(this,'duration',{
      get:function(){return duration;}

    });


}

 const sw = new Stopwatch();

 */

/*
 let fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.length); 
 console.log(fruits.sort());
 */

//  const person = {
//      firstName : 'parth',
//      lastName : 'patel',
//      get fullName(){
//          return `${person.firstName} ${person.lastName}` 
//      },
//      set fullName(value){
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//      }

//  }
//  person.fullName = 'pragati patel';
//  console.log(person);



// const video = {
//      title : 'a',
//      tags : ['a','b','c'],
//      showTags(){
//          this.tags.forEach(function(tag){
//              console.log(this.title,tag);
//          },this); 
//         }
// };

// video.showTags();


//filtering 

// const arr = [1,2,2,3,-1,-2,0]

// const filtered = arr.filter(n => n >=0 );
// console.log(filtered);


//map 

// const arr = [1,2,2,3,-1,-2,0]

// const filtered = arr.filter(n => n >=0 );
// const items = filtered.map(n => ({value:n}));
// console.log(items);

//reduce

// let num = [1,2,3,4,5,6];
// let sum = 0;
// for (let n of num)
//   sum += n;

// console.log(sum);   

// const add = num.reduce((total,current) =>  total + current );
// console.log(add);

  
//bind 

// const person = { 
//      name : "parth",
//      walk(){
//           console.log(this);
//      }

// };
// person.walk();
// console.log(person);
// const talk = person.walk.bind(person);
// talk();

 
//Object Destructuring
// const address = {
//      street : 'abc',
//      city : 'def',
//      country : 'xyz'
// };

// const {street:st } = address;
// console.log(st);

//spread operator
a=[1,2,3];
b=[4,5,6];

const arr = [...a,...b];
console.log(arr);


const x= {
    name :"parth"
};
const y = {
    country : "India"
};

const z = {...x,...y,state:"gujarat"}
console.log(z);