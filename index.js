// Notes
// typescript is need transpiller, so everything in file .ts will be transpilled into .js
// to transpile ts file, use "tsc filename.ts", then the .js file will  be generated
//  after that, if you still continously working with that file, you can press "CTRL + SHIFT + B", then select "tsc watch"
// interface is like constructor in oop
const riko = {
    Firstname: "Fredi",
    LastName: "Anriko",
    age: 24,
    single: true,
};
// print object in typscript
console.log(riko);
// this is how you write function in typscript
// the one starting with "function" is the interface for function
function add(x, y) {
    return x + y;
}
// myAdd is the actuall function assigned the interface structure
let myAdd = function (x, y) {
    return x + y;
};
// then we try print the function with given parameter
console.log(myAdd(2, 2));
//# sourceMappingURL=index.js.map