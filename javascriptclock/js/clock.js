
let name = prompt("Adınız nedir?")
document.getElementById('myName').innerHTML = name;


function updateTime() {
    let date = new Date();
    let n = date.toLocaleDateString();
    let time = date.toLocaleTimeString();

    document.getElementById("myClock").innerHTML = n + " " + time;
}


let t = setInterval(updateTime, 1000);