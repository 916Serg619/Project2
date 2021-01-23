$(document).ready(() => {
  // vars below connect to Google API for autocomplete
  const gpaInput = document.getElementById("venueInput");
  // eslint-disable-next-line no-unused-vars
  const autocomplete = new google.maps.places.Autocomplete(gpaInput);

  // Takes the data from the page and adds it to the db
  $("#submitNewWedding").on("click", async event => {
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
      foodOptionOne: $("#foodOptionOneInput")
        .val()
        .trim(),
      foodOptionTwo: $("#foodOptionTwoInput")
        .val()
        .trim()
    };
    await enterData(eventData).then(() => {
      window.location.href = "/members";
    });
  });

  // Clears the text areas
  $("#submitNewWedding").bind("click", () => {
    $("input[type=text], textarea").val("");
  });

  // Create new entry in db
  function enterData(eventData) {
    return $.post("/api/eventInfos", {
      couple: eventData.couple,
      venueName: eventData.venue,
      eventDate: eventData.date,
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

  // Navigation buttons
  $("#backToMain").on("click", () => {
    window.location.href = "/members";
  });
  $("#toSummary").on("click", () => {
    window.location.href = "/summary";
  });
});
