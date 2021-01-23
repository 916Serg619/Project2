$(document).ready(() => {
  // Edit button for event info
  $("#editEvent").on("click", () => {
    window.location.href = "/planner";
  });

  // Delete event
  $(".delete-event").on("click", deleteEvent);
  function deleteEvent() {
    console.log("this was deleted");
    const data = $(this).attr("data-id");
    console.log(data);
    $.ajax({
      method: "DELETE",
      url: "/api/eventInfos/" + data
    });
  }

  // Delete vendor
  $(".delete-event").on("click", deleteEvent);
  function deleteEvent() {
    console.log("this was deleted");
    const data = $(this).attr("data-id");
    console.log(data);
    $.ajax({
      method: "DELETE",
      url: "/api/vendorInfos/" + data
    });
  }
});
