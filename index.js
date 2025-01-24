function init() {
    ClickedAmount = 0;
}

function clickedMe() {
    ClickedAmount += 1;
    if(ClickedAmount < 5) {
        Remark = "How odd of you."
    } else if(ClickedAmount < 20) {
        Remark = "Weird."
    } else if(ClickedAmount < 40) {
        Remark = "What exactly are you trying to achieve?"
    } else if(ClickedAmount < 100) {
        Remark = "stop that"
    } else {
        Remark = "A milestone to be sure. Don't bother going further though."
    }
    document.getElementById("clicker").innerHTML = "I see you've also clicked me "+ ClickedAmount + " time(s). " + Remark;
}

