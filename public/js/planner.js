$(document).ready(() => {
  // vars below connect to Google API for autocomplete
  const gpaInput = document.getElementById("venueInput");
  // eslint-disable-next-line no-unused-vars
  const autocomplete = new google.maps.places.Autocomplete(gpaInput);

  // Takes the data from the page and adds it to the db
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

  // Clears the text areas
  $("#submit").bind("click", () => {
    $("input[type=text], textarea").val("");
    window.location.href = "/summary";
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
});
