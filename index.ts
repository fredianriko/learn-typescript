// Notes
// typescript is need transpiller, so everything in file .ts will be transpilled into .js
// to transpile ts file, use "tsc filename.ts", then the .js file will  be generated
//  after that, if you still continously working with that file, you can press "CTRL + SHIFT + B", then select "tsc watch"

//  so every changes made in the .ts file, will be automatically transpilled into the .js file,

// so basically typscript transpiller is like sass transpiller
// the main difference between javascript and typescript is that it has static "type" for every varibel, just like fucking java

interface User {
  Firstname: string;
  LastName: string;
  age: number;
  single: boolean;
}
// interface is like constructor in oop
const riko: User = {
  Firstname: "Fredi",
  LastName: "Anriko",
  age: 24,
  single: true,
};
// print object in typscript
console.log(riko);

// this is how you write function in typscript
// the one starting with "function" is the interface for function
function add(x: number, y: number): number {
  return x + y;
}

// myAdd is the actuall function assigned the interface structure
let myAdd = function (x: number, y: number) {
  return x + y;
};

// then we try print the function with given parameter
console.log(myAdd(2, 2));
