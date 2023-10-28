

const menu = document.querySelector(".nav_menu") ;
const menuBtn = document.querySelector(".open-menu-btn") ;
const closeMenu = document.querySelector(".close-menu-btn") ;


menuBtn.addEventListener('click' , () =>{

    menu.style.display = "flex" ;
    closeMenu.style.display ="inline-block" ;
    menuBtn.style.display = "none" ;

})
const closeNav = () =>{
    menu.style.display = "none" ;
    closeMenu.style.display = "none" ;
    menuBtn.style.display = "inline-block" ;
}
closeMenu.addEventListener('click', closeNav) ;




