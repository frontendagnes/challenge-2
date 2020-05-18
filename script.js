document.addEventListener('DOMContentLoaded', function (){
    console.log("hej");
   let head = document.querySelector(".head");
   
   function scroll(){
   if(window.scrollY > 150){
       head.classList.add("navbar-fixed-top")
   }else
   head.classList.remove("navbar-fixed-top")
   }

   window.addEventListener("scroll", scroll);

})