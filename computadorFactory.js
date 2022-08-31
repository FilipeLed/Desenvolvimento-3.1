const Server = require("./server");
const Pc = require("./pc");

const computadorFactory = (ram, hdd, cpu, type) => {  
    if (type === 'server') {  
        return new Server(ram, hdd, cpu, type);  
    }  
    if (type === 'pc') {  
        return new Pc(ram, hdd, cpu, type);  
    }  
}  
module.exports = computadorFactory; 