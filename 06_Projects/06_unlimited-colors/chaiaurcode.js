const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
function changeBack() {
  if (!interval) {
    interval = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
}
function stopBack() {
  clearInterval(interval);
  interval = null;
}
document.querySelector("#start").addEventListener("click", changeBack);
document.querySelector("#stop").addEventListener("click", stopBack);
