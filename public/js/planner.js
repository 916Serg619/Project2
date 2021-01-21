$(document).ready(() => {
    // vars below connect to Google API for autocomplete
    let gpaInput = document.getElementById("venueInput");
    let autocomplete = new google.maps.places.Autocomplete(gpaInput);
    $("#submit").on("click", event => {
        event.preventDefault();
        const eventData = {
            couple: $("#coupleInput")
                .val()
                .trim(),
            venue: $("#venueInput")
                .val()
                .trim(),
            date: $("#dateInput")
                .val()
                .trim(),
            address: $("#addressStreetInput")
                .val()
                .trim(),
            city: $("#addressCityInput")
                .val()
                .trim(),
            foodOptionOne: $("#foodOptionOneInput")
                .val()
                .trim(),
            foodOptionTwo: $("#foodOptionTwoInput")
                .val()
                .trim()
        };

        enterData(eventData);
    });

    $("#submit").bind("click", () => {
        $("input[type=text], textarea").val("");
    });

    function enterData(eventData) {
        $.post("/api/eventInfos", {
                couple: eventData.couple,
                venueName: eventData.venue,
                eventDate: eventData.date,
                addressStreet: eventData.address,
                addressCity: eventData.city,
                foodOptionOne: eventData.foodOptionOne,
                foodOptionTwo: eventData.foodOptionTwo
            })
            .then(() => {
                console.log(eventData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    $("#selectWedding").on("click", () => {
        const getValue = $("#weddingList").val();
        window.location.href = `/${getValue}`;
    });

    $("#newWedding").on("click", () => {
        window.location.href = "/planner";
    });
});