console.log('js-5');
let myvar;
myvar = 50;
console.log(myvar, typeof(myvar));
myvar = String(myvar);
console.log(myvar, typeof(myvar));

let name = 'abcd'; 
name = Number(name);
console.log(name, typeof(name));
console.log(name);

let booleanval = true;
booleanval = Number(booleanval);
console.log(booleanval, typeof(booleanval));
let booleanval2 = false; // Variable name changed to booleanval2 to avoid re-declaration errors with 'let'
booleanval2 = Number(booleanval2); // Changed to convert booleanval2 to Number and assign to booleanval
console.log(booleanval2, typeof(booleanval2));

let boolval = true;
boolval = String(boolval);
console.log(boolval, typeof(boolval));

let mystr = 'true';
mystr = Boolean(mystr);
console.log(mystr, typeof(mystr));

let mystr2 = 'guvi';
mystr2 = Boolean(mystr2);

let mystr3 = 'false';
mystr3 = Boolean(mystr3);
console.log(mystr3, typeof(mystr3));



