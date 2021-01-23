$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstName);
  });

  // Render events on page load
  renderpage();
  function renderpage() {
    $.get("/api/eventInfos", (req, res) => {
      res.render("members.handlebars", {
        event: dbEventInfo
      });
    });
  }
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

//GSAP//
const tl = gsap.timeline({ defaults: { duration: 0.5 } });

tl.from(".container", { x: -100, stagger: 0.2, opacity: 0 })
  .from(".row", { x: -50, stagger: 0.2, opacity: 0 })
  .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 });

document.getElementById("btn-success").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
