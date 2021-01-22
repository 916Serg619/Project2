const db = require("../models");
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // $.get("/api/eventInfos", data => {
  //   const nextWedding = data[data.length - 1].id;
  //   console.log("kjahsfdiuasy7dfyhsdjhfkjsdf" + data);
  // });

  // Create wedding button redirect
  $("#createWedding").on("click", () => {
    // const page = parseInt($("#createWedding").attr("data-id")) + 1;
    window.location.href = "/planner";
  });

  // $("*[id*=edit]:visible").on("click", () => {
  //   const page = parseInt($("#createWedding").attr("data-id")) + 1;
  //   window.location.href = `/planner/${page}`;
  // });

  // $.get("/api/eventInfos/" + "1", function(data) {
  //   console.log(data);
  // })
});

$(".delete-event").on("click", deleteEvent);

function deleteEvent() {
  console.log("this was deleted");
  const data = $(this).attr("data-id");
  console.log(data);
  $.ajax({
    method: "DELETE",
    url: "/api/eventInfos/" + data
  }).then(
    app.get("/members", isAuthenticated, (req, res) => {
      db.eventInfos.findAll({}).then(dbEventInfo => {
        res.render("members.handlebars", {
          event: dbEventInfo
        });
      });
    })
  );
}
