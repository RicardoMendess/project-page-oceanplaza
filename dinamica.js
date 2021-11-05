$(document).on("click", "#myBtnContainer button", function () {
	var variavel = $(this).attr("class");

  if (variavel == "show") {
    $(".Product img").show();
  } else {
    $(".Product img").hide();
    $(".Product ." + variavel).show();
  }
})
