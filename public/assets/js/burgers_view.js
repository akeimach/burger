$(document.body).ready(function(){

    $(".set-devoured").on("click", function(event) {
        event.preventDefault();
        console.log("VIEW: set-devoured");
        var burgerData = {
            devoured: true
        }
        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT",
            data: burgerData
        }).then(function() {
            console.log("Burger devoured is now: " + burgerData.devoured);
            // location.reload();
            //TODO: dont reload page to update
        });
    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
        console.log("VIEW: create-burger");
        var burgerData = {
            burger_name: "newburger"
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
        }).then(function() {
            console.log("Burger added: " + burgerData.burger_name);
            // location.reload();
        });
    });
});
