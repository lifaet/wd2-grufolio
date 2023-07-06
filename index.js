
    $("#home").click(function () {
        $('html,body').animate({
            scrollTop: $(".body-container").offset().top - 80
        },
            'fast');
    });
    $("#about").click(function () {
        $('html,body').animate({
            scrollTop: $(".about-container").offset().top - 80
        },
            'fast');
    });
    $("#achivement").click(function () {
        $('html,body').animate({
            scrollTop: $(".ach-container").offset().top - 80
        },
            'fast');
    });
    $("#contract").click(function () {

        $('html,body').animate({
            scrollTop: $(".contact-container").offset().top - 80
        },
            'fast');
    });