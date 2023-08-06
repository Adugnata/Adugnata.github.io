$(document).ready(function () {
    $("#start").on("click", start);

    function start() {
        $(".boundary").removeClass("youlose");
        $(".boundary").removeClass("youwin");
        $("#status").text("Game started");

        //lost

        let touch = false;
        $(".boundary").mouseover(function () {
            touch = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost, better luck next time :(");

        });

        // won
        $("#end").mouseover(function () {

            if (!touch) {
                $(".boundary").addClass("youwin");
                $("#status").text("You won :)");

            }
        });
    }

});