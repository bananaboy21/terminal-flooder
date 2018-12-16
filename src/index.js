class TerminalFlooder {
    
    constructor() {
        this.repeat = true;
    }
    
    static start(times = null) {
        if (!times) {
            while (this.repeat) {
                console.log("\n")
            }
        } else {
            for (let x = 0; x < times; x++) {
                console.log("\n")
            }
        }
        
    }
    static stop() {
        this.repeat = false;
    }
}

module.exports = TerminalFlooder