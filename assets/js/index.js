//Menu Trigger//
function menuToggle() {
    let menu = document.getElementsByClassName("nav-mobile-wrapper");
    menu[0].classList.toggle('show');
}

//View Portfolio
function viewPortfolio() {
    window.location = "portfolio.html";
}

//View Projects
let projCards = document.getElementsByClassName("card");

if (projCards.length > 0) {
    //Populate data based on which card was clicked
    projCards[0].addEventListener("click", viewGMPower);
    projCards[1].addEventListener("click", viewBalaboosta);
    projCards[2].addEventListener("click", viewEdDining);
    projCards[3].addEventListener("click", viewContClient);
    projCards[4].addEventListener("click", viewLucca);
    projCards[5].addEventListener("click", viewRiseofFall);
    projCards[6].addEventListener("click", viewAndrePortfolio);
    
    //All cards open lightbox
    for (let card of projCards) {
        card.addEventListener("click", openModal);
    }
}

let featured = document.getElementsByClassName("featured");

if (featured.length > 0) {
    featured[0].addEventListener("click", viewGMPower);
    featured[1].addEventListener("click", viewEdDining);
    featured[2].addEventListener("click", viewAndrePortfolio);
    
    for (let feature of featured) {
        feature.addEventListener("click", openModal);
    }
}

//GLobal variables
let images = document.getElementsByClassName('project-slide');
let info = document.getElementsByClassName('project-info');
let title = document.getElementById('title');
let company = document.getElementById('company');
let caption = document.getElementById('caption-container');

//Open & Close Modal
function openModal() {
    document.getElementById("lightbox").style.display = "block";
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
    //Remove previously viewed project and show respective caption
    removeChild();
    showHideCaption();
}

//View each project
function viewMemGame() {
    window.open("https://esdhb0906.github.io/Project-Memory_Game/", "_blank");
}

function viewMyReads() {
    window.open("https://my-reads-eprishb.herokuapp.com/", "_blank");
}

function viewNeighMaps() {
    window.open("https://neighborhood-map-eprishb.herokuapp.com/", "_blank");
}

function viewGMPower() {

    changeToVideo();

    //Create video element
    let gmPower = document.createElement('VIDEO');
    gmPower.src="../img/projects/GMGreeter_1.mp4";
    gmPower.style.width="100%";
    gmPower.style.height="auto";
    gmPower.autoplay=true;

    images[0].appendChild(gmPower);

    //Set Caption
    let gmPowerCap = document.getElementById('GMPower-Cap');
    title.innerHTML = "GM POWERTRAIN";
    company.innerHTML = "Continental Services";
    gmPowerCap.classList.toggle('show');
}

function viewBalaboosta() {

    let balaboosta = document.createElement('img');
    balaboosta.src="../img/projects/Balaboosta.png";
    balaboosta.style.width="100%";
    balaboosta.style.height="auto";

    images[0].appendChild(balaboosta);

    images[0].classList.add('portrait')
    info[0].classList.add('portrait')

    let balaboostaCap = document.getElementById('Balaboosta-Cap');
    title.innerHTML = "BALABOOSTA";
    company.innerHTML = "Continental Services";
    balaboostaCap.classList.toggle('show');
}

function viewEdDining() {

    let edDiningBrochure = document.createElement('img');
    edDiningBrochure.src="../img/projects/ed-dining-brochure.png";
    edDiningBrochure.style.width="100%";
    edDiningBrochure.style.height="auto";

    let edDiningFolder = document.createElement('img');
    edDiningFolder.src="../img/projects/ed-dining-folder.png";
    edDiningFolder.style.width="100%";
    edDiningFolder.style.height="auto";

    let edDiningPOS = document.createElement('img');
    edDiningPOS.src="../img/projects/ed-dining-pos.png";
    edDiningPOS.style.width="100%";
    edDiningPOS.style.height="auto";

    let prev = document.createElement('a');
    let next = document.createElement('a');

    images[0].appendChild(edDiningBrochure);
    images[0].appendChild(edDiningFolder);
    images[0].appendChild(edDiningPOS);
    images[0].appendChild(prev);
    images[0].appendChild(next);

    images[0].classList.add('portrait');
    info[0].classList.add('portrait');

    edDiningBrochure.classList.add('mySlides');
    edDiningFolder.classList.add('mySlides');
    edDiningPOS.classList.add('mySlides');

    prev.classList.add('prev');
    next.classList.add('next');

    prev.innerHTML = '&#10094';
    next.innerHTML = '&#10095';

    prev.addEventListener('click', plusSlides(-1));
    next.addEventListener('click', plusSlides(1));

    let edDiningCap = document.getElementById('EdDining-Cap');
    title.innerHTML = "EDUCATIONAL DINING";
    company.innerHTML = "Continental Services";
    edDiningCap.classList.toggle('show');
}

function viewContClient() {
    window.open("https://youtu.be/aVkRW2K-fRo", "_blank");
}

function viewLucca() {

    changeToVideo();

    //Create video element
    let lucca = document.createElement('VIDEO');
    lucca.src="../img/projects/Lucca.mp4";
    lucca.style.width="100%";
    lucca.style.height="auto";
    lucca.autoplay=true;

    images[0].appendChild(lucca);

    //Set Caption
    let luccaCap = document.getElementById('Lucca-Cap');
    title.innerHTML = "LUCCA";
    company.innerHTML = "Continental Services";
    luccaCap.classList.toggle('show');
}

function viewRiseofFall() {

    let riseofFall = document.createElement('img');
    riseofFall.src="../img/projects/rise-of-fall.png";
    riseofFall.style.width="100%";
    riseofFall.style.height="auto";

    images[0].appendChild(riseofFall);

    images[0].classList.add('portrait')
    info[0].classList.add('portrait')

    let riseofFallCap = document.getElementById('RiseofFall-Cap');
    title.innerHTML = "Rise of Fall Pasta";
    company.innerHTML = "Continental Services";
    riseofFallCap.classList.toggle('show');
}

function viewAndrePortfolio() {

    let andrePort1 = document.createElement('img');
    andrePort1.src="../img/projects/USletter_04.jpg";
    andrePort1.style.width="100%";
    andrePort1.style.height="auto";

    let andrePort2 = document.createElement('img');
    andrePort2.src="../img/projects/USletter_05.jpg";
    andrePort2.style.width="100%";
    andrePort2.style.height="auto";

    let andrePort3 = document.createElement('img');
    andrePort3.src="../img/projects/USletter_07.jpg";
    andrePort3.style.width="100%";
    andrePort3.style.height="auto";

    let andrePort4 = document.createElement('img');
    andrePort4.src="../img/projects/USletter_08.jpg";
    andrePort4.style.width="100%";
    andrePort4.style.height="auto";

    let andrePort5 = document.createElement('img');
    andrePort5.src="../img/projects/USletter_10.jpg";
    andrePort5.style.width="100%";
    andrePort5.style.height="auto";

    let andrePort6 = document.createElement('img');
    andrePort6.src="../img/projects/USletter_11.jpg";
    andrePort6.style.width="100%";
    andrePort6.style.height="auto";

    let prev = document.createElement('a');
    let next = document.createElement('a');

    images[0].appendChild(andrePort1);
    images[0].appendChild(andrePort2);
    images[0].appendChild(andrePort3);
    images[0].appendChild(andrePort4);
    images[0].appendChild(andrePort5);
    images[0].appendChild(andrePort6);
    
    images[0].appendChild(prev);
    images[0].appendChild(next);

    images[0].classList.add('portrait');
    info[0].classList.add('portrait');

    andrePort1.classList.add('mySlides');
    andrePort2.classList.add('mySlides');
    andrePort3.classList.add('mySlides');
    andrePort4.classList.add('mySlides');
    andrePort5.classList.add('mySlides');
    andrePort6.classList.add('mySlides');

    prev.classList.add('prev');
    next.classList.add('next');

    prev.innerHTML = '&#10094';
    next.innerHTML = '&#10095';

    prev.addEventListener('click', plusSlides(-1));
    next.addEventListener('click', plusSlides(1));

    let andrePortCap = document.getElementById('AndrePort-Cap');
    title.innerHTML = "PORTFOLIO MAGAZINE";
    company.innerHTML = "Andre Morton";
    andrePortCap.classList.toggle('show');
}

//Download Resume
function downloadResume() {
    
}

//Remove ChildNodes clearing previous project before displaying new one\
function removeChild() {
    let currentProject = document.getElementsByClassName("project-slide");
    while (currentProject[0].firstChild) {
        currentProject[0].removeChild(currentProject[0].firstChild);
    }
}

//Toggles show on captions
function showHideCaption() {
    let captions = document.getElementsByClassName('caption');
    for (let caption of captions) {
        if (caption.classList.contains('show')) {
            caption.classList.toggle('show');
        }
    }
}

function changeToVideo() {
    //Change to video dimensions if previously image
    if (images[0].classList.contains('portrait') && info[0].classList.contains('portrait')) {
        images[0].classList.remove('portrait');
        info[0].classList.remove('portrait');
    }
}

//SLIDESHOW
let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}