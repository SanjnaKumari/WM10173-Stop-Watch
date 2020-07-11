var min = 0;
var sec = 0;
var milisec = 0;

var minheading = document.getElementById('min')
var secheading = document.getElementById('sec')
var milisecheading = document.getElementById('milisec')
var interval;

function timer(){
    milisec++
   milisecheading.innerHTML = milisec
   if (milisec>=100){
       sec++
       secheading.innerHTML = sec
       milisec = 0
   }
   else if (sec >=60){
       min++
       minheading.innerHTML = min
       sec = 0
   }
}

function start(){
    interval = setInterval(timer,10)
    document.getElementById("startbtn").disabled = true
}


function stop(){
    clearInterval(interval)
    document.getElementById("startbtn").disabled = false
}
    
function reset(){
   min = 0;
   sec = 0;
   milisec = 0;
   minheading.innerHTML = min
   secheading.innerHTML = sec
   milisecheading.innerHTML = milisec
   stop()
}


function setLaps(){
    var p = document.createElement("p")
    var timer = document.getElementById("min").innerText + " : " + document.getElementById("sec").innerText + " : " +  document.getElementById("milisec").innerText;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p)
 }


