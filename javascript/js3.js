    var x=10;
function varExample(){
    console.log(x)
}
//console.log(x)

function letexample(){
    let x=30;
    x=
    // lety=32;
    console.log(x)
}
letexample()

function constExample(){
    const z=10;
    console.log(z)

    const obj={name:"ark"}
    console.log(obj)
    obj.name='yyy'
    console.log(obj)


}

function example() {
  var a = 1; // Function-scoped
  let b = 2; // Block-scoped
  const c = 3; // Block-scoped, constant value

  if (true) {
    var a = 4; // Same variable as above
    let b = 5; // Different variable, block-scoped
    const c = 6; // Different variable, block-scoped
    console.log(a); // 4
    console.log(b); // 5
    console.log(c); // 6
  }

  console.log(a); // 4 (var is function-scoped)
  console.log(b); // 2 (let is block-scoped)
  console.log(c); // 3 (const is block-scoped)
}

example();

