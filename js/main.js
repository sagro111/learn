var burgerButton = document.getElementsByClassName('burger-menu');
var hiddenMenu = document.getElementsByClassName('hidden-box');

burgerButton[0].onclick = function() {
    hiddenMenu[0].classList.add("hidden-box_fix")
}

burgerButton[1].onclick = function() {
    hiddenMenu[2].classList.remove("hidden-box_fix")
}

//Paralax effect in header

$(function () {
    $(document).on('mousemove', function (e) {
        $('.decorate__circle_left').css({
            left: -e.pageX / 10 + -15,
            top: -e.pageY / 10 + -127
        });
        $('.decorate__circle_right').css({
            right: e.pageX / 20 + -200,
            top: e.pageY / 20 + 250
        });
        $('.decorate__girl').css({
            right: -e.pageX / 10 + 130,
        });
    });
});

$(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("open");
})