function hello() {
    console.log("Hello Function");
}

function isAbove18() {
    console.log("hi");
    return age >= 18;
}

function ableToVote() {
    if(age >= 18 && isVoterId == true) {
        return true;
    } else {
        return false;
    }
}