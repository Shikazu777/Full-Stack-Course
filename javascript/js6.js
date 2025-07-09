let str = "Guvi Official Full stack developer bootcamp learning by Dhanraj";
console.log(str);
console.log(str.charAt(3));
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(6));
console.log(str.charCodeAt(4));

let newStr = str.concat(" course");
console.log(newStr);

console.log(str.includes("Full"));
console.log(str.includes("aa"));
console.log(str.indexOf("F"));
console.log(str.lastIndexOf("p"));
console.log(str.slice(0, 6)); //slice(beginIndex, endIndex)
console.log(str.slice(5, 13));

let subStr = str.substr(1, 5);
console.log(subStr);

console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.toUpperCase());


let guvi = '   this is the iit incubated company   ';
console.log(guvi);
console.log(guvi.trimStart());
console.log(guvi.trimEnd());
console.log(guvi.trim());

console.log(guvi.replace('this', 'IT'));
console.log(guvi.replaceAll('i', 'I'));

let mystr2 = "This is a best programming language";
mystr2 = mystr2.split(' ');
console.log(mystr2);

console.log(guvi.startsWith('s'));
console.log(guvi.startsWith(' '));
console.log(guvi.length);