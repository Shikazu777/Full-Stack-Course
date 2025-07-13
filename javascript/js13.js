// Dom Selectors

// 1. Single Element Selector

// 1.
let element = document.getElementById("name");
console.log(element);
console.log(element.className);
console.log(element.childNodes);

let el2 = document.getElementById("child");
console.log(el2.childNodes);

element.innerHTML = "<li>Welcome to JavaScript</li>";
element.style.color='Green'

let p=document.getElementById("para")
p.innerText='<h6>this is para</h6>'

let todo=document.querySelector("#todo")
// let todo=document.querySelector(".guvi")
console.log(todo)

todo.style.color='red'
// console.log(guvi)

// Multi Element

