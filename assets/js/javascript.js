document.addEventListener("scroll", function scrollPage(){
    scrollNavbar();
    scrollSection();
    scrollUp();  
});
//document.onscroll = scrollPage;

//SCROLL NAVBAR
const navbar = document.getElementById("navbar");

function scrollNavbar (){
    
    if(window.scrollY>150){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }
}


//NAVBAR OPEN/CLOSE
const bars = document.getElementById("bars");
const nav = document.getElementById("nav-item");
const close = document.getElementById("close");

function clickDown(e){
  
    if(nav.classList.toggle("nav-item-down")){
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-times");
    }else{
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");
    }
}
bars.onclick = clickDown;


//SCROLL SECTION / NAV ITEM ACTIVE
const sections = document.querySelectorAll("section");
const link = document.querySelectorAll(".item");

function scrollSection(){
    let nameSection = "";
    sections.forEach(section => {
        const sectionScrollTop = section.offsetTop;
        const sectionHeight = section.clientHeight; 
        if(scrollY > (sectionScrollTop - sectionHeight /3 )){
            nameSection = section.getAttribute("id");
        }    
    });

    link.forEach(element => {
        element.classList.remove("active");
        element.classList.remove("item-before-activo");
        if(element.classList.contains(nameSection)){
            element.classList.add("active");
            element.classList.add("item-before-activo");
        }
    });

}

link.forEach(element =>{
    element.addEventListener("click",function(e){
        nav.classList.remove("nav-item-down");
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");

    })
});


//UP BUTTON//
const buttonUp= document.getElementById("up");

function clickUp(scroll){
 buttonUp.addEventListener("click", function(){
     if(scroll>200){
         window.scrollTo(0,0);
     }
 })
}
 
function scrollUp(){
    let scroll = window.scrollY;
    
    if(window.scrollY > 200){
        buttonUp.classList.add("up-view");
        clickUp(scroll);
    }else {
        buttonUp.classList.remove("up-view");
    }
 }

