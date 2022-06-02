let density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
let matrix = true;


$(document).ready(function() {

    $('#detail').change(function() {

        let f = $('#detail').val() * -1 + 9;
        let arr = [0.75, 1.55, 2.25, 3, 4, 4.5, 5.25, 6];
        let lh = arr[f - 1];
        console.log("f:" + f + " lh: " + lh);
        $('#videoOut').css({
            "font-size": f + "pt",
            "line-height": lh + "pt"
        });
    });

    $('#invert').change(function() {
        density = [...density].reverse().join("");
    });

    $('#matrix').change(function() {
        if (matrix) {
            $('body').css({
                "color": "rgb(68, 255, 0)"
            });

            $('#videoOut').css({
                "color": "rgb(68, 255, 0)"
            });

            $('.slider').css({
                "border": "2px solid rgb(68, 255, 0)"
            });

        } else {
            $('body').css({
                "color": "#fff"
            });

            $('#videoOut').css({
                "color": "#fff"
            });

            $('.slider').css({
                "border": "2px solid rgb(255, 255, 255)"
            });
        }

        matrix = !matrix;

        console.log(matrix);


    });

    $('#charChoice').change(function() {
        density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
        $('#invert').prop("checked", false);
    });

    $('#shaderChoice').change(function() {
        density = "        .:░▒▓█'";
        density = [...density].reverse().join("");
        $('#invert').prop("checked", false);
    });





});