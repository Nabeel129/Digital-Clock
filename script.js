let time = document.getElementById("clock");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function digitalClock() {
    let date = new Date();
    // let hh = date.getHours();
    // let mm = date.getMinutes();
    // let ss = date.getSeconds();
    // let ms = date.getMilliseconds();
    // let dd = weekday[date.getDay()];
    // let year = date.getFullYear();
    let clock = `<span class="fs-3 fw-bold"> ${date} <span>`
    time.innerHTML = clock;
}

setInterval(digitalClock, 1000);

// console.log(hh);
