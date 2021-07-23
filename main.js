let phoneOfDat = new Phone(12);
let phoneOfHoan = new Phone(10);
// phoneOfHoan.compose("Dat oi");
function creatNewMessDat(){
    let v = document.getElementById("messOfDat").value;
    phoneOfDat.compose(v);
    phoneOfDat.sendMess(phoneOfHoan)
    document.getElementById("inbox1").innerText = phoneOfDat.inbox;
    document.getElementById("outbox1").innerText = phoneOfDat.outbox;
}
function creatNewMessHoan(){
    let v = document.getElementById("messOfHoan").value;
    phoneOfHoan.compose(v);
    phoneOfHoan.sendMess(phoneOfDat);

    document.getElementById("inbox2").innerText = phoneOfHoan.inbox;
    document.getElementById("outbox2").innerText = phoneOfHoan.outbox;

}
