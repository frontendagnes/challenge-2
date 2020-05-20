document.addEventListener('DOMContentLoaded', function () {

//#region  przyklejenie menu  
    let head = document.querySelector(".head");
    function scroll() {
        if (window.scrollY > 150) {
            head.classList.add("navbar-fixed-top")
        } else
            head.classList.remove("navbar-fixed-top")
    }

    window.addEventListener("scroll", scroll);


//#endregion

// #region JQuery animacja menu podczas przewijania
function activeMenu() {
    const scroll = $(window).scrollTop(); //ustalam pozycję scroola

    //ustalam w którym miejscu zczyna się każdy article
    const aboutUs = $("#about-us").offset().top;
    const ourService = $("#our-service").offset().top;
    const gallery = $("#gallery").offset().top;
    const blog = $("#blog").offset().top;
    const contact = $("#contact").offset().top;

    // sprawdzam czy pozycja scroll osiągneła pozycje danego article i w zalezności dodaje lub usuwam klasę z aniamcją
    if (scroll < aboutUs -150) {
        $("nav li hr").not(".hr1").removeClass("li-hr");
        $(".hr1").addClass("li-hr");
    } else if (scroll < ourService - 150) {
        $("nav li hr").not(".hr2").removeClass("li-hr");
        $(".hr2").addClass("li-hr");
    } else if (scroll < gallery - 150){
        $("nav li hr").not(".hr3").removeClass("li-hr");
        $(".hr3").addClass("li-hr");
    } else if (scroll < blog - 150){
        $("nav li hr").not(".hr4").removeClass("li-hr");
        $(".hr4").addClass("li-hr");
    }  else if (scroll < contact - 150){
        $("nav li hr").not(".hr5").removeClass("li-hr");
        $(".hr5").addClass("li-hr");
    }  
    else {
        $("nav li hr").not(".hr6").removeClass("li-hr");
        $(".hr6").addClass("li-hr");
    }
}
// dodaje nasłuch na scroll podczas przewijania okna i wywołuję funkcję JQuery
$(window).on("scroll", activeMenu);

//#endregion

})