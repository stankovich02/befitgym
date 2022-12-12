
let navMenu = document.querySelector('.navbar');
navMenu.innerHTML="";
let links = ['home','about','features','pricing','trainers', 'review', 'https://stankovich02.github.io/portfolio/'];
let sections = ['home','about','features','pricing','trainers', 'review', 'author']
for(let indeks in links)
{
    if(indeks == links.length)
    {
        navMenu.innerHTML += `<a href="#${links[indeks]}">${sections[indeks]}</a>`
    }
    else
    {
        navMenu.innerHTML += `<a href="/befitgym/${links[indeks]}">${sections[indeks]}</a>`
    }
}
let boxCont = document.querySelector('#about-cont');
boxCont.innerHTML="";
let aboutMotives = ['body and mind', 'healthy life', 'strategies', 'workout'];
for(let indeks in aboutMotives)
{
    boxCont.innerHTML += `<div class="box about-check">
                            <h3>
                                <i class="fas fa-check"></i>${aboutMotives[indeks]}
                            </h3>
                        </div>`
}


let features = document.querySelector('#features .box-container');
features.innerHTML = "";
let singleFeature = ['body building', 'gym for men', 'gym for women'];
let nameOfImages = ['f-img-1.jpg', 'f-img-2.jpg','f-img-3.jpg'];
let altFeaturesImages = ['men-with-weigths','men-showing-abs','women-showing-biceps'];
let altFeaturesIcons = ['biceps','men-lifting-dumbbells','women-lifting-dumbbells'];
for(let indeks in singleFeature)
{
    features.innerHTML += `<div class="box">
                            <div class="image">
                                <img src="images/${nameOfImages[indeks]}" alt="${altFeaturesImages[indeks]}">
                            </div>
                            <div class="content">
                                <img src="images/icon-1.png" alt="${altFeaturesIcons[indeks]}">  
                                <h3>${singleFeature[indeks]}</h3>
                            </div>
                           </div>`
}
let trainerBox = document.querySelector('#trainers .box-container');
trainerBox.innerHTML = "";
let trainerImages = ['trainer-1.jpg','trainer-2.jpg','trainer-3.jpg','trainer-4.jpg'];
let altTrainerImages = ['Josh Chase - Expert trainer','Victoria Pollard - Expert trainer','Frank Gardner - Expert trainer','Beth Thompson  - Expert trainer'];
let trainerNames = ['Josh Chase','Victoria Pollard','Frank Gardner','Beth Thompson'];
for(let indeks in trainerImages){
    trainerBox.innerHTML += `<div class="box">
                                <img src="images/${trainerImages[indeks]}" alt="${altFeaturesImages[indeks]}">
                                <div class="content">
                                    <span>expert trainer</span>
                                    <h3>${trainerNames[indeks]}</h3>
                                    <div class="share">
                                        <a href="https://www.facebook.com/" class="fab fa-facebook-f"></a>
                                        <a href="https://twitter.com/" class="fab fa-twitter"></a>
                                        <a href="https://www.linkedin.com/" class="fab fa-linkedin"></a>
                                    </div>
                                </div>
                            </div>`
}
let testimonialSlider = document.querySelector("#review .swiper-wrapper");
testimonialSlider.innerHTML="";
let clientsNames = ['Elmer Dunn','Melisa Nash','Hayden Brandt','Barbara Hilton'];
let clientsProffesions = ['designer','photographer','lawyer','ui/ux designer'];
let clientsPictures = ['pic-1.png','pic-2.png','pic-3.png','pic-4.png']
let altClientsPictures = ['Elmer Dunn - designer','Melisa Nash - photographer','Hayden Brandt - lawyer','Barbara Hilton - ui/ux designer'];
let clientsTestimonials = ["I had over 100kg, and I was afraid of that cognition. My friend told me about BEFIT and in 2 months I have lost 15kg. I am very happy now and I won't stop losing my belly at any cost!",
                        "BEFIT means something special to me. People out there, trainers, everyone are kind and helpful. For now, my body looks perfect in my opinion and I am very satisfied!",
                        "Sitting all day in the chair and typing for people made my health and spine worse, so I had to go to a gym. A friend recommended BEFIT gym to me and now I am not scared about my spine anymore!",
                        "I am BEFIT client for almost 3 years and every day for me is something different. I wake up and the only thing on what I am thinking about is morning training at the BEFIT gym after that I am ready for other obligations that day."];
for(let indeks in clientsNames){
    testimonialSlider.innerHTML +=  `<div class="swiper-slide slide">
                                        <p>${clientsTestimonials[indeks]}</p>
                                        <div class="user">
                                            <img src="images/${clientsPictures[indeks]}" alt="${altClientsPictures[indeks]}">
                                            <div class="info">
                                                <h3>${clientsNames[indeks]}</h3>
                                                <span>${clientsProffesions[indeks]}</span>
                                            </div>
                                            <i class="fas fa-quote-left"></i>
                                        </div>
                                    </div>`
}      
let footerBox = document.querySelector('.footer .box');
footerBox.innerHTML= '<h3>quick links</h3>'; 
for(let indeks in links){
    footerBox.innerHTML += `<a class="links" href="#${links[indeks]}">${sections[indeks]}</a>`;
} 
var expDateDay = document.querySelector('#expdatemonth');
var expDateYear = document.querySelector('#expdateyear');
var datum = new Date();
var dateyear = datum.getFullYear();
var shortyear = dateyear % 2000;
for(let i=1; i<=12; i++){
    if(i<10)
    {
        expDateDay.innerHTML += "<option value=" + i + ">0" + i + "</option>";
    }
    else{
        expDateDay.innerHTML += `<option value="${i}">${i}</option>`
    } 
}

for(let i=shortyear; i<=shortyear + 10; i++){
    expDateYear.innerHTML += `<option value="${i}">${i}</option>`
}
const form = document.querySelector('#orderingForm');
const fullName = document.querySelector('#fullname');
const mail = document.querySelector('#email');
const Selectplans = document.querySelector('#selectplans');
const cardNumber = document.querySelector('#Cardnmb');
const expMonth = document.querySelector('#expdatemonth');
const expYear = document.querySelector('#expdateyear');
const cvv = document.querySelector('#cvv');
const cardHolder = document.querySelector('#cardholder');
const submit = document.querySelector('#submit');
var fullnameRegex = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}(\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14}))?$/;
var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var cardNumberRegex = /^[0-9]{16}$/;
var expMonthRegex = /^[0-9]{2}$/;
var expYearRegex = /^[0-9]{2}$/;
var cvvRegex = /^[0-9]{3}$/;   
var messages = document.querySelectorAll('#orderingForm span');
function validateFullName(){
    if(fullName.value.match(fullnameRegex)){
        fullName.classList.remove('incomplete');
        fullName.classList.add('complete');
        messages[0].innerHTML = "";
        return true;
    }
    else if(fullName.value.length == 0){
        fullName.classList.add('incomplete');
        fullName.classList.remove('complete');
        messages[0].innerHTML = "Please enter your full name!";
        return false;
    }
    else{
        fullName.classList.add('incomplete');
        fullName.classList.remove('complete');
        messages[0].innerHTML = "Please enter your full name in correct format! <br>Example: John Doe";
        return false;
    }
}
function validateMail(){
    if(mail.value.match(mailRegex)){
        mail.classList.remove('incomplete');
        mail.classList.add('complete');
        messages[1].innerHTML = "";
        return true;
    }
    else if(mail.value.length == 0){
        mail.classList.add('incomplete');
        mail.classList.remove('complete');
        messages[1].innerHTML = "Please enter your email!";
        return false;
    }
    else{
        mail.classList.add('incomplete');
        mail.classList.remove('complete');
        messages[1].innerHTML = "Please enter your email in correct format! <br>Example: johndoe@gmail.com";
        return false;
    }
}

function validateSelectPlans(){
    let selectedValue = Selectplans.options[Selectplans.selectedIndex].value;
    if(selectedValue == 0){
        Selectplans.classList.remove('complete');
        Selectplans.classList.add('incomplete');
        messages[2].innerHTML = "Please choose your plan!";
        return false;
    }
    else{
        Selectplans.classList.remove('incomplete');
        Selectplans.classList.add('complete');
        messages[2].innerHTML = "";
        return true;
    }
}
function validateCardNumber(){
    if(cardNumber.value.match(cardNumberRegex)){
        cardNumber.classList.remove('incomplete');
        cardNumber.classList.add('complete');
        messages[3].innerHTML = "";
        return true;
    }
    else if(cardNumber.value.length == 0 )
    {
        cardNumber.classList.add('incomplete');
        cardNumber.classList.remove('complete');
        messages[3].innerHTML = "Please enter your card number!";
        return false;
    }
    else{
        cardNumber.classList.add('incomplete');
        cardNumber.classList.remove('complete');
        messages[3].innerHTML = "Please enter your card number in correct format! <br>Example: 1234 5678 9012 3456";
        return false;
    }
}
function validateCvv(){
    if(cvv.value.match(cvvRegex)){
        cvv.classList.remove('incomplete');
        cvv.classList.add('complete');
        messages[6].innerHTML = "";
        return true;
    }
    else if (cvv.value.length == 0){
        cvv.classList.remove('complete');
        cvv.classList.add('incomplete');
        messages[6].innerHTML = "Please enter your CVV!";
        return false;
    }
    else{
        cvv.classList.remove('complete');
        cvv.classList.add('incomplete');
        messages[6].innerHTML = "Please enter your CVV in correct format! <br>Example: 123";
        return false;
    }
}
function validateCardHolder(){
    if(cardHolder.value.match(fullnameRegex)){
        cardHolder.classList.remove('incomplete');
        cardHolder.classList.add('complete');
        messages[7].innerHTML = "";
        return true;
    }
    else if(cardHolder.value.length == 0){
        cardHolder.classList.add('incomplete');
        cardHolder.classList.remove('complete');
        messages[7].innerHTML = "Please enter card holder name!";
        return false;
    }
    else{
        cardHolder.classList.add('incomplete');
        cardHolder.classList.remove('complete');
        messages[7].innerHTML = "Please enter your card holder name in correct format! <br>Example: John Doe";
        return false;
    }
}

function validateExpMonth(){
   if(expMonth.value.match(expMonthRegex))
   {
    expMonth.classList.remove('incomplete');
    expMonth.classList.add('complete');
    messages[5].innerHTML = "";
    return true;
   }
   else if(expMonth.value.length == 0)
   {
    expMonth.classList.remove('complete');
    expMonth.classList.add('incomplete');
    messages[5].innerHTML = "Please enter your expiration date!";
    return false;
   }
   else
   { 
    expMonth.classList.remove('complete');
    expMonth.classList.add('incomplete');
    messages[5].innerHTML = "Please enter your expiration month date in correct format! <br>Example: 01";
    return false;
}
}
function validateExpYear(){
    
    if(expYear.value < shortyear && expYear.value > 0)
   {
    expYear.classList.remove('complete');
    expYear.classList.add('incomplete');
    messages[5].innerHTML = "Your card is expired!";
    return false;
   }
    if(expYear.value.match(expYearRegex))
   {
    expYear.classList.remove('incomplete');
    expYear.classList.add('complete');
    messages[5].innerHTML = "";
    return true;
   }
   else if(expYear.value.length == 0)
   {
    expYear.classList.remove('complete');
    expYear.classList.add('incomplete');
    messages[5].innerHTML = "Please enter your expiration date!";
    return false;
   }
   else
   { 
    expYear.classList.remove('complete');
    expYear.classList.add('incomplete');
    messages[5].innerHTML = `Please enter your expiration year date in correct format! <br>Example: ${shortyear}`};
    return false;
}
fullName.addEventListener('focus', () => {
    fullName.classList.add('incomplete');
    });
fullName.addEventListener('blur', validateFullName);
fullName.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace' || e.key == 'Delete'){
        fullName.classList.remove('complete');
        fullName.classList.add('incomplete');
    }

});
mail.addEventListener('focus', () => {
    mail.classList.add('incomplete');
    });
mail.addEventListener('blur', validateMail);
mail.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace' || e.key == 'Delete'){
        mail.classList.remove('complete');
        mail.classList.add('incomplete');
    }

});
Selectplans.addEventListener('blur', validateSelectPlans);
cardNumber.addEventListener('focus', () => {
    cardNumber.classList.add('incomplete');
    });
cardNumber.addEventListener('blur', validateCardNumber);
cardNumber.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace' || e.key == 'Delete'){
        cardNumber.classList.remove('complete');
        cardNumber.classList.add('incomplete');
        document.querySelector('#cardtype img').removeAttribute('src');
    }
    if(e.key == 4)
    {
        document.querySelector('#cardtype img').setAttribute('src', 'images/visa.png');
    }
    if(e.key == 5)
    {
        document.querySelector('#cardtype img').setAttribute('src', 'images/master.png');
    }

});
expMonth.addEventListener('focus', () => {
    expMonth.classList.add('incomplete');
    });
expMonth.addEventListener('blur', validateExpMonth);
expYear.addEventListener('focus', () => {
    expYear.classList.add('incomplete');
    });
expYear.addEventListener('blur', validateExpYear);
cvv.addEventListener('focus', () => {
    cvv.classList.add('incomplete');
    });
cvv.addEventListener('blur', validateCvv);
cardHolder.addEventListener('focus', () => {
    cardHolder.classList.add('incomplete');
    });
cardHolder.addEventListener('blur', validateCardHolder);
cardHolder.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace' || e.key == 'Delete'){
        cardHolder.classList.remove('complete');
        cardHolder.classList.add('incomplete');
    }

});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateFullName();
    validateMail();
    validateSelectPlans();
    validateCardNumber();
    validateExpMonth();
    validateExpYear();
    validateCvv();
    validateCardHolder();
    if(validateFullName() && validateMail() && validateSelectPlans() && validateCardNumber() && validateExpMonth() && validateExpYear() && validateCvv() && validateCardHolder())
    {
        alert('Success');
        setTimeout("location.reload(true);", 0);
    }
   

});




