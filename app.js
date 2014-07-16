$(document).ready(function() {
    // creat select from external data
    $.each(ImageList, function (key) {
        //alert(key);
        $(".selectId").append("<option>" + key + "</option>");
    });

    // li buttons
    $.each(ImageList[$(".selectId").val()], function(keyItem) {
        $(".indexList").append("<li value='" + keyItem + "'>" + ImageList[$(".selectId").val()][keyItem].Title + "</li>"); 
    });

    // li button click listener
    $(".indexList").on('click', 'li', function() {
        //alert("you clicked on " + $(this).text());
        $(".selectedPhoto").html("<img src=" + ImageList[$(".selectId").val()][$(this).val()].Image + ">");
        $(".title").html("<h3>" + ImageList[$(".selectId").val()][$(this).val()].Title + "</h3>");
    });

    // select element onChange
    $(".selectId").change(function() {
        //alert($(".selectId").val());
        $(".indexList").empty();
        $.each(ImageList[$(".selectId").val()], function(keyItem) {
            //alert(ImageList[$(".selectId").val()][keyItem].Title);
            $(".indexList").append("<li value='" + keyItem + "'>" + ImageList[$(".selectId").val()][keyItem].Title + "</li>");
        });
    });
}); //end of document ready