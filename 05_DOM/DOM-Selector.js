const title = document.getElementById("title") // would return whole h1 tag
document.getElementById("title").id // would return "title"
document.getElementById("title").className // would return "heading". note, we used className, not class. as class is reserved work in js
document.getElementById("title").attributes // would return all attributes
document.getElementById("title").getAttribute('id') // would return id value
document.getElementById("title").setAttribute('class' ,'test') // would overwrite, not append
document.getElementById("title").setAttribute('class' ,'heading test') // //if want to append

// to style
title.style.backgroundColor = 'green'
title.style.padding = "16px"
title.style.borderRadius = "10px"

// +++++++++ adding content, imp

title.textContent // 'DOM learning again test'
title.innerHTML // 'DOM learning again <span style="display: none "> test </span>'
title.innerText // 'DOM learning again'

// innertext :-> shows visible text. lets say we have a <span> inside <h1> with visibility none, innertext wont return it
// but innercontent would give all the content, whether hidden or not
// innerHTML :-> would return the <span> too

//  +++++++++++ query selector

//queryselector works similar to css. can select tags, ids, class,  tags with attributes, child nodes, etc
document.querySelector('h1') // would return first h1 tag
document.querySelector('.heading') // class heading
document.querySelector('#title') // id title
document.querySelector('input[type="password"]') // input field of type password
document.querySelectorAll('p:first-child') // first child of para

//lets say we want to change color of first list item
const myList = document.querySelector('ul')
myList.querySelector('li').style.color = "green"

// ++++++++++ queryselectorall :- gives nodelist, not array. kinda similar to array though. can use for-each here
const allList = document.querySelectorAll('li')
allList[0].style.backgroundColor = "green"
// note: even if only one element is present, still will get a nodelist
allList.forEach( (l) => {
    l.style.backgroundColor = "white"
})

const htmlList = document.getElementsByClassName('list-item') //would get HTMLCollectiom (no for-each, or other loops), diff than NodeList
// to use loops in HTMLCollection, convert in array
const arrayHtml = Array.from(htmlList)


