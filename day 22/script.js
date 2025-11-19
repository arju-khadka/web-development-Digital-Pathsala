// console.log("hello")

// const h1 = document.querySelector('.catchMe')
const h1 = document.getElementsByClassName('catchMe')
h1.textContent = "Learning C"
h1.style.color = "blue"

// console.log(h1)

const button = document.querySelector('.clickMe')
button.addEventListener("click",function(){
    h1.textContent = "Learning Click Me"
})

function changeTextContent(){
    console.log("Clicked on button")
}