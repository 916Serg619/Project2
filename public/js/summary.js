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
  }
  // Delete event
  // $(".delete-event").on("click", deleteEvent());
  $("td").on("click", ".delete-event", function(event) {
    event.preventDefault();
    console.log("this was deleted");
    const data = $(this).attr("data-id");
    // console.log(data);
    $.ajax({
      method: "DELETE",
      url: "/api/eventInfos/" + data
    });
  });

  //GSAP//
  const tl = gsap.timeline({ defaults: { duration: 0.5 } });

  tl.from(".container", { x: -100, stagger: 0.2, opacity: 0 })
    .from("table", { x: -50, stagger: 0.2, opacity: 0 })
    .from("", { x: -100, stagger: 0.2, opacity: 0 })
    .from("button", { y: -50, opacity: 0 });

  document.getElementById("btn-success").addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
});
