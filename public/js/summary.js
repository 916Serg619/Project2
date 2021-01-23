$(document).ready(() => {
    // $.get("/api/eventInfos").then(data => {
    //   // $("#couple").text(data.couple);
    //   $("#venue").text(data.venueName);
    //   $("#date").text(data.eventDate);
    //   $("#address").text(data.addressStreet);
    //   $("#city").text(data.addressCity);
    //   $("#foodOne").text(data.foodOptionOne);
    //   $("#foodTwo").text(data.foodOptionTwo);
    // });

    // Edit button for event info
    $("#editEvent").on("click", () => {
        window.location.href = "/planner";
    });
});

$(".delete-event").on("click", deleteEvent);

function deleteEvent(id) {
    console.log("this was deleted");
    $.ajax({
        method: "DELETE",
        url: "/api/eventInfos/" + id
    });
}

//GSAP//
var tl = gsap.timeline({ defaults: { duration: 0.5 } })



tl.from(".card-title", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".form-group", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".btn", { y: -50, opacity: 0, }, )
    .from(".newSign", { y: -50, opacity: 0 })
    .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 })