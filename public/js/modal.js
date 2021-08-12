$(function() {


    $("#submit-button").click(function() {
        if((fname.value !== "" && lname.value !== "") && (email.value !== "" && phone.value !== "")) {
            $("#submit-button").attr("data-toggle", "modal");
            $("#submit-button").attr("data-target", "#exampleModal");
        }
    });

    $("#closeModal").click(function() {
        $("#submit-button").removeAttr("data-toggle");
        $("#submit-button").attr("data-target");
    });

    $("#closeCross").click(function() {
        $("#submit-button").removeAttr("data-toggle");
        $("#submit-button").removeAttr("data-target");
    });

    $("#exampleModal").click(function() {
        $("#submit-button").removeAttr("data-toggle");
        $("#submit-button").removeAttr("data-target");
    });

});





