$(document).ready(() => {
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
        .trim()
    };

    enterData(vendorCreateData);
  });

  $("#submitVendorCreate").bind("click", () => {
    $("input[type=text], textarea").val("");
  });

  function enterData(vendorCreateData) {
    console.log("123");
    $.post("/api/vendorInfos", {
      vendorName: vendorCreateData.vendorName,
      service: vendorCreateData.service,
      email: vendorCreateData.email,
      phone: vendorCreateData.phone
    })
      .then(() => {
        console.log(vendorCreateData);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
