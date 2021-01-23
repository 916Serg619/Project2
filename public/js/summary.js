$(document).ready(() => {
  // Edit button for event info
  $("#editEvent").on("click", () => {
    window.location.href = "/planner";
  });
  // Delete vendor
  $(".delete-vendor").on("click", deleteVendor());
  {
    console.log("this was clicked"), preventDefault();
  }
  function deleteVendor() {
    console.log();
    console.log("this was deleted");
    const data1 = $(this).attr("data-id");
    console.log(data1);
    $.ajax({
      method: "DELETE",
      url: "/api/vendorInfos/" + data
    });
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
});
