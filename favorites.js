function init() {
    programState = false
}

function clickedProgramming() {
    if(programState){
        document.getElementById("program").innerHTML = "Programming"
    } else {
        document.getElementById("program").innerHTML = "0101000001110010<br>0110111101100111<br>0111001001100001<br>0110110101101101<br>0110100101101110<br>01100111";
    }
    programState = !programState
}

