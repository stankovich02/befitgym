let navMenu = document.querySelector('.navbar');
navMenu.innerHTML="";
let links = ['#home','#about','#features','#pricing','#trainers', '#review', '#blogs','author.html'];
let sections = ['home','about','features','pricing','trainers', 'review','blogs', 'author']
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
let footerLinks = ['#home','#about','#features','#pricing','#trainers', '#review','#blogs','documentation.pdf','sitemap.xml','rss.xml'];
let footerSections = ['home','about','features','pricing','trainers', 'review','blogs','documentation','sitemap','rss']
let footerBox = document.querySelector('.footer .box');
footerBox.innerHTML= '<h3>quick links</h3>'; 
for(let indeks in footerLinks){
    footerBox.innerHTML += `<a class="links" href="${footerLinks[indeks]}">${footerSections[indeks]}</a>`;
} 
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });