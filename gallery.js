$(document).ready(function () {

    // Hover effect for thumbnail images
    $("#thumbs img").hover(
        function () {

            $(this).css({
                "border": "2px solid darkgreen",
                "box-shadow": "0 0 10px darkgreen"
            });

        },

        function () {

            $(this).css({
                "border": "none",
                "box-shadow": "none"
            });

        }
    );

    // Click thumbnail to change large image
    $("#thumbs img").click(function () {

        var newImage = $(this).attr("src");
        var newTitle = $(this).attr("alt");

        $("#lgPic").attr("src", newImage);

        $("#lgTitle").text(newTitle);

    });

    // Click large image to open image in new window
    $("#lgPic").click(function () {

        var largeImage = $(this).attr("src");

        window.open(largeImage);

    });

});