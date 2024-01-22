const slide = document.querySelector('.slider-slide')


let currentImageIndex = 0;

let images =[
    'img/slider1.jpg',
    'img/slider2.jpg',
    'img/slider3.jpg'
]
//Funktionen sørger for at give <img> en src attribute. - Hver gang funktionen køres opdateres src attributen//
function setActiveSlide(index){
    slide.setAttribute('src', images [index])
}
setActiveSlide(currentImageIndex)

function next(){
    if(currentImageIndex >= images.length - 1){
    currentImageIndex = 0;
    }else{
        currentImageIndex += 1;
    }
    setActiveSlide(currentImageIndex)
}


//setInterval sætter hvor lang tid der skal gå mellem billederne skifter i slideren i millisekunder//
setInterval(next, 4000 )

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
//addEventListener kører en funktion (toggleMenu) når der bliver trykket på .hamburger//
hamburger.addEventListener("click", toggleMenu);


function myFunction(){
    alert("Du er nu medlem af vores kundeklub");
  }

  var submitbutton = document.querySelector(".submitbutton")

  submitbutton.addEventListener("click", myFunction)

  const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
  const git = gitExtension.getAPI(1);




