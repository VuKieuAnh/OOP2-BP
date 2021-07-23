class ElectricLamp {
    status;
    constructor(status) {
        this.status = status;
    }
    turnOff(){
        this.status = false;
    }

    turnOn(){
        this.status = true;
    }
}
let denhoc = new ElectricLamp(false);
let denhoc1 = new ElectricLamp(false);
