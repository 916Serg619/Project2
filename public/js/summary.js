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
