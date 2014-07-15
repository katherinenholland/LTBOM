$(document).ready(function() {
    $(".button1").click(function() {
        $(".photo1").show();
        $(".photo2").hide();
        $(".button1").css("background-color","#333");
        $(".button2").css("background-color", "#555");
    });

    $(".button2").click(function() {
        $(".photo2").show();
        $(".photo1").hide();
        $(".button2").css("background-color","#333");
        $(".button1").css("background-color", "#555");
    });

    $(".selectId").change(function() {
        var selectedValue = $(this).find(":selected").val();
        if (selectedValue == "1") {
            $(".photo1").html("<img src=" + ImageList.Lions[0].Image + "/>");
            $(".photo2").html("<img src=" + ImageList.Lions[1].Image + "/>");
            $(".title1").html(ImageList.Lions[0].Title);
            $(".title2").html(ImageList.Lions[1].Title);
            $(".option1").html(ImageList.Lions[0].Title);
            $(".option2").html(ImageList.Lions[1].Title);
        }

        if (selectedValue == "2") {
            $(".photo1").html("<img src=" + ImageList.Tiger[0].Image + "/>");
            $(".photo2").html("<img src=" + ImageList.Tiger[1].Image + "/>");
            $(".title1").html(ImageList.Tiger[0].Title);
            $(".title2").html(ImageList.Tiger[1].Title);
            $(".option1").html(ImageList.Tiger[0].Title);
            $(".option2").html(ImageList.Tiger[1].Title);
        }

        if (selectedValue == "3") {
            $(".photo1").html("<img src=" + ImageList.Bears[0].Image + "/>");
            $(".photo2").html("<img src=" + ImageList.Bears[1].Image + "/>");
            $(".title1").html(ImageList.Bears[0].Title);
            $(".title2").html(ImageList.Bears[1].Title);
            $(".option1").html(ImageList.Bears[0].Title);
            $(".option2").html(ImageList.Bears[1].Title);
        }
    });
}); //end of document ready