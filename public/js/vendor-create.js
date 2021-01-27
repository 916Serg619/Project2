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
  $("#addNewVendor").on("click", event => {
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
    location.reload();
  });
  const tl = gsap.timeline({ defaults: { duration: 0.5 } });
  tl.from("#vendorInfo", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".form-group", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".btn", { y: -50, opacity: 0 })
    .from(".newSign", { y: -50, opacity: 0 })
    .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 });
  gsap.from(".palmtrees", { x: -100, stagger: 2, opacity: 0 });
});
