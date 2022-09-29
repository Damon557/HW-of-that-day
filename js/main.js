//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3)

for(let key in person3){
    console.log(key, person3[key])
}








//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function Person(age, name){
    this.age = age
    this.name = name

    this.printinfo = () => {
        console.log(`${name} is ${age} years old.`)
    }

    this.add_age = () => {
        console.log(age++)
    }
}
const person1 = new Person(12, 'Gon')
person1.add_age()
person1.add_age()
person1.add_age()
person1.printinfo()

const person2 = new Person(29, 'Hisoka')
person2.printinfo()








// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const exercise =(num) => {
    return new Promise((resolve, reject) => {
        if(num.length > 10) {
            resolve("Big Word")
        }else {
            reject("Small Number");
        }
    });
    
}
const Word = exercise('Hogwarts')
console.log(Word)


//Code Wars


//The wide-mouth frog is particularly interested in the eating habits of other creatures.

//He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

//When he meets the alligator, it then makes a tiny mouth.

//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide


mouthSize = animal => /alligator/i.test(animal) ? 'small' : 'wide' 


//My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

//In honor of my grandfather's memory we will write a function using his formula!

//Take a list of ages when each of your great-grandparent died.
//Multiply each number by itself.
//Add them all together.
//Take the square root of the result.
//Divide by two.

function predictAge(...ages){
    let sum = 0
    for (i in ages){
      sum += ages[i] ** 2
    }
    return Math.sqrt(sum) / 2 | 0
  }