$(document.body).ready(function(){

    $(".set-devoured").on("click", function(event) {
        event.preventDefault();
        var burgerData = { devoured: true }
        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT",
            data: burgerData
        }).then(function(result) {
            //TODO: dont reload page to update
            location.reload();
        });
    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
        var burgerData = { burger_name: $("#add-burger").val().trim() };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
        }).then(function(result) {
            location.reload();
        });
    });
});
