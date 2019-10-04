//Setting object properties using es6 

const name = "Ajay"
const age = 21

const user = {
    name,
    userage: age
}
console.log(user)

//object destructuring using es6 
const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    saleprice: undefined,
    amt: 4.2
}

const {label:productLabel,price,amt=5} = product

console.log(productLabel)
console.log(price)
console.log(amt)

//using destructuring for function arguments

const transactions = (type,{label,price}) => {
    console.log(label)
    console.log(price)
}

transactions('order',product)