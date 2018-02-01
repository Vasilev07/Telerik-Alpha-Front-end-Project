$(function () {
    $(".done").on("click", function () {
        $(this).animate({
            "left": "-=10px",
            "height": "+=20px",
            "width": "+=60px",
            "font-size": "+=10px"
        });
    });

    $(".important").on("click", function () {
        $(this).animate({
            "left": "-=10px",
            "height": "+=20px",
            "width": "+=60px",
            "font-size": "+=10px"
        });
    });
});