class SwitchButton {
    status;
    lamp;
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(newLamp){
        this.lamp = newLamp;
    }

    switchOff(){
        this.lamp.turnOff();
    }

    switchOn(){
        this.lamp.turnOn();
    }
}

let ct = new SwitchButton(true, denhoc);
let ct1 = new SwitchButton(true, denhoc1);
