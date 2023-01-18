const responsive = document.getElementsByClassName("menu-responsive")[0]
const burger = document.getElementById("burger")

burger.addEventListener ("click", ()=>{
     responsive.classList.toggle("active")
})