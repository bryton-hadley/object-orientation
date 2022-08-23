//create a person object 
let person = {
    firstName: 'Bryton',
    lastName: 'Hadley',
    'age': 24

}

//accessing the keys 
//console.log(person.firstName)
//console.log(person['lastName'])

//destructuring object
let meal = {
    appetizer: 'chips and salsa',
    entree: 'steak and bean burrito',
    dessert: 'fried ice cream',
    drink: 'dr.pepper'
}
////////// these two doe the samething ///////// above and below 
//let dessert = meal.dessert 

let {dessert} = meal 


let {entree, appetizer} = meal

//rename value
let {drink: bestSodaEver} = meal 

// console.log(dessert, entree, appetizer)
// console.log(bestSodaEver)
// console.log(meal)


//for on loops in objects and how to refrance objects 
//for(key in meal){
   // console.log(`For my ${key} I had ${meal[key]}`)
//}



//adding and deleting properties from objects

//adding objects 
person.occupation = 'Student'
//console.log(person)
person.age++
//console.log(person)

// how to delete properties
delete person.lastName
//console.log(person)





//Classes and extending class 
class Pet {
    constructor(name, age){
        this.name = name, 
        this.age = age
    }
}

//extending class
class Dog extends Pet {
    constructor(name,age,breed){
        super(name,age)
        
        this.breed = breed 
    }
    bark(){
        console.log(`Bark, my name is ${this.name}`)
    }
}

let lassie = new Dog('Lassie', 7, 'Collie')

console.log(lassie)
lassie.bark()

class Cat extends Pet {
    constructor(name, age, color){
        super(name,age)
        this.color = color,
        this.temperment = 'mean'
    }
    beNice(){
        this.temperment = 'nice'
        console.log(`${this.name} is now a nice cat!`)
    }
}


let macy = new Cat('Macy', 2, 'grey')

console.log(macy.temperment)
macy.beNice()