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

let i = 10;
console.log(i.toString(), typeof(i.toString()));

let z = '100';
z = Number(z);
console.log(z, typeof(z));

let zn = '100wd';
zn = Number(zn);
console.log(zn, typeof(zn));

var u = Number([1, 2, 3, 4, 5, 6]);
console.log(u, typeof(u));

var u = Number([1]);
console.log(u, typeof(u));

var u = Number('3333.453333');
console.log(u, typeof(u));
console.log(u.toFixed(2), typeof(u));

let num = parseFloat('456.786');
console.log(num, typeof(num));


//


console.log(1223 + "2345");
console.log(1223 + 4);
console.log("12" + "3");
console.log("12" - "3");
console.log("12" - 3);
console.log(12 - "3" + 10 + 20 + "5"); // 12-10+20 = 42-3 = 39 + "5" // Note: The comment in the image (12-10+20) does not match the code (12-"3"+10+20+"5"). The correct evaluation is 9 + 10 + 20 + "5" = 39 + "5" = "395"
console.log(2 * "2" * "3" - 10 - "2");
console.log(2 * "2" * "3" - 10 + "2");
console.log(10 / "2");
console.log("10" / "2");
console.log("10" % "2");



