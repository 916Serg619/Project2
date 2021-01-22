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
