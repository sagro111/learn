
$('#burger-menu').click(function () {
    $('#hidden-box').animate({top:'-25px'})
})


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