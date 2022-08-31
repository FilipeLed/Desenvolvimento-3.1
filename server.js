const Computador = require('./computador');  
class Server extends Computador {  
    constructor(ram, hdd, cpu, type) {  
        super(ram, hdd, cpu, type);  
        //super(hdd);
        //super(cpu);
        //super(type);  
    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Server;  

  