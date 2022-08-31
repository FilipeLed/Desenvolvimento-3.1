const computadorFactory = require("./computadorFactory");

const myPc = computadorFactory(8, 256, 150, 'server');      
const myServer = computadorFactory(4, 128, 80,'pc' );      
console.log(myPc.toString());      
console.log(myServer.toString());