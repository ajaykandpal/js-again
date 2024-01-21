const clock = document.getElementById("clock") //or queryeslector

// let date = new Date();
// console.log(date.toLocaleTimeString());
//cron job of server can also be used

setInterval(() => {
    let date = new Date(); 
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);