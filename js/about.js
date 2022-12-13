let navMenu = document.querySelector('.navbar');
navMenu.innerHTML="";
let links = ['#home','#about','#features','#pricing','#trainers', '#review', 'author.html'];
let sections = ['home','about','features','pricing','trainers', 'review', 'author']
const menubtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
menubtn.addEventListener('click', () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};
for(let indeks in links){
    navMenu.innerHTML += `<a href="/befitgym/${links[indeks]}">${sections[indeks]}</a>`;
} 
let footerBox = document.querySelector('.footer .box');
footerBox.innerHTML= '<h3>quick links</h3>'; 
for(let indeks in links){
    footerBox.innerHTML += `<a class="links" href="${links[indeks]}">${sections[indeks]}</a>`;
} 