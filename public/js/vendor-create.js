$(document).ready(() => {
  // Create vendor functionality
  $("#submitVendorCreate").on("click", event => {
    event.preventDefault();

    const vendorCreateData = {
      vendorName: $("#vendorNameInput")
        .val()
        .trim(),
      service: $("#vendorServiceInput")
        .val()
        .trim(),
      email: $("#vendorEmailInput")
        .val()
        .trim(),
      phone: $("#vendorPhoneInput")
        .val()
        .trim(),
      // hard-coded event foreign key
      eventInfoId: $("#eventInfoId").text()
    };

    // Post and redirect
    enterData(vendorCreateData);
    const url = window.location.href;
    const path = url.substr(url.length - 1);
    window.location.href = `/summary/${path}`;
  });

  // Clears values from inputs
  $("#submitVendorCreate").bind("click", () => {
    $("input[type=text], textarea").val("");
  });

  // Create new db entry
  function enterData(vendorCreateData) {
    $.post("/api/vendorInfos", {
      vendorName: vendorCreateData.vendorName,
      service: vendorCreateData.service,
      email: vendorCreateData.email,
      phone: vendorCreateData.phone,
      // event foreign key hard-code
      eventInfoId: vendorCreateData.eventInfoId
    })
      .then(() => {
        console.log(vendorCreateData);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
