$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // Create wedding button redirect
  $("#createWedding").on("click", () => {
    window.location.href = "/planner";
  });

  // $.get("/api/eventInfos/" + "1", function(data) {
  //   console.log(data);
  // })
});

$(".delete-event").on("click", deleteEvent);

function deleteEvent(id) {
  console.log("this was deleted");
  $.ajax({
    method: "DELETE",
    url: "/api/eventInfos/" + id
  });
}
