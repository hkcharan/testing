let navItems = document.querySelector('.nav-items');
let menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    navItems.classList.toggle('ab');
});


var copy = document.querySelector(".images-slide").cloneNode(true);
document.querySelector(".images").appendChild(copy);

var text_copy = document.querySelector(".text").cloneNode(true);
document.querySelector(".run-text").appendChild(text_copy);
