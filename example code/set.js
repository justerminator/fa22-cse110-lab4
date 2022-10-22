let d = new Date();
function displayTime() {
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(displayTime, 1000);
