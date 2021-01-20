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

  // NEW for table
  var coupleInput = $("#couple-name");
  $(document).on("submit", "#wedding-form", createAuthorRow);

  // Function for creating a new list row for authors
  function createAuthorRow(coupleInput) {
    var newTr = $("<tr>");
    newTr.append("<td>" + coupleInput + "</td>");
    newTr.append("<td><a href='/summary'>Summary</td>");
    newTr.append("<td>Edit</td>");
    newTr.append("<td>Delete</td>");
    return newTr;
  }
});
