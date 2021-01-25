$(document).ready(() => {
  // Create guest functionality
  $("#submitGuestCreate").on("click", event => {
    event.preventDefault();

    const guestCreateData = {
      firstName: $("#firstNameInput")
        .val()
        .trim(),
      lastName: $("#lastNameInput")
        .val()
        .trim(),
      email: $("#emailInput")
        .val()
        .trim(),
      phone: $("#phoneInput")
        .val()
        .trim(),
      // hard-coded event foreign key
      eventInfoId: $("#eventInfoId").text()
    };

    // Post and redirect
    enterData(guestCreateData);
    const url = window.location.href;
    const path = url.substr(url.length - 1);
    window.location.href = `/summary/${path}`;
  });

  // Clears values from inputs
  $("#submitGuestCreate").bind("click", () => {
    $("input[type=text], textarea").val("");
  });

  // Create new db entry
  function enterData(guestCreateData) {
    $.post("/api/guests", {
      firstName: guestCreateData.firstName,
      lastName: guestCreateData.lastName,
      email: guestCreateData.email,
      phone: guestCreateData.phone,
      // event foreign key hard-code
      eventInfoId: guestCreateData.eventInfoId
    })
      .then(() => {
        console.log(guestCreateData);
      })
      .catch(err => {
        console.log(err);
      });
  }
  $("#addNewGuest").on("click", event => {
    event.preventDefault();
    console.log('123')
    const guestCreateData = {
      firstName: $("#firstNameInput")
        .val()
        .trim(),
      lastName: $("#lastNameInput")
        .val()
        .trim(),
      email: $("#emailInput")
        .val()
        .trim(),
      phone: $("#phoneInput")
        .val()
        .trim(),
      // hard-coded event foreign key
      eventInfoId: $("#eventInfoId").text()
    };
    console.log(guestCreateData);
    // Post and redirect
    enterData(guestCreateData);
    const url = window.location.href;
    const path = url.substr(url.length - 1);
    window.location.href = `/summary/${path}`;
    location.reload();
  });
});
