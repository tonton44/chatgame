// eventemitter.js
    
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(name, callback) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(callback);
    }
    emit(name, data) {
        if (this.events[name]) {
            this.events[name].forEach((callback) => callback.call(this));
        }
    }
}

class Chien extends EventEmitter {
    aboyer() {
        this.emit('aboyer', 'WOOF !');
    }
}

class Caravane {
    constructor(chien) {
        chien.on('aboyer', (cri) => {
            this.passer();
        });
    }
    passer() {
        console.log("La caravane passe");
    }
}

const chien = new Chien();
const caravane = new Caravane(chien);
chien.aboyer();


