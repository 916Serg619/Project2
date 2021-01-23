$(document).ready(() => {
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
    $(".delete-event").on("click", deleteEvent());

    function deleteEvent() {
      console.log("this was deleted");
      const data = $(this).attr("data-id");
      console.log(data);
      $.ajax({
        method: "DELETE",
        url: "/api/eventInfos/" + data
      });
    }

    //GSAP//
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.from(".card-title", { y: -50, stagger: 0.2, opacity: 0 })
      .from(".form-group", { y: -50, stagger: 0.2, opacity: 0 })
      .from(".btn", { y: -50, opacity: 0 })
      .from(".newSign", { y: -50, opacity: 0 })
      .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 });
  }
});
