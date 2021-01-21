$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  // This takes the value from the drop down
  // and does a page redirect when the select wedding button is clicked to that page
  $("#selectWedding").on("click", () => {
    const getValue = $("#weddingList").val();
    window.location.href = `/${getValue}`;
  });

  $("#newWedding").on("click", () => {
    window.location.href = "/planner";
  });
  // function getWedding() {
  //   $.get("/api/eventInfos", data => {
  //     const weddingName = data[0].couple;
  //     console.log(data);
  //     console.log(data[0].couple);
  //   });
  // }
});
