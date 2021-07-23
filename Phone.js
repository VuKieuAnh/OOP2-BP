class Phone {
    battery;
    draft;
    inbox;
    outbox;
    status;

    constructor(battery) {
        this.battery = battery;
        this.status = true;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
    }

    checkOnOff(){
        return status;
    }

    turnOnOff(){
        this.status = !this.status;
    }

    charge(){
        this.battery = 100;
    }

    compose(mess){
        this.draft = mess;
        this.battery--;
    }

    sendMess(phone){
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.battery--;
        this.draft="";
    }
    getInbox(){
        return this.inbox;
    }

    getOutBox(){
        return this.outbox;
    }

}
