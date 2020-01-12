$(document).ready(function() {
  // Focus the search input whenever the modal is shown
  $("#search_modal").on("hidden.bs.modal", function(e) {
    $("#search_input").val("");
    $(".search_results").hide();

    $("#demo_button").focus();
  });

  // Focus the search input whenever the modal is shown
  $("#search_modal").on("shown.bs.modal", function(e) {
    $("#search_input").focus();
  });

  // Hide search results when input is empty
  $("#search_input").keyup(function() {
    if ($(this).val() == "") {
      $(".search_results").hide();
    } else {
      $(".search_results").show();
    }
  });
});
