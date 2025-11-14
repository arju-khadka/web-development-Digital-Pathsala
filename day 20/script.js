
// regular function
function sayHello(){
    console.log("Hi, How are you?")
}

sayHello()

function sum(a,b){
    console.log(a+b)
}

sum(2,3)
sum(34,45)

// named function
const sayHello = function(){
    console.log("Hello")
}

sayHello()

// arrow function
const sayHello2 = ()=> {
    console.log("Hello world")
}

sayHello2()

(function hello(){
    console.log("Hello")
})()

function hello(name="Arju"){
    // console.log("hello" + name)
    console.log(`Hello ${name}`)
}

hello("Arju")

// Higher order function

var numbers=[1,2,3,4,5,6,7,8,9,10]

numbers.forEach(function(number){
    console.log(number)
})

const squares = numbers.map(function(number){
    return number*2
})

const evenNumbers = numbers.filter(function(number){
    return number % 2 ==0 
})
console.log(evenNumbers)