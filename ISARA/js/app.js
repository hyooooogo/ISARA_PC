$(function () {
    $('.menu-parent').on('click', function () {
        $(this).next().slideToggle();
    });
});