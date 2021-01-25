$(document).ready(() => {
  gsaploading();
  // Edit button for event info
  $("#editEvent").on("click", () => {
    window.location.href = "/planner";
  });
  // Delete vendor
  $(".delete-vendor").on("click", deleteVendor());
  {
    {
      console.log("this was clicked"), preventDefault();
    }

    // Delete event
    // $(".delete-event").on("click", deleteEvent());
    $("td").on("click", ".delete-event", function(event) {
      event.preventDefault();
      console.log(123);
      console.log("this was deleted");
      const data = $(this).attr("data-id");
      console.log(data);
      $.ajax({
        method: "DELETE",
        url: "/api/eventInfos/" + data
      });
    });
  }
  //GSAP//

  function gsaploading() {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.from("#vendorInfo", { y: -50, stagger: 0.2, opacity: 0 })
      .from(".form-group", { y: -50, stagger: 0.2, opacity: 0 })
      .from(".btn", { y: -50, opacity: 0 })
      .from(".newSign", { y: -50, opacity: 0 })
      .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 });
  }
});
