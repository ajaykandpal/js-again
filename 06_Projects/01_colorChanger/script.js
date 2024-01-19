const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
       body.style.backgroundColor = e.target.id
    })
});
