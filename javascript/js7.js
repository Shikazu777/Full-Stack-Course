// using arrat literals

let fruits=['apple','banana','cherry']
console.log(fruits)

//using constructor
let fruits2=new Array('Apple','Banana','Cherry')
console.log(fruits2)

// array methods
fruits.push('grapes')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift();
console.log(fruits)
fruits.unshift('Avacodo', 'Orange')
console.log(fruits)
let moreFruits = fruits.concat(['mosambi', 'watermelon'])
console.log(moreFruits)

let fruitString = fruits.join(",")
console.log(fruitString)




console.log(fruits.slice(1,3))  //1,2

console.log(fruits.slice(1,4))  //1,2

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
fruits.splice(1,1,'dates')
console.log(fruits)

console.log(fruits.sort((a,b)=>a.length-b.length))

// fruits.forEach(fruit=>console.log(fruit.toUpperCase()))
// fruits.map(fruit=>console.log(fruit.toUpperCase()))

let foreachdata=fruits.forEach(fruit=>fruit.toUpperCase())
let mapdata=fruits.map(fruit=>fruit.toUpperCase())

console.log(foreachdata)
console.log(mapdata)

// filter
let longFruits=fruits.filter(fruit=>fruit.length>5)
console.log(longFruits)

//reduce

let total=fruits.reduce((sum,fruit)=>sum+fruit.length,0)
console.log(total)

//find
let fruitFind=fruits.find(fruit=>fruit.startsWith('c'))
console.log(fruitfindindex)

let hasbanana=fruits.includes('banana')
console.log(hasbanana)

let hasbananai=fruits.indexOf('banana')
console.log(hasbananai)

let hasbananail=fruits.lastIndexOf('banana')
console.log(hasbananail)
