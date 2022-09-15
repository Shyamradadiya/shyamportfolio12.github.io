// header Scroll
 let nav =document.querySelector(".navbar");
 window.onscroll = function(){
    if(document.documentElement.scrollTop> 20){
        nav.classList.add("header-scroller");
    }
    else{
        nav.classList.remove("header-scroller");
    }
 }

// Nav Hide

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navcollapse.classList.remove("show");
    });
});