$(document).ready(() => {
  const plannerForm = $(".planner");

  plannerForm.on("submit", event => {
    event.preventDefault();

    const eventData = {
      venue: $("#venueInput")
        .val()
        .trim()
    };

    enterData(eventData.venue);
    console.log(eventData);
  });

  function enterData(venue) {
    $.post("/api/eventInfos", {
      venueName: venue
    })
      .then(() => {
        console.log("name here " + venue);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
