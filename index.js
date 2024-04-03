console.log("hello world!");
const name = "Uday Shankar Purbey";

function fun () {
    console.log("Function");
}

function tryout() {
    return time >= 100;
}

function f1Speed(speed) {
    if(speed > 250) {
        return true;
    } else {
        console.log("hi");
        return false;
    }
}

function isExpensive() {
    if(price > 10000000) {
        return true;
    } else {
        return false;
    }
}

function isRare() {
    if(avilableAmount < 1000 && isUseful == true) {
        return true;
    } else {
        return false;
    }
}

function isUseful() {
    if(savedTime > 2  || savedMoney > 10000) {
        return true;
    } else {
        return false;
    }
}

function perKMPrice() {
    return fuelPrice/average;
}

function perKMComparison() {
    let perKMPriceOfEv = unitRate/average;
    let perKMPriceOfdiesel = fuelPrice/average;
    let perKMPriceOfEthnol = ethnolPrive/average;
    let data = perKMPriceOfdiesel > perKMPriceOfEthnol ? (perKMPriceOfdiesel > perKMPriceOfEv ?perKMPriceOfdiesel:perKMPriceOfEv) : ( perKMPriceOfEthnol > perKMPriceOfEv ?perKMPriceOfEthnol:perKMPriceOfEv)
    return data;
}

function salrySlip(){
    return (salary/daysInMonth) * NoOfWoringDays + reimburshmentAmount
}