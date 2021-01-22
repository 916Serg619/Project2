$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // Render events on page load
  // $.get("/api/eventInfos", (req, res) => {
  //   res.render("members.handlebars", {});
  // });

  // Create wedding button redirect
  $("#createWedding").on("click", () => {
    window.location.href = "/planner";
  });
});

// Delete event button
$(".delete-event").on("click", deleteEvent);
function deleteEvent() {
  console.log("this was deleted");
  const data = $(this).attr("data-id");
  console.log(data);
  $.ajax({
    method: "DELETE",
    url: "/api/eventInfos/" + data
  }).then(location.reload());
}
