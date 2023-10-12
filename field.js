const myRe = /d(b+)d/g;
const myArray = myRe.exec("cbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);
