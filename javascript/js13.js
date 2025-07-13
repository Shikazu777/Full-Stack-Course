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

let elems=document.getElementsByClassName('child');
console.log(elems)
console.log(elems[0].childNodes)
console.log(elems[0].children)

let d= document.querySelectorAll('h5.guvi')
console.log(d)
d[0].style.color='pink'
d[1].style.color='yellow'
d[2].style.color='blue'
d[3].style.color='orange'
