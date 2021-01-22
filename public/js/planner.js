$(document).ready(() => {
  // vars below connect to Google API for autocomplete
  const gpaInput = document.getElementById("venueInput");
<<<<<<< HEAD
  const autocomplete = new google.maps.places.Autocomplete(gpaInput);
  $("#submit").on("click", event => {
=======
  // eslint-disable-next-line no-unused-vars
  const autocomplete = new google.maps.places.Autocomplete(gpaInput);

  // Takes the data from the page and adds it to the db
  $("#submitNewWedding").on("click", event => {
>>>>>>> 6480a4c5bc4e7e6a0fb0da6a077e8f72826baed6
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
    window.location.href = "/members";
  });

  // Clears the text areas
  $("#submitNewWedding").bind("click", () => {
    $("input[type=text], textarea").val("");
  });

  // Create new entry in db
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

  // Navigation buttons
  $("#backToMain").on("click", () => {
    window.location.href = "/members";
  });
  $("#toSummary").on("click", () => {
    window.location.href = "/summary";
  });
});
