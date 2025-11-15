//reduce function
var numbers=[1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
},0)

// console.log(sum)

const cartItems = [
    {
        productName : "rice",
        productPrice : 350,
        quantity : 4
    },
        
    {
        productName : "bread",
        productPrice : 50,
        quantity : 2
    },

    {
        productName : "pappad",
        productPrice : 320,
        quantity : 3
    },

    {
        productName : "momo",
        productPrice : 150,
        quantity : 4
    }
]

const totalPrice = cartItems.reduce(function(accumulator,currentProduct){
    return accumulator + currentProduct.productPrice
},0
)

console.log(totalPrice)




