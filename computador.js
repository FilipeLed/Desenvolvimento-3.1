class Computador {      
    constructor(ram, hdd, cpu, type){      
        this.ram = ram || 0;    //em GB
        this.hdd = hdd || 0;    //em GB
        this.cpu = cpu || 0;    //em GHz
        this.type = type || "";      
    }      
}      
      
module.exports = Computador;  