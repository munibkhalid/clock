var fullDate = new Date();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();


setInterval(timeChanger,1000);

function timeChanger(){
    var fullDate = new Date();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();

    document.getElementById('hour').innerHTML = hours + ":";
    document.getElementById('min').innerHTML = minutes + ":";
    document.getElementById('seconds').innerHTML = seconds;
}