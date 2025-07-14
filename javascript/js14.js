console.log("my friends")
// let con=document.querySelector(".first")
// console.log(con)

let con=document.querySelector('.container')
let nodeName=con.childNodes;
console.log(nodeName)
nodeName=con.childNodes[5];
console.log(nodeName)
nodeName=con.childNodes[2]
console.log(nodeName)

// nodeType=con.childNodes[4].nodeType
// console.log(nodeType)

let justchildelements=con.children;
console.log(justchildelements)

let firstchild=con.firstElementChild;
console.log(firstchild)
let secondChild=con.firstElementChild.nextElementSibling;
console.log(secondChild)

let thirdchild=con.firstElementChild.nextElementSibling.nextElementSibling;
console.log(thirdchild)

let lt=con.lastElementChild.previousElementSibling;
console.log(lt)

let randome=con.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(ramdome)