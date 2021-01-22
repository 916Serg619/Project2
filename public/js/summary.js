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

  // Edit event
  $("#").on("click", deleteEvent);
  function deleteEvent() {
    console.log("this was deleted");
    const data = $(this).attr("data-id");
    console.log(data);
    $.ajax({
      method: "DELETE",
      url: "/api/eventInfos/" + data
    });
  }

  $("#tableMain").on("click", "td", () => {
    console.log("123");
  });

  $("#tableMain").on("click", "button", () => {
    console.log("123");
  });

  $('#mainBody').on('click', function(){
    console.log('123')
  $(this).closest("tr").find('#example').removeAttr('disabled');
});
