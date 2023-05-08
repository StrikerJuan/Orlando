const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Botón ir hacia arriba//////////////////////////////////////////////////
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.scrollTo (0,0);
    }
}

//Botón deje de aparecer estando hasta arriba
buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 250){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

let year=document.getElementById("year")
year.innerHTML=new Date().getFullYear()
///////////////////////////////////////////////////////////////////////