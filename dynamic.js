let density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";

$(document).ready(function(){


    $('#detail').change(function(){
        
        let f = $('#detail').val() * -1 + 9;
        let arr = [0.75, 1.55, 2.25, 3, 4, 4.5, 5.25, 6];
        let lh = arr[f - 1];
        console.log("f:" + f + " lh: " + lh);
        $('#videoOut').css({
            "font-size": f + "pt",
            "line-height": lh + "pt"
        });
    });

    $('#invert').change(function(){
        density = [...density].reverse().join("");
    });

    $('#charChoice').change(function(){
        density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
        $('#invert').prop("checked", false);
    });

    $('#shaderChoice').change(function(){
        density = "        .:░▒▓█'";
        density = [...density].reverse().join("");
        $('#invert').prop("checked", false);
    });



});