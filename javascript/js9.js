// for loop
// The for loop is one of the most commonly used loops in JavaScript. It
// consists of three main parts: initialization, condition, and increment/
// decrement.

// for (initialization; condition; increment/decrement) {
// // code block to be executed
// }

// for(let i=0;i<5;i++){
// // console.log(i)
// }

// while loop: The while loop executes as long as a specified condition is
// true.

// while (condition) {
// // . . . . . // code block to be executed
// }

// let i=1;
// while(i<11){
//     console.log(i)
//     i++;
// }

// 3. do...while loop
// The do...while loop is similar to the while loop, but it guarantees that the code block is executed at least once.
// do {
// // code block to be executed
// } while (condition);

// let i=10;
// do{
//     console.log(i);
//     i++;
// }while(i<20)

// 4. for...in Loop
// The for...in loop iterates over the properties of an object.

// for (key in object) {
// // . . . . . // code block to be executed
// // }

// const person={
//     fname:"John",
//     lname:"Cena",
//     age:55
// }

// for(let key in person){
//     console.log(key, " -> ",person[key])
// }

// 5. for...of Loop
// The for...of loop iterates over the values of an iterable object (like arrays, strings, maps, sets, etc.).

// for (value of iterable) {
// // code block to be executed
// }

// const array=[1,2,3,4,5,5,19,39]
// for(let val of array){
// // console.log(val)
// }
// const array1="1 2 3 4 5 6 7"
// for(let val of array1){
// // console.log(val)
// }

// Nested Loop
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(`i=${i}, j=${j}`)
//     }
// }

const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j])
    }
}