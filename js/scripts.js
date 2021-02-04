    (function ($) {
    "use strict"; // start use strict

    // scrolling usurat folosind jQuery 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // inchide meniul receptiv cand un scroll trigger link este apasat 
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // activeaza scrollspy pentru a adauga clasa activ elementelor cand se face scroll  
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // colaps Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // colaps daca pagina nu e la inceput 
    navbarCollapse();
    // colapseaza navbar-ul cand pagina este citita 
    $(window).scroll(navbarCollapse);
})(jQuery); // finalul use strict




